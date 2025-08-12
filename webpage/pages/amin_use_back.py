from flask import Flask, jsonify, request
from datetime import datetime
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow frontend to call backend from a different origin

# Mock user data (replace with DB later)
users = [
    {
        "id": 1,
        "name": "John Smith",
        "email": "john.smith@email.com",
        "phone": "(555) 123-4567",
        "role": "laborer",
        "status": "verified",
        "registeredDate": "2025-01-15",
        "lastActive": "2025-01-30",
        "skills": ["Plumbing", "Electrical"],
        "city": "New York, NY"
    },
    {
        "id": 2,
        "name": "Maria Garcia",
        "email": "maria.garcia@email.com",
        "phone": "(555) 234-5678",
        "role": "laborer",
        "status": "pending",
        "registeredDate": "2025-01-28",
        "lastActive": "2025-01-31",
        "skills": ["Carpentry", "Painting"],
        "city": "Los Angeles, CA"
    }
]

# GET users with optional filters
@app.route("/api/users", methods=["GET"])
def get_users():
    search = request.args.get("search", "").lower()
    role = request.args.get("role")
    status = request.args.get("status")
    activity = request.args.get("activity")

    filtered = users
    if search:
        filtered = [u for u in filtered if search in u["name"].lower() 
                    or search in u["email"].lower() 
                    or search in u["phone"]]
    if role:
        filtered = [u for u in filtered if u["role"] == role]
    if status:
        filtered = [u for u in filtered if u["status"] == status]
    if activity:
        now = datetime.now()
        def is_active(last_active):
            last_date = datetime.strptime(last_active, "%Y-%m-%d")
            days = (now - last_date).days
            return (activity == "active" and days <= 7) or (activity == "inactive" and days > 7)
        filtered = [u for u in filtered if is_active(u["lastActive"])]

    return jsonify(filtered)

# GET single user
@app.route("/api/users/<int:user_id>", methods=["GET"])
def get_user(user_id):
    user = next((u for u in users if u["id"] == user_id), None)
    if user:
        return jsonify(user)
    return jsonify({"error": "User not found"}), 404

# Update user status
@app.route("/api/users/<int:user_id>/status", methods=["PUT"])
def update_status(user_id):
    data = request.json
    status = data.get("status")
    for u in users:
        if u["id"] == user_id:
            u["status"] = status
            return jsonify({"message": f"User {status} successfully!"})
    return jsonify({"error": "User not found"}), 404

# Bulk update status
@app.route("/api/users/bulk-status", methods=["PUT"])
def bulk_update_status():
    data = request.json
    ids = data.get("ids", [])
    status = data.get("status")
    count = 0
    for u in users:
        if u["id"] in ids:
            u["status"] = status
            count += 1
    return jsonify({"message": f"{count} users updated to {status}."})

if __name__ == "__main__":
    app.run(debug=True)

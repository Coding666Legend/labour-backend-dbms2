module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./components/**/*.{html,js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Deep Blue Theme
        primary: {
          50: "#EFF6FF", // blue-50
          100: "#DBEAFE", // blue-100
          500: "#3B82F6", // blue-500
          600: "#2563EB", // blue-600
          700: "#1D4ED8", // blue-700
          800: "#1E40AF", // blue-800 (main primary)
          900: "#1E3A8A", // blue-900
          DEFAULT: "#1E40AF", // blue-800
        },
        
        // Secondary Colors - Sophisticated Slate
        secondary: {
          50: "#F8FAFC", // slate-50
          100: "#F1F5F9", // slate-100
          200: "#E2E8F0", // slate-200
          300: "#CBD5E1", // slate-300
          400: "#94A3B8", // slate-400
          500: "#64748B", // slate-500 (main secondary)
          600: "#475569", // slate-600
          700: "#334155", // slate-700
          800: "#1E293B", // slate-800
          900: "#0F172A", // slate-900
          DEFAULT: "#64748B", // slate-500
        },
        
        // Accent Colors - Warm Orange
        accent: {
          50: "#FFF7ED", // orange-50
          100: "#FFEDD5", // orange-100
          500: "#F97316", // orange-500
          600: "#EA580C", // orange-600 (main accent)
          700: "#C2410C", // orange-700
          DEFAULT: "#EA580C", // orange-600
        },
        
        // Background Colors
        background: "#F8FAFC", // slate-50
        surface: "#FFFFFF", // white
        
        // Text Colors
        text: {
          primary: "#0F172A", // slate-900
          secondary: "#475569", // slate-600
        },
        
        // Status Colors
        success: {
          50: "#ECFDF5", // emerald-50
          100: "#D1FAE5", // emerald-100
          500: "#10B981", // emerald-500
          600: "#059669", // emerald-600 (main success)
          DEFAULT: "#059669", // emerald-600
        },
        
        warning: {
          50: "#FFFBEB", // amber-50
          100: "#FEF3C7", // amber-100
          500: "#F59E0B", // amber-500
          600: "#D97706", // amber-600 (main warning)
          DEFAULT: "#D97706", // amber-600
        },
        
        error: {
          50: "#FEF2F2", // red-50
          100: "#FEE2E2", // red-100
          500: "#EF4444", // red-500
          600: "#DC2626", // red-600 (main error)
          DEFAULT: "#DC2626", // red-600
        },
        
        // Border Colors
        border: {
          DEFAULT: "#E2E8F0", // slate-200
          light: "#F1F5F9", // slate-100
        },
      },
      
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        inter: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'Monaco', 'monospace'],
        data: ['JetBrains Mono', 'Menlo', 'Monaco', 'monospace'],
      },
      
      fontSize: {
        'display': ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.2', fontWeight: '700' }],
        'heading-1': ['clamp(1.75rem, 3vw, 2.25rem)', { lineHeight: '1.3', fontWeight: '600' }],
        'heading-2': ['clamp(1.5rem, 2.5vw, 1.875rem)', { lineHeight: '1.3', fontWeight: '600' }],
        'heading-3': ['clamp(1.25rem, 2vw, 1.5rem)', { lineHeight: '1.4', fontWeight: '600' }],
        'body-lg': ['clamp(1rem, 1.5vw, 1.125rem)', { lineHeight: '1.6', fontWeight: '400' }],
        'body': ['clamp(0.875rem, 1.2vw, 1rem)', { lineHeight: '1.6', fontWeight: '400' }],
        'caption': ['clamp(0.75rem, 1vw, 0.875rem)', { lineHeight: '1.5', fontWeight: '400' }],
        'data': ['clamp(0.75rem, 1vw, 0.875rem)', { lineHeight: '1.5', fontWeight: '400' }],
      },
      
      boxShadow: {
        'card': '0 2px 4px rgba(0, 0, 0, 0.06)',
        'elevated': '0 8px 24px rgba(0, 0, 0, 0.12)',
        'focus': '0 0 0 3px rgba(30, 64, 175, 0.1)',
      },
      
      borderRadius: {
        'sm': '4px',
        'md': '6px',
        'lg': '8px',
        'xl': '12px',
      },
      
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      
      transitionDuration: {
        'fast': '150ms',
        'normal': '200ms',
        'slow': '300ms',
      },
      
      animation: {
        'spin-slow': 'spin 1s linear infinite',
        'fade-in': 'fadeIn 0.2s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-balance': {
          'text-wrap': 'balance',
        },
        '.transition-smooth': {
          'transition': 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
        },
        '.transition-fast': {
          'transition': 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)',
        },
        '.transition-slow': {
          'transition': 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
        },
        '.focus-ring:focus': {
          'outline': 'none',
          'box-shadow': '0 0 0 3px rgba(30, 64, 175, 0.1)',
        },
        '.hover-lift:hover': {
          'transform': 'translateY(-2px)',
          'box-shadow': '0 8px 24px rgba(0, 0, 0, 0.12)',
        },
        '.hover-scale:hover': {
          'transform': 'scale(1.02)',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}
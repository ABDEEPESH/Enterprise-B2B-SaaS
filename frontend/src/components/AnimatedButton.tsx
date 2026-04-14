import { motion } from 'framer-motion'
import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '../utils/cn'

interface AnimatedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gradient'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  loading?: boolean
  glowEffect?: boolean
  children: React.ReactNode
}

const AnimatedButton = forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ className, variant = 'primary', size = 'md', loading = false, glowEffect = true, children, disabled, ...props }, ref) => {
    const baseClasses = 'relative inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2'
    
    const variants = {
      primary: 'bg-primary-600 hover:bg-primary-700 text-white shadow-md hover:shadow-lg focus:ring-primary-500',
      secondary: 'bg-secondary-100 hover:bg-secondary-200 text-secondary-900 shadow-sm hover:shadow-md focus:ring-secondary-500',
      outline: 'border border-primary-600 text-primary-600 hover:bg-primary-50 hover:border-primary-700 focus:ring-primary-500',
      ghost: 'text-secondary-600 hover:text-secondary-900 hover:bg-secondary-100 focus:ring-secondary-500',
      gradient: 'bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white shadow-md hover:shadow-lg focus:ring-primary-500'
    }
    
    const sizes = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg',
      xl: 'px-8 py-4 text-xl'
    }

    const buttonVariants = {
      initial: { scale: 1, rotateX: 0, rotateY: 0 },
      hover: { 
        scale: 1.02, 
        rotateX: -5, 
        rotateY: 5,
        transition: { duration: 0.2, ease: "easeOut" }
      },
      tap: { 
        scale: 0.98, 
        rotateX: 5, 
        rotateY: -5,
        transition: { duration: 0.1, ease: "easeIn" }
      },
      disabled: { scale: 1, rotateX: 0, rotateY: 0 }
    }

    const glowVariants = {
      initial: { opacity: 0, scale: 0.8 },
      hover: { 
        opacity: 1, 
        scale: 1.2,
        transition: { duration: 0.3, ease: "easeOut" }
      },
      tap: { opacity: 0.5, scale: 0.9 }
    }

    return (
      <motion.button
        ref={ref}
        className={cn(
          baseClasses,
          variants[variant],
          sizes[size],
          (disabled || loading) && 'opacity-50 cursor-not-allowed',
          className
        )}
        variants={buttonVariants}
        initial="initial"
        whileHover={!disabled && !loading ? "hover" : "disabled"}
        whileTap={!disabled && !loading ? "tap" : "disabled"}
        disabled={disabled || loading}
        {...props}
      >
        {/* Glow Effect */}
        {glowEffect && variant !== 'ghost' && (
          <motion.div
            className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary-400 to-accent-400 opacity-0 blur-xl"
            variants={glowVariants}
            style={{ zIndex: -1 }}
          />
        )}

        {/* Button Content */}
        <span className="relative z-10 flex items-center justify-center">
          {loading && (
            <motion.svg
              className="animate-spin -ml-1 mr-3 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </motion.svg>
          )}
          {children}
        </span>

        {/* Ripple Effect */}
        <motion.div
          className="absolute inset-0 rounded-lg bg-white opacity-0"
          whileTap={{ opacity: 0.2 }}
          transition={{ duration: 0.1 }}
        />
      </motion.button>
    )
  }
)

AnimatedButton.displayName = 'AnimatedButton'

export default AnimatedButton

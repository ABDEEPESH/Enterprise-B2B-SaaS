import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'
import { cn } from '../utils/cn'

interface ServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
  features?: string[]
  color?: 'primary' | 'accent' | 'success' | 'warning' | 'error'
  glassmorphism?: boolean
  hover?: boolean
  className?: string
}

const ServiceCard = ({
  title,
  description,
  icon: Icon,
  features = [],
  color = 'primary',
  glassmorphism = true,
  hover = true,
  className
}: ServiceCardProps) => {
  const colorClasses = {
    primary: {
      bg: 'from-primary-500 to-primary-600',
      hover: 'hover:from-primary-600 hover:to-primary-700',
      text: 'text-primary-600 dark:text-primary-400',
      border: 'border-primary-200 dark:border-primary-800',
      glow: 'shadow-glow dark:shadow-glow-lg'
    },
    accent: {
      bg: 'from-accent-500 to-accent-600',
      hover: 'hover:from-accent-600 hover:to-accent-700',
      text: 'text-accent-600 dark:text-accent-400',
      border: 'border-accent-200 dark:border-accent-800',
      glow: 'shadow-glow dark:shadow-glow-lg'
    },
    success: {
      bg: 'from-success-500 to-success-600',
      hover: 'hover:from-success-600 hover:to-success-700',
      text: 'text-success-600 dark:text-success-400',
      border: 'border-success-200 dark:border-success-800',
      glow: 'shadow-glow dark:shadow-glow-lg'
    },
    warning: {
      bg: 'from-warning-500 to-warning-600',
      hover: 'hover:from-warning-600 hover:to-warning-700',
      text: 'text-warning-600 dark:text-warning-400',
      border: 'border-warning-200 dark:border-warning-800',
      glow: 'shadow-glow dark:shadow-glow-lg'
    },
    error: {
      bg: 'from-error-500 to-error-600',
      hover: 'hover:from-error-600 hover:to-error-700',
      text: 'text-error-600 dark:text-error-400',
      border: 'border-error-200 dark:border-error-800',
      glow: 'shadow-glow dark:shadow-glow-lg'
    }
  }

  const currentColor = colorClasses[color]

  const cardVariants = {
    initial: { 
      opacity: 0, 
      y: 20,
      scale: 0.95
    },
    animate: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: hover ? {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    } : {}
  }

  const iconVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  }

  const featureVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1
      }
    }
  }

  return (
    <motion.div
      className={cn(
        'relative group',
        glassmorphism && 'glass',
        !glassmorphism && 'bg-white dark:bg-slate-800 rounded-xl shadow-card border border-secondary-200 dark:border-slate-700',
        hover && 'card-hover cursor-pointer',
        className
      )}
      variants={cardVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
    >
      {/* Gradient Border Effect */}
      <div className={cn(
        'absolute inset-0 rounded-xl bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10',
        currentColor.bg,
        currentColor.glow
      )} />

      {/* Card Content */}
      <div className="relative p-6 lg:p-8">
        {/* Icon */}
        <motion.div
          className={cn(
            'w-16 h-16 rounded-2xl flex items-center justify-center mb-6',
            glassmorphism 
              ? 'bg-white/20 dark:bg-white/10 backdrop-blur-sm border border-white/30 dark:border-white/20'
              : `bg-gradient-to-br ${currentColor.bg} shadow-lg`
          )}
          variants={iconVariants}
          whileHover="hover"
        >
          <Icon className={cn(
            'w-8 h-8',
            glassmorphism ? 'text-white' : 'text-white'
          )} />
        </motion.div>

        {/* Title */}
        <h3 className={cn(
          'text-xl lg:text-2xl font-bold mb-4',
          glassmorphism ? 'text-white' : 'text-secondary-900 dark:text-white'
        )}>
          {title}
        </h3>

        {/* Description */}
        <p className={cn(
          'mb-6 leading-relaxed',
          glassmorphism ? 'text-white/80' : 'text-secondary-600 dark:text-slate-300'
        )}>
          {description}
        </p>

        {/* Features */}
        {features.length > 0 && (
          <motion.ul
            className="space-y-3"
            variants={featureVariants}
            initial="initial"
            animate="animate"
          >
            {features.map((feature, index) => (
              <motion.li
                key={index}
                className={cn(
                  'flex items-center space-x-3',
                  glassmorphism ? 'text-white/90' : 'text-secondary-700 dark:text-slate-300'
                )}
                variants={{
                  initial: { opacity: 0, x: -20 },
                  animate: { opacity: 1, x: 0 }
                }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={cn(
                  'w-2 h-2 rounded-full flex-shrink-0',
                  glassmorphism ? 'bg-white/60' : `bg-${color}-500`
                )} />
                <span className="text-sm">{feature}</span>
              </motion.li>
            ))}
          </motion.ul>
        )}

        {/* Hover Overlay */}
        {hover && (
          <motion.div
            className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/10 dark:from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          />
        )}
      </div>

      {/* Animated Corner Accent */}
      <motion.div
        className={cn(
          'absolute top-0 right-0 w-20 h-20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300',
          `bg-gradient-to-br ${currentColor.bg}`
        )}
        initial={{ scale: 0 }}
        whileHover={{ scale: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />
    </motion.div>
  )
}

export default ServiceCard

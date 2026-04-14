import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Landmark,
  HeartPulse,
  ShoppingCart,
  Truck,
  Brain,
  ArrowRight,
  TrendingUp
} from 'lucide-react'
import { useModal } from '../../context/ModalContext'
import AnimatedButton from '../../components/AnimatedButton'

const industries = [
  {
    id: 'fintech',
    title: 'FinTech',
    description: 'Digital transformation for banking, payments, and financial services.',
    icon: Landmark,
    stats: '50+ Projects Delivered',
    color: 'from-emerald-500 to-teal-500'
  },
  {
    id: 'healthtech',
    title: 'HealthTech',
    description: 'HIPAA-compliant solutions for healthcare providers and digital health startups.',
    icon: HeartPulse,
    stats: '30+ Healthcare Partners',
    color: 'from-red-500 to-rose-500'
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce',
    description: 'Scalable platforms for retail, marketplace, and omnichannel commerce.',
    icon: ShoppingCart,
    stats: '$2B+ GMV Processed',
    color: 'from-blue-500 to-indigo-500'
  },
  {
    id: 'logistics',
    title: 'Logistics',
    description: 'Supply chain optimization and fleet management solutions.',
    icon: Truck,
    stats: '1M+ Shipments Tracked',
    color: 'from-orange-500 to-amber-500'
  },
  {
    id: 'ai',
    title: 'AI & Machine Learning',
    description: 'Intelligent automation and predictive analytics for modern enterprises.',
    icon: Brain,
    stats: '20+ AI Models Deployed',
    color: 'from-purple-500 to-violet-500'
  }
]

const Industries: React.FC = () => {
  const { openLeadModal } = useModal()

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-50 via-white to-primary-50 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 dark:text-white mb-6">
              Industries We <span className="gradient-text">Serve</span>
            </h1>
            <p className="text-lg md:text-xl text-secondary-600 dark:text-slate-300 mb-8">
              Deep domain expertise across regulated and high-growth sectors. We understand your unique challenges.
            </p>
            <AnimatedButton variant="gradient" size="lg" onClick={openLeadModal}>
              Discuss Your Industry Needs
            </AnimatedButton>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-secondary-50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={`/industries/${industry.id}`}
                  className="group block h-full bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-secondary-100 dark:border-slate-700"
                >
                  <div className={`h-2 bg-gradient-to-r ${industry.color}`} />
                  <div className="p-8">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${industry.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <industry.icon className="w-7 h-7 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {industry.title}
                    </h3>
                    
                    <p className="text-secondary-600 dark:text-slate-300 mb-6">
                      {industry.description}
                    </p>
                    
                    <div className="flex items-center text-primary-600 dark:text-primary-400 font-medium mb-4">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      {industry.stats}
                    </div>
                    
                    <div className="flex items-center text-primary-600 dark:text-primary-400 font-medium">
                      Explore Solutions
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative bg-gradient-to-br from-secondary-600 via-primary-600 to-accent-500 rounded-3xl p-12 lg:p-16 text-center overflow-hidden"
          >
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Don't See Your Industry?
              </h2>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                We work across many sectors. Let's discuss how our expertise can be applied to your specific industry challenges.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <AnimatedButton
                  variant="white"
                  size="lg"
                  onClick={openLeadModal}
                >
                  Contact Our Team
                </AnimatedButton>
                <AnimatedButton
                  variant="outline-white"
                  size="lg"
                  onClick={() => window.location.href = '/contact'}
                >
                  View All Services
                </AnimatedButton>
              </div>
            </div>
            
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Industries

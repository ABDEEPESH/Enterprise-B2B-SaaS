import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Lightbulb, 
  Palette, 
  Code2, 
  Cloud, 
  Shield,
  ArrowRight,
  CheckCircle2
} from 'lucide-react'
import { useModal } from '../../context/ModalContext'
import AnimatedButton from '../../components/AnimatedButton'

const services = [
  {
    id: 'strategy',
    title: 'Digital Strategy',
    description: 'Transform your business with data-driven digital transformation roadmaps and strategic consulting.',
    icon: Lightbulb,
    features: ['Digital Transformation Roadmaps', 'Technology Stack Assessment', 'Process Optimization', 'Growth Strategy'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'design',
    title: 'UX/UI Design',
    description: 'Create exceptional user experiences with our award-winning design team and research-backed methodologies.',
    icon: Palette,
    features: ['User Research & Testing', 'Interface Design', 'Design Systems', 'Prototyping'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'development',
    title: 'Software Development',
    description: 'Build scalable, enterprise-grade applications with modern technologies and agile methodologies.',
    icon: Code2,
    features: ['Web Applications', 'Mobile Apps', 'API Development', 'Legacy Modernization'],
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 'cloud',
    title: 'Cloud Solutions',
    description: 'Accelerate innovation with secure, scalable cloud infrastructure and migration services.',
    icon: Cloud,
    features: ['Cloud Migration', 'Infrastructure as Code', 'Serverless Architecture', 'Multi-Cloud Strategy'],
    color: 'from-sky-500 to-blue-500'
  },
  {
    id: 'security',
    title: 'Cybersecurity',
    description: 'Protect your enterprise with comprehensive security assessments and managed security services.',
    icon: Shield,
    features: ['Security Audits', 'Penetration Testing', 'Compliance (SOC2, ISO27001)', '24/7 Monitoring'],
    color: 'from-red-500 to-orange-500'
  }
]

const Services: React.FC = () => {
  const { openLeadModal } = useModal()

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 dark:text-white mb-6">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-lg md:text-xl text-secondary-600 dark:text-slate-300 mb-8">
              End-to-end digital solutions for enterprise transformation. From strategy to execution, we deliver excellence.
            </p>
            <AnimatedButton variant="gradient" size="lg" onClick={openLeadModal}>
              Schedule Consultation
            </AnimatedButton>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-secondary-50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={`/services/${service.id}`}
                  className="group block h-full bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-secondary-100 dark:border-slate-700"
                >
                  <div className={`h-2 bg-gradient-to-r ${service.color}`} />
                  <div className="p-8">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-secondary-600 dark:text-slate-300 mb-6">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-secondary-500 dark:text-slate-400">
                          <CheckCircle2 className="w-4 h-4 mr-2 text-primary-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex items-center text-primary-600 dark:text-primary-400 font-medium">
                      Learn More
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
            className="relative bg-gradient-to-br from-primary-600 via-accent-500 to-secondary-600 rounded-3xl p-12 lg:p-16 text-center overflow-hidden"
          >
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                Let's discuss how our services can help you achieve your digital transformation goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <AnimatedButton
                  variant="white"
                  size="lg"
                  onClick={openLeadModal}
                >
                  Get Started Today
                </AnimatedButton>
                <AnimatedButton
                  variant="outline-white"
                  size="lg"
                  onClick={() => window.location.href = '/contact'}
                >
                  Contact Sales
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

export default Services

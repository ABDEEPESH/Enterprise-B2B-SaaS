import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useModal } from '../context/ModalContext'
import { 
  ArrowRight, 
  CheckCircle, 
  TrendingUp, 
  Shield, 
  Users, 
  Code,
  Palette,
  Lightbulb,
  Star,
  Play,
  Building,
  Zap
} from 'lucide-react'
import AnimatedButton from '../components/AnimatedButton'
import ServiceCard from '../components/ServiceCard'

const Home = () => {
  const { openLeadModal } = useModal()
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const services = [
    {
      title: 'Strategy Consulting',
      description: 'Transform your business vision into actionable strategies with data-driven insights and industry expertise.',
      icon: Lightbulb,
      features: ['Market Analysis', 'Growth Planning', 'Digital Transformation', 'Risk Assessment'],
      color: 'primary' as const
    },
    {
      title: 'UI/UX Design',
      description: 'Create exceptional user experiences that delight customers and drive engagement through human-centered design.',
      icon: Palette,
      features: ['User Research', 'Prototyping', 'Design Systems', 'Accessibility'],
      color: 'accent' as const
    },
    {
      title: 'Development',
      description: 'Build scalable, robust applications using cutting-edge technologies and best practices.',
      icon: Code,
      features: ['Web Applications', 'Mobile Apps', 'API Development', 'Cloud Architecture'],
      color: 'success' as const
    }
  ]

  const stats = [
    { value: '500+', label: 'Enterprise Clients', icon: Building },
    { value: '99.9%', label: 'Uptime SLA', icon: Shield },
    { value: '24/7', label: 'Support Available', icon: Users },
    { value: '50%', label: 'Average ROI Increase', icon: TrendingUp }
  ]

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CTO at TechCorp',
      company: 'Fortune 500 Technology Company',
      content: 'Enterprise Platform transformed our digital infrastructure, resulting in a 40% increase in operational efficiency and significant cost savings.',
      rating: 5
    },
    {
      name: 'Michael Rodriguez',
      role: 'CEO at FinanceHub',
      company: 'Leading FinTech Startup',
      content: 'Their strategic consulting helped us scale from 100 to 10,000 users in just 6 months. The ROI has been exceptional.',
      rating: 5
    },
    {
      name: 'Emily Watson',
      role: 'VP of Operations',
      company: 'Global Logistics Leader',
      content: 'The custom solution they built has revolutionized our supply chain management. We couldn\'t be happier with the results.',
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-secondary-50 via-white to-primary-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-dots opacity-30" />
        
        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-primary-200 rounded-full opacity-20"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-32 h-32 bg-accent-200 rounded-full opacity-20"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container relative z-10">
          <motion.div
            variants={containerVariants}
            initial="initial"
            animate="animate"
            className="text-center max-w-5xl mx-auto"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                <Zap className="w-4 h-4 mr-2" />
                Trusted by 500+ Enterprise Companies
              </span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="heading-1 mb-6 gradient-text"
            >
              Transform Your Business with
              <br />
              Enterprise-Grade Solutions
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="body-lg mb-8 max-w-3xl mx-auto text-secondary-600 dark:text-slate-300"
            >
              Unlock the full potential of your organization with our comprehensive suite of 
              enterprise solutions. From strategy consulting to cutting-edge development, 
              we partner with you to drive innovation, scale operations, and achieve remarkable growth.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
              <AnimatedButton size="lg" className="group" onClick={openLeadModal}>
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </AnimatedButton>
              
              <AnimatedButton variant="outline" size="lg" className="flex items-center">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </AnimatedButton>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-8 text-sm text-secondary-500 dark:text-slate-400"
            >
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-success-500 mr-2" />
                No credit card required
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-success-500 mr-2" />
                14-day free trial
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-success-500 mr-2" />
                Cancel anytime
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-primary-600" />
                </div>
                <div className="text-3xl font-bold text-secondary-900 dark:text-white mb-2">{stat.value}</div>
                <div className="text-secondary-600 dark:text-slate-300">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-secondary-50 dark:bg-slate-800">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-2 mb-6 text-secondary-900 dark:text-white">Comprehensive Enterprise Solutions</h2>
            <p className="body-lg max-w-3xl mx-auto">
              From strategic planning to technical implementation, we provide end-to-end solutions 
              that address your most complex business challenges.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                {...service}
              />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/services">
              <AnimatedButton variant="outline" size="lg">
                Explore All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </AnimatedButton>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-2 mb-6 text-secondary-900 dark:text-white">Trusted by Industry Leaders</h2>
            <p className="body-lg max-w-3xl mx-auto">
              Discover how we've helped organizations like yours achieve remarkable results 
              through strategic partnership and innovative solutions.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="card p-8"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-warning-400 fill-current" />
                  ))}
                </div>
                <p className="text-secondary-600 dark:text-slate-300 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary-600 font-semibold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-secondary-900 dark:text-white">{testimonial.name}</div>
                    <div className="text-sm text-secondary-600 dark:text-slate-300">{testimonial.role}</div>
                    <div className="text-xs text-secondary-500 dark:text-slate-400">{testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-accent-600 text-white dark:from-primary-700 dark:to-accent-700">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="heading-2 mb-6 text-white">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 text-white/90">
              Join hundreds of enterprises that have already unlocked their potential with our solutions. 
              Let's discuss how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AnimatedButton variant="secondary" size="lg" className="bg-white text-primary-600 hover:bg-secondary-50 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700" onClick={openLeadModal}>
                  Schedule a Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </AnimatedButton>
              <Link to="/pricing">
                <AnimatedButton variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-600">
                  View Pricing Plans
                </AnimatedButton>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home

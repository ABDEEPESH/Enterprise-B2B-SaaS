import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useModal } from '../../context/ModalContext'
import { 
  Cloud as CloudIcon, 
  Server, 
  ArrowRight,
  Shield,
  Zap,
  BarChart3,
  Settings
} from 'lucide-react'
import AnimatedButton from '../../components/AnimatedButton'
import ServiceCard from '../../components/ServiceCard'

const Cloud = () => {
  const { openLeadModal } = useModal()
  const services = [
    {
      title: 'Cloud Migration',
      description: 'Seamless migration of your infrastructure and applications to the cloud with minimal downtime.',
      icon: CloudIcon,
      features: ['Assessment & Planning', 'Data Migration', 'Application Migration', 'Post-Migration Support'],
      color: 'primary' as const
    },
    {
      title: 'Cloud Architecture',
      description: 'Design and implement scalable, secure cloud architectures optimized for your business needs.',
      icon: Server,
      features: ['Microservices', 'Serverless', 'Container Orchestration', 'Hybrid Cloud'],
      color: 'accent' as const
    },
    {
      title: 'Cloud Security',
      description: 'Comprehensive security solutions to protect your cloud infrastructure and data.',
      icon: Shield,
      features: ['Identity Management', 'Data Encryption', 'Network Security', 'Compliance Management'],
      color: 'success' as const
    }
  ]

  const platforms = [
    { name: 'AWS', description: 'Amazon Web Services - Full stack cloud services' },
    { name: 'Azure', description: 'Microsoft Cloud - Enterprise-grade cloud platform' },
    { name: 'Google Cloud', description: 'GCP - AI and data-driven cloud services' },
    { name: 'Multi-Cloud', description: 'Hybrid solutions across multiple providers' }
  ]

  const benefits = [
    {
      icon: Zap,
      title: 'Scalability',
      description: 'Easily scale resources up or down based on demand.'
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Enterprise-grade security with compliance certifications.'
    },
    {
      icon: BarChart3,
      title: 'Cost Optimization',
      description: 'Reduce infrastructure costs by up to 40% with cloud solutions.'
    },
    {
      icon: Settings,
      title: 'Management',
      description: 'Simplified infrastructure management and monitoring.'
    }
  ]

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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container">
          <motion.div
            variants={containerVariants}
            initial="initial"
            animate="animate"
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                <CloudIcon className="w-4 h-4 mr-2" />
                Cloud Solutions
              </span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="heading-1 mb-6"
            >
              Transform Your Business
              <br />
              with Cloud Innovation
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="body-lg mb-8 text-secondary-900 dark:text-slate-300"
            >
              Harness the power of cloud computing to drive agility, scalability, and 
              innovation. Our cloud experts help you migrate, optimize, and secure your 
              infrastructure for maximum business value.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <Link to="/contact">
                <AnimatedButton size="lg">
                  Start Cloud Journey
                  <ArrowRight className="w-5 h-5 ml-2" />
                </AnimatedButton>
              </Link>
              <Link to="/process">
                <AnimatedButton variant="outline" size="lg">
                  Our Process
                </AnimatedButton>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-2 mb-6">Cloud Services</h2>
            <p className="body-lg max-w-3xl mx-auto text-secondary-900 dark:text-slate-300">
              Comprehensive cloud solutions covering migration, architecture, and security.
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
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 bg-secondary-50 dark:bg-slate-800">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-2 mb-6">Cloud Platforms</h2>
            <p className="body-lg max-w-3xl mx-auto text-secondary-900 dark:text-slate-300">
              Expertise across all major cloud platforms to deliver the best solution for your needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CloudIcon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="heading-4 mb-2">{platform.name}</h3>
                <p className="text-sm text-secondary-900 dark:text-slate-300">{platform.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="heading-2 mb-12 text-center">Why Choose Our Cloud Solutions?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="heading-4 mb-2">{benefit.title}</h3>
                    <p className="body text-secondary-900 dark:text-slate-300">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white dark:from-blue-700 dark:to-cyan-700">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="heading-2 mb-6 text-white">Ready to Embrace the Cloud?</h2>
            <p className="text-xl mb-8 text-white/90">
              Let's design a cloud strategy that transforms your business operations 
              and drives innovation. Schedule a cloud consultation today.
            </p>
            <AnimatedButton variant="secondary" size="lg" className="bg-white dark:bg-slate-800 text-blue-600 hover:bg-secondary-50 dark:bg-slate-800" onClick={openLeadModal}>
                Schedule Cloud Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </AnimatedButton>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Cloud

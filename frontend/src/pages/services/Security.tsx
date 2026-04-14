import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useModal } from '../../context/ModalContext'
import { 
  Shield, 
  Lock, 
  Eye, 
  AlertTriangle, 
  ArrowRight
} from 'lucide-react'
import AnimatedButton from '../../components/AnimatedButton'
import ServiceCard from '../../components/ServiceCard'

const Security = () => {
  const { openLeadModal } = useModal()
  const services = [
    {
      title: 'Security Assessment',
      description: 'Comprehensive security audits to identify vulnerabilities and strengthen your defenses.',
      icon: Eye,
      features: ['Penetration Testing', 'Vulnerability Scanning', 'Risk Assessment', 'Compliance Audits'],
      color: 'error' as const
    },
    {
      title: 'Security Architecture',
      description: 'Design and implement robust security frameworks that protect your entire infrastructure.',
      icon: Shield,
      features: ['Zero Trust Architecture', 'Network Security', 'Cloud Security', 'Endpoint Protection'],
      color: 'warning' as const
    },
    {
      title: 'Compliance Management',
      description: 'Ensure your organization meets industry standards and regulatory requirements.',
      icon: Shield,
      features: ['GDPR Compliance', 'SOC 2', 'ISO 27001', 'HIPAA Compliance'],
      color: 'success' as const
    }
  ]

  const securityAreas = [
    { name: 'Application Security', description: 'Secure coding practices and application protection' },
    { name: 'Network Security', description: 'Firewall, IDS/IPS, and network monitoring' },
    { name: 'Data Protection', description: 'Encryption, DLP, and data classification' },
    { name: 'Identity Management', description: 'Access control, MFA, and user authentication' }
  ]

  const benefits = [
    {
      icon: Shield,
      title: 'Proactive Protection',
      description: 'Identify and address threats before they impact your business.'
    },
    {
      icon: Lock,
      title: 'Data Security',
      description: 'Protect sensitive data with enterprise-grade encryption and access controls.'
    },
    {
      icon: Shield,
      title: 'Compliance Assurance',
      description: 'Meet regulatory requirements and industry standards with confidence.'
    },
    {
      icon: AlertTriangle,
      title: 'Threat Intelligence',
      description: 'Stay ahead of emerging threats with continuous monitoring and analysis.'
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
      <section className="py-20 lg:py-32 bg-gradient-to-br from-red-50 to-orange-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container">
          <motion.div
            variants={containerVariants}
            initial="initial"
            animate="animate"
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-medium">
                <Shield className="w-4 h-4 mr-2" />
                Security Services
              </span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="heading-1 mb-6"
            >
              Secure Your Digital
              <br />
              Assets with Confidence
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="body-lg mb-8 text-secondary-900 dark:text-slate-300"
            >
              Protect your business from cyber threats with comprehensive security solutions. 
              Our expert team provides end-to-end security services to safeguard your 
              infrastructure, data, and reputation.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                <AnimatedButton size="lg" onClick={openLeadModal}>
                  Schedule Security Audit
                  <ArrowRight className="w-5 h-5 ml-2" />
                </AnimatedButton>
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
            <h2 className="heading-2 mb-6">Security Services</h2>
            <p className="body-lg max-w-3xl mx-auto text-secondary-900 dark:text-slate-300">
              Comprehensive security solutions to protect your digital assets and ensure compliance.
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

      {/* Security Areas */}
      <section className="py-20 bg-secondary-50 dark:bg-slate-800">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-2 mb-6">Security Domains</h2>
            <p className="body-lg max-w-3xl mx-auto text-secondary-900 dark:text-slate-300">
              Comprehensive security coverage across all critical areas of your infrastructure.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 text-center"
              >
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="heading-4 mb-2">{area.name}</h3>
                <p className="text-sm text-secondary-900 dark:text-slate-300">{area.description}</p>
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
            <h2 className="heading-2 mb-12 text-center">Why Choose Our Security Services?</h2>
            
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
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-red-600" />
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
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600 text-white dark:from-red-700 dark:to-orange-700">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="heading-2 mb-6 text-white">Secure Your Business Today</h2>
            <p className="text-xl mb-8 text-white/90">
              Don't wait for a security breach to protect your assets. Let's conduct a 
              comprehensive security assessment and strengthen your defenses.
            </p>
            <AnimatedButton variant="secondary" size="lg" className="bg-white dark:bg-slate-800 text-red-600 hover:bg-secondary-50 dark:bg-slate-800" onClick={openLeadModal}>
                Schedule Security Assessment
                <ArrowRight className="w-5 h-5 ml-2" />
              </AnimatedButton>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Security

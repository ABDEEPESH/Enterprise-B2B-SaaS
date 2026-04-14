import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useModal } from '../../context/ModalContext'
import { 
  TrendingUp, 
  Shield, 
  CreditCard, 
  ArrowRight, 
  Building,
  BarChart3,
  Globe,
  Lock
} from 'lucide-react'
import AnimatedButton from '../../components/AnimatedButton'
import ServiceCard from '../../components/ServiceCard'

const FinTech = () => {
  const { openLeadModal } = useModal()
  const solutions = [
    {
      title: 'Digital Banking',
      description: 'Next-generation banking platforms with seamless user experiences and robust security.',
      icon: Building,
      features: ['Mobile Banking Apps', 'Online Banking Platforms', 'Digital Wallet Integration', 'Biometric Authentication'],
      color: 'primary' as const
    },
    {
      title: 'Payment Processing',
      description: 'Scalable payment solutions that handle high volumes with maximum security and compliance.',
      icon: CreditCard,
      features: ['Payment Gateways', 'POS Integration', 'Cross-border Payments', 'Fraud Detection'],
      color: 'success' as const
    },
    {
      title: 'Wealth Management',
      description: 'AI-powered wealth management platforms for personalized investment strategies.',
      icon: TrendingUp,
      features: ['Robo-advisory', 'Portfolio Management', 'Risk Assessment', 'Financial Planning Tools'],
      color: 'accent' as const
    }
  ]

  const challenges = [
    {
      title: 'Regulatory Compliance',
      description: 'Navigate complex financial regulations with our compliance-ready solutions.',
      icon: Shield
    },
    {
      title: 'Security & Trust',
      description: 'Build customer trust with enterprise-grade security and fraud prevention.',
      icon: Lock
    },
    {
      title: 'Scalability',
      description: 'Handle millions of transactions with our high-performance infrastructure.',
      icon: BarChart3
    },
    {
      title: 'Customer Experience',
      description: 'Deliver exceptional digital experiences that retain and engage customers.',
      icon: Globe
    }
  ]

  const caseStudies = [
    {
      company: 'Global Bank Corp',
      challenge: 'Legacy systems hindering digital transformation',
      solution: 'Complete digital banking platform overhaul',
      results: '60% increase in digital adoption, 40% reduction in operational costs'
    },
    {
      company: 'PayTech Solutions',
      challenge: 'Scaling payment infrastructure for rapid growth',
      solution: 'Cloud-native payment processing platform',
      results: '10x transaction capacity, 99.99% uptime achieved'
    },
    {
      company: 'InvestPro Wealth',
      challenge: 'Manual portfolio management processes',
      solution: 'AI-powered wealth management platform',
      results: '80% reduction in manual work, 35% improvement in returns'
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
      <section className="py-20 lg:py-32 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container">
          <motion.div
            variants={containerVariants}
            initial="initial"
            animate="animate"
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                <TrendingUp className="w-4 h-4 mr-2" />
                FinTech Solutions
              </span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="heading-1 mb-6"
            >
              Transforming Finance
              <br />
              with Technology Innovation
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="body-lg mb-8 text-secondary-600 dark:text-slate-300"
            >
              Empower financial institutions with cutting-edge technology solutions that 
              drive innovation, ensure compliance, and deliver exceptional customer experiences 
              in the rapidly evolving FinTech landscape.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                <AnimatedButton size="lg" onClick={openLeadModal}>
                  Schedule FinTech Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </AnimatedButton>
              <Link to="/services">
                <AnimatedButton variant="outline" size="lg">
                  Our Services
                </AnimatedButton>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-2 mb-6">FinTech Solutions</h2>
            <p className="body-lg max-w-3xl mx-auto text-secondary-600 dark:text-slate-300">
              Comprehensive technology solutions tailored for the financial services industry.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {solutions.map((solution, index) => (
              <ServiceCard
                key={index}
                {...solution}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-20 bg-secondary-50 dark:bg-slate-800">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-2 mb-6">Industry Challenges We Solve</h2>
            <p className="body-lg max-w-3xl mx-auto text-secondary-600 dark:text-slate-300">
              Addressing the unique challenges faced by financial institutions in the digital age.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {challenges.map((challenge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  {challenge.icon && <challenge.icon className="w-8 h-8 text-green-600" />}
                </div>
                <h3 className="heading-4 mb-4">{challenge.title}</h3>
                <p className="body text-secondary-600 dark:text-slate-300">{challenge.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-2 mb-6">FinTech Success Stories</h2>
            <p className="body-lg max-w-3xl mx-auto text-secondary-600 dark:text-slate-300">
              Real results from financial institutions that have transformed their operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6"
              >
                <h3 className="heading-4 mb-3 text-green-600">{study.company}</h3>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-secondary-900 dark:text-white mb-2">Challenge</h4>
                  <p className="text-sm text-secondary-600 dark:text-slate-300">{study.challenge}</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-secondary-900 dark:text-white mb-2">Solution</h4>
                  <p className="text-sm text-secondary-600 dark:text-slate-300">{study.solution}</p>
                </div>
                
                <div className="pt-4 border-t border-secondary-200 dark:border-slate-700">
                  <h4 className="font-semibold text-success-600 mb-1">Results</h4>
                  <p className="text-sm text-secondary-600 dark:text-slate-300">{study.results}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white dark:from-green-700 dark:to-emerald-700">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="heading-2 mb-6 text-white">Ready to Innovate in FinTech?</h2>
            <p className="text-xl mb-8 text-white/90">
              Let's discuss how our FinTech expertise can help you navigate the digital 
              transformation journey and stay ahead of the competition.
            </p>
            <AnimatedButton variant="secondary" size="lg" className="bg-white dark:bg-slate-800 text-green-600 hover:bg-secondary-50 dark:bg-slate-800" onClick={openLeadModal}>
                Schedule FinTech Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </AnimatedButton>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default FinTech

import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Lightbulb, 
  Target, 
  TrendingUp, 
  Users, 
  ArrowRight, 
  CheckCircle, 
  BarChart3, 
  Globe, 
  Shield,
  Zap,
  Brain,
  Eye,
  Compass
} from 'lucide-react'
import AnimatedButton from '../../components/AnimatedButton'
import ServiceCard from '../../components/ServiceCard'

const Strategy = () => {
  const services = [
    {
      title: 'Digital Transformation',
      description: 'Comprehensive roadmap for modernizing your business processes and technology infrastructure.',
      icon: Zap,
      features: ['Process Automation', 'Cloud Migration', 'API Integration', 'Legacy Modernization'],
      color: 'primary' as const
    },
    {
      title: 'Market Analysis',
      description: 'Deep insights into market trends, competitive landscape, and growth opportunities.',
      icon: Eye,
      features: ['Competitive Intelligence', 'Market Sizing', 'Trend Analysis', 'Opportunity Mapping'],
      color: 'accent' as const
    },
    {
      title: 'Growth Strategy',
      description: 'Data-driven strategies to accelerate business growth and expand into new markets.',
      icon: TrendingUp,
      features: ['Revenue Optimization', 'Market Expansion', 'Customer Acquisition', 'Product Strategy'],
      color: 'success' as const
    }
  ]

  const process = [
    {
      step: 'Discovery',
      title: 'Business Analysis',
      description: 'Deep dive into your current operations, challenges, and opportunities through comprehensive stakeholder interviews and data analysis.'
    },
    {
      step: 'Research',
      title: 'Market Intelligence',
      description: 'Extensive market research, competitive analysis, and trend identification to inform strategic decisions.'
    },
    {
      step: 'Strategy',
      title: 'Strategic Planning',
      description: 'Development of comprehensive strategic roadmap with clear objectives, KPIs, and implementation timeline.'
    },
    {
      step: 'Implementation',
      title: 'Execution Support',
      description: 'Hands-on support during implementation with regular progress reviews and strategy adjustments.'
    }
  ]

  const benefits = [
    {
      icon: Target,
      title: 'Clear Direction',
      description: 'Well-defined strategic objectives and measurable goals that align with your vision.'
    },
    {
      icon: TrendingUp,
      title: 'Competitive Advantage',
      description: 'Unique positioning strategies that differentiate you in the marketplace.'
    },
    {
      icon: Brain,
      title: 'Data-Driven Decisions',
      description: 'Strategies based on comprehensive data analysis and market intelligence.'
    },
    {
      icon: Compass,
      title: 'Adaptive Planning',
      description: 'Flexible strategies that evolve with market changes and business growth.'
    }
  ]

  const caseStudies = [
    {
      company: 'Global FinTech Leader',
      challenge: 'Struggling with market penetration in emerging economies',
      solution: 'Developed market entry strategy with localized product offerings',
      results: '45% increase in market share within 18 months'
    },
    {
      company: 'Enterprise SaaS Provider',
      challenge: 'High customer churn and declining retention rates',
      solution: 'Implemented customer success strategy and product roadmap optimization',
      results: '30% reduction in churn, 25% increase in upsell revenue'
    },
    {
      company: 'Manufacturing Conglomerate',
      challenge: 'Digital transformation lagging behind competitors',
      solution: 'Comprehensive digital transformation strategy with phased implementation',
      results: '40% improvement in operational efficiency, 20% cost reduction'
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
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="container">
          <motion.div
            variants={containerVariants}
            initial="initial"
            animate="animate"
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                <Lightbulb className="w-4 h-4 mr-2" />
                Strategy Consulting
              </span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="heading-1 mb-6"
            >
              Strategic Excellence for
              <br />
              Sustainable Growth
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="body-lg mb-8 text-secondary-600"
            >
              Transform your business vision into reality with data-driven strategies that 
              drive growth, innovation, and competitive advantage. Our expert consultants 
              partner with you to navigate complex challenges and seize opportunities.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <Link to="/contact">
                <AnimatedButton size="lg">
                  Schedule Strategy Session
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
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-2 mb-6">Strategic Services</h2>
            <p className="body-lg max-w-3xl mx-auto text-secondary-600">
              Comprehensive strategic consulting services designed to address your most 
              critical business challenges and opportunities.
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

      {/* Process Section */}
      <section className="py-20 bg-secondary-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-2 mb-6">Our Strategic Approach</h2>
            <p className="body-lg max-w-3xl mx-auto text-secondary-600">
              A systematic methodology that ensures comprehensive analysis, strategic alignment, 
              and successful implementation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary-600">{item.step}</span>
                </div>
                <h3 className="heading-4 mb-4">{item.title}</h3>
                <p className="body text-secondary-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="heading-2 mb-12 text-center">Why Choose Our Strategy Consulting?</h2>
            
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
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="heading-4 mb-2">{benefit.title}</h3>
                    <p className="body text-secondary-600">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-secondary-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-2 mb-6">Success Stories</h2>
            <p className="body-lg max-w-3xl mx-auto text-secondary-600">
              Real results from real businesses that have transformed their operations 
              through strategic partnership.
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
                <h3 className="heading-4 mb-3 text-primary-600">{study.company}</h3>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-secondary-900 mb-2">Challenge</h4>
                  <p className="text-sm text-secondary-600">{study.challenge}</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-secondary-900 mb-2">Solution</h4>
                  <p className="text-sm text-secondary-600">{study.solution}</p>
                </div>
                
                <div className="pt-4 border-t border-secondary-200">
                  <h4 className="font-semibold text-success-600 mb-1">Results</h4>
                  <p className="text-sm text-secondary-600">{study.results}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-accent-600 text-white">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="heading-2 mb-6 text-white">Ready to Transform Your Strategy?</h2>
            <p className="text-xl mb-8 text-white/90">
              Let's discuss how our strategic expertise can help you achieve your business goals. 
              Schedule a complimentary strategy session with our experts.
            </p>
            <Link to="/contact">
              <AnimatedButton variant="secondary" size="lg" className="bg-white text-primary-600 hover:bg-secondary-50">
                Schedule Strategy Session
                <ArrowRight className="w-5 h-5 ml-2" />
              </AnimatedButton>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Strategy

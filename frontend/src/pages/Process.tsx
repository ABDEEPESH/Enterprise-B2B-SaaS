import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Search, 
  Lightbulb, 
  Code, 
  Rocket, 
  CheckCircle, 
  ArrowRight,
  Clock,
  Users,
  Target,
  Zap,
  Shield,
  TrendingUp
} from 'lucide-react'
import AnimatedButton from '../components/AnimatedButton'

const Process = () => {
  const processSteps = [
    {
      number: '01',
      title: 'Discovery & Analysis',
      description: 'We dive deep into your business to understand challenges, opportunities, and objectives through comprehensive research and stakeholder interviews.',
      icon: Search,
      duration: '1-2 weeks',
      deliverables: ['Business Analysis Report', 'Stakeholder Interviews', 'Current State Assessment', 'Opportunity Identification']
    },
    {
      number: '02',
      title: 'Strategy & Planning',
      description: 'Our experts craft a tailored strategic roadmap with clear milestones, KPIs, and success metrics aligned with your business goals.',
      icon: Lightbulb,
      duration: '2-3 weeks',
      deliverables: ['Strategic Roadmap', 'Technical Architecture', 'Resource Planning', 'Risk Assessment']
    },
    {
      number: '03',
      title: 'Design & Prototyping',
      description: 'We create intuitive, user-centric designs and interactive prototypes that bring your vision to life before development begins.',
      icon: Code,
      duration: '3-4 weeks',
      deliverables: ['UI/UX Designs', 'Interactive Prototypes', 'Design System', 'User Testing Results']
    },
    {
      number: '04',
      title: 'Development & Implementation',
      description: 'Our agile development team builds robust, scalable solutions using cutting-edge technologies and best practices.',
      icon: Code,
      duration: '8-16 weeks',
      deliverables: ['MVP Release', 'Feature Development', 'Quality Assurance', 'Performance Optimization']
    },
    {
      number: '05',
      title: 'Testing & Quality Assurance',
      description: 'Rigorous testing ensures your solution meets the highest standards of quality, security, and performance.',
      icon: Shield,
      duration: '2-4 weeks',
      deliverables: ['Test Reports', 'Security Audit', 'Performance Benchmarks', 'User Acceptance Testing']
    },
    {
      number: '06',
      title: 'Launch & Optimization',
      description: 'We manage a seamless deployment and continue optimizing performance based on real-world usage and feedback.',
      icon: Rocket,
      duration: 'Ongoing',
      deliverables: ['Production Deployment', 'Monitoring Setup', 'Performance Analytics', 'Continuous Improvement']
    }
  ]

  const benefits = [
    {
      icon: Clock,
      title: 'Faster Time-to-Market',
      description: 'Our streamlined process reduces development time by 40% while maintaining quality standards.'
    },
    {
      icon: Users,
      title: 'Collaborative Partnership',
      description: 'Work directly with our experts throughout the entire process for complete transparency and alignment.'
    },
    {
      icon: Target,
      title: 'Measurable Results',
      description: 'Every deliverable is tied to specific KPIs and business outcomes for clear ROI tracking.'
    },
    {
      icon: Zap,
      title: 'Agile & Adaptive',
      description: 'Our flexible approach allows us to pivot quickly based on market feedback and changing requirements.'
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
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                <Target className="w-4 h-4 mr-2" />
                Our Process
              </span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="heading-1 mb-6"
            >
              From Vision to Reality
              <br />
              Our Proven Process
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="body-lg mb-8 text-secondary-600"
            >
              We've refined our methodology over hundreds of enterprise projects to deliver 
              exceptional results consistently. Our transparent, collaborative approach ensures 
              you're involved every step of the way.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">6</div>
                <div className="text-secondary-600">Structured Phases</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">12-24</div>
                <div className="text-secondary-600">Weeks Average Timeline</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">95%</div>
                <div className="text-secondary-600">On-Time Delivery</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-2 mb-6">How We Work</h2>
            <p className="body-lg max-w-3xl mx-auto text-secondary-600">
              Our systematic approach ensures nothing is overlooked and every project 
              delivers maximum value to your organization.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary-200 hidden lg:block"></div>

            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className="w-full lg:w-5/12">
                  <div className="card p-8">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                        <step.icon className="w-6 h-6 text-primary-600" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary-600 mb-1">{step.number}</div>
                        <h3 className="heading-4">{step.title}</h3>
                      </div>
                    </div>
                    
                    <p className="body text-secondary-600 mb-4">{step.description}</p>
                    
                    <div className="flex items-center text-sm text-secondary-500 mb-4">
                      <Clock className="w-4 h-4 mr-2" />
                      {step.duration}
                    </div>

                    <div>
                      <h4 className="font-semibold text-secondary-900 mb-2">Key Deliverables:</h4>
                      <ul className="space-y-1">
                        {step.deliverables.map((deliverable, i) => (
                          <li key={i} className="flex items-center text-sm text-secondary-600">
                            <CheckCircle className="w-3 h-3 text-success-500 mr-2 flex-shrink-0" />
                            {deliverable}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="w-full lg:w-2/12 flex justify-center">
                  <div className="w-4 h-4 bg-primary-600 rounded-full"></div>
                </div>

                <div className="w-full lg:w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-secondary-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-2 mb-6">Why Choose Our Process?</h2>
            <p className="body-lg max-w-3xl mx-auto text-secondary-600">
              Our methodology is designed to minimize risk, maximize value, and ensure 
              successful outcomes for every project.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="heading-4 mb-4">{benefit.title}</h3>
                <p className="body text-secondary-600">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
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
            <h2 className="heading-2 mb-6 text-white">Ready to Get Started?</h2>
            <p className="text-xl mb-8 text-white/90">
              Let's discuss how our proven process can help you achieve your business goals. 
              Schedule a free consultation with our experts today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <AnimatedButton variant="secondary" size="lg" className="bg-white text-primary-600 hover:bg-secondary-50">
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </AnimatedButton>
              </Link>
              <Link to="/pricing">
                <AnimatedButton variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-600">
                  View Pricing
                </AnimatedButton>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Process

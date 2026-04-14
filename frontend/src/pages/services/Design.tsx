import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Palette, 
  Eye, 
  Zap, 
  Users, 
  ArrowRight, 
  CheckCircle, 
  Smartphone, 
  Monitor, 
  Tablet,
  Lightbulb,
  Target,
  Sparkles
} from 'lucide-react'
import AnimatedButton from '../../components/AnimatedButton'
import ServiceCard from '../../components/ServiceCard'

const Design = () => {
  const services = [
    {
      title: 'UI/UX Design',
      description: 'Create intuitive, beautiful interfaces that delight users and drive engagement.',
      icon: Eye,
      features: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing'],
      color: 'accent' as const
    },
    {
      title: 'Design Systems',
      description: 'Scalable design systems that ensure consistency across all your products.',
      icon: Sparkles,
      features: ['Component Libraries', 'Style Guides', 'Pattern Libraries', 'Design Tokens'],
      color: 'primary' as const
    },
    {
      title: 'Brand Identity',
      description: 'Comprehensive brand design that communicates your unique value proposition.',
      icon: Palette,
      features: ['Logo Design', 'Brand Guidelines', 'Visual Identity', 'Brand Strategy'],
      color: 'success' as const
    }
  ]

  const process = [
    {
      step: 'Research',
      title: 'User Discovery',
      description: 'Deep understanding of your users through interviews, surveys, and behavioral analysis.'
    },
    {
      step: 'Ideation',
      title: 'Creative Exploration',
      description: 'Brainstorming and conceptualization to explore innovative design solutions.'
    },
    {
      step: 'Design',
      title: 'Creation & Refinement',
      description: 'Development of wireframes, mockups, and interactive prototypes.'
    },
    {
      step: 'Testing',
      title: 'Validation & Iteration',
      description: 'User testing and feedback integration to perfect the design.'
    }
  ]

  const benefits = [
    {
      icon: Users,
      title: 'User-Centered',
      description: 'Designs that prioritize user needs and deliver exceptional experiences.'
    },
    {
      icon: Target,
      title: 'Goal-Oriented',
      description: 'Every design decision tied to specific business objectives and user goals.'
    },
    {
      icon: Zap,
      title: 'Innovative',
      description: 'Creative solutions that stand out in competitive markets.'
    },
    {
      icon: Smartphone,
      title: 'Responsive',
      description: 'Seamless experiences across all devices and platforms.'
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
      <section className="py-20 lg:py-32 bg-gradient-to-br from-accent-50 to-primary-50">
        <div className="container">
          <motion.div
            variants={containerVariants}
            initial="initial"
            animate="animate"
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center px-4 py-2 bg-accent-100 text-accent-700 rounded-full text-sm font-medium">
                <Palette className="w-4 h-4 mr-2" />
                UI/UX Design
              </span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="heading-1 mb-6"
            >
              Design Experiences That
              <br />
              Drive Results
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="body-lg mb-8 text-secondary-600"
            >
              Transform your digital presence with human-centered design that combines 
              aesthetics with functionality. Our expert designers create experiences 
              that users love and businesses value.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <Link to="/contact">
                <AnimatedButton size="lg">
                  Start Design Project
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
            <h2 className="heading-2 mb-6">Design Services</h2>
            <p className="body-lg max-w-3xl mx-auto text-secondary-600">
              Comprehensive design services that cover every aspect of your digital presence.
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
            <h2 className="heading-2 mb-6">Our Design Process</h2>
            <p className="body-lg max-w-3xl mx-auto text-secondary-600">
              A proven methodology that ensures exceptional design outcomes through research, 
              creativity, and iterative refinement.
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
                <div className="w-16 h-16 bg-accent-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-accent-600">{item.step}</span>
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
            <h2 className="heading-2 mb-12 text-center">Why Choose Our Design Services?</h2>
            
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
                  <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-accent-600" />
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent-600 to-primary-600 text-white">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="heading-2 mb-6 text-white">Ready to Transform Your Design?</h2>
            <p className="text-xl mb-8 text-white/90">
              Let's create exceptional experiences that your users will love and your 
              business will benefit from. Schedule a design consultation today.
            </p>
            <Link to="/contact">
              <AnimatedButton variant="secondary" size="lg" className="bg-white text-accent-600 hover:bg-secondary-50">
                Schedule Design Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </AnimatedButton>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Design

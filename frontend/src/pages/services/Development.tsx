import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useModal } from '../../context/ModalContext'
import { 
  Code, 
  Cloud, 
  ArrowRight, 
  Globe, 
  Smartphone
} from 'lucide-react'
import AnimatedButton from '../../components/AnimatedButton'
import ServiceCard from '../../components/ServiceCard'

const Development = () => {
  const { openLeadModal } = useModal()
  const services = [
    {
      title: 'Web Applications',
      description: 'Scalable, high-performance web applications built with modern frameworks and best practices.',
      icon: Globe,
      features: ['React/Vue/Angular', 'Node.js/Python/Java', 'Progressive Web Apps', 'Real-time Applications'],
      color: 'primary' as const
    },
    {
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile apps that deliver exceptional user experiences.',
      icon: Smartphone,
      features: ['iOS & Android Native', 'React Native', 'Flutter', 'App Store Optimization'],
      color: 'accent' as const
    },
    {
      title: 'Cloud Architecture',
      description: 'Enterprise-grade cloud solutions that scale with your business needs.',
      icon: Cloud,
      features: ['AWS/Azure/GCP', 'Microservices', 'Serverless', 'DevOps & CI/CD'],
      color: 'success' as const
    }
  ]

  const technologies = [
    { name: 'Frontend', items: ['React', 'Vue.js', 'Angular', 'TypeScript', 'Next.js'] },
    { name: 'Backend', items: ['Node.js', 'Python', 'Java', 'Go', 'Ruby on Rails'] },
    { name: 'Mobile', items: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Ionic'] },
    { name: 'Cloud', items: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes'] }
  ]

  const process = [
    {
      step: 'Plan',
      title: 'Architecture Design',
      description: 'Comprehensive planning and architecture design to ensure scalable, maintainable solutions.'
    },
    {
      step: 'Build',
      title: 'Agile Development',
      description: 'Iterative development with regular sprints and continuous integration.'
    },
    {
      step: 'Test',
      title: 'Quality Assurance',
      description: 'Rigorous testing including unit tests, integration tests, and user acceptance testing.'
    },
    {
      step: 'Deploy',
      title: 'Production Deployment',
      description: 'Seamless deployment with monitoring, logging, and performance optimization.'
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
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container">
          <motion.div
            variants={containerVariants}
            initial="initial"
            animate="animate"
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                <Code className="w-4 h-4 mr-2" />
                Development Services
              </span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="heading-1 mb-6"
            >
              Build Powerful Solutions
              <br />
              with Cutting-Edge Technology
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="body-lg mb-8 text-secondary-900 dark:text-slate-300"
            >
              Transform your ideas into robust, scalable applications with our expert 
              development team. We leverage modern technologies and agile methodologies 
              to deliver solutions that drive business growth.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <Link to="/contact">
                <AnimatedButton size="lg">
                  Start Development Project
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
            <h2 className="heading-2 mb-6">Development Services</h2>
            <p className="body-lg max-w-3xl mx-auto text-secondary-900 dark:text-slate-300">
              Full-stack development services covering web, mobile, and cloud platforms.
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

      {/* Technologies Section */}
      <section className="py-20 bg-secondary-50 dark:bg-slate-800">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-2 mb-6">Technology Stack</h2>
            <p className="body-lg max-w-3xl mx-auto text-secondary-900 dark:text-slate-300">
              We work with the latest technologies and frameworks to build modern, 
              scalable solutions that meet your business needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6"
              >
                <h3 className="heading-4 mb-4 text-primary-600">{tech.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {tech.items.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-2 mb-6">Development Process</h2>
            <p className="body-lg max-w-3xl mx-auto text-secondary-900 dark:text-slate-300">
              Our agile development process ensures rapid delivery without compromising quality.
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
                <p className="body text-secondary-900 dark:text-slate-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white dark:from-primary-700 dark:to-secondary-700">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="heading-2 mb-6 text-white">Ready to Build Your Solution?</h2>
            <p className="text-xl mb-8 text-white/90">
              Let's discuss how our development expertise can bring your vision to life. 
              Schedule a technical consultation with our development team.
            </p>
            <AnimatedButton variant="secondary" size="lg" className="bg-white dark:bg-slate-800 text-primary-600 hover:bg-secondary-50 dark:bg-slate-800" onClick={openLeadModal}>
                Schedule Technical Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </AnimatedButton>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Development

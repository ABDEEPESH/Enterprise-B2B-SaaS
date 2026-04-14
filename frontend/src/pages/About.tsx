import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useModal } from '../context/ModalContext'
import { 
  Target, 
  Lightbulb, 
  Shield, 
  Globe, 
  ArrowRight,
  Heart
} from 'lucide-react'
import AnimatedButton from '../components/AnimatedButton'

const About = () => {
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

  const values = [
    {
      icon: Target,
      title: 'Client-Centric Approach',
      description: 'We put your success at the center of everything we do, ensuring solutions that drive real business value.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'We embrace cutting-edge technologies and creative thinking to solve complex business challenges.'
    },
    {
      icon: Shield,
      title: 'Integrity & Trust',
      description: 'We build lasting partnerships through transparency, honesty, and unwavering commitment to excellence.'
    },
    {
      icon: Globe,
      title: 'Global Perspective',
      description: 'Our diverse team brings worldwide experience and insights to help you compete on a global scale.'
    }
  ]

  const milestones = [
    { year: '2018', title: 'Founded', description: 'Started with a vision to transform enterprise digital experiences' },
    { year: '2019', title: 'First 100 Clients', description: 'Rapid growth through exceptional service and results' },
    { year: '2020', title: 'Global Expansion', description: 'Opened offices in Europe and Asia-Pacific regions' },
    { year: '2021', title: 'Product Launch', description: 'Released our flagship enterprise platform suite' },
    { year: '2022', title: 'Series A Funding', description: 'Raised $50M to accelerate innovation and growth' },
    { year: '2023', title: '500+ Clients', description: 'Reached major milestone with Fortune 500 companies' },
    { year: '2024', title: 'AI Integration', description: 'Launched AI-powered solutions for enterprise automation' }
  ]

  const team = [
    {
      name: 'Alexandra Chen',
      role: 'CEO & Founder',
      bio: 'Former VP of Engineering at Google Tech with 15+ years in enterprise software.',
      image: '/team/alexandra.jpg'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'CTO',
      bio: 'Ex-Microsoft architect specializing in scalable cloud solutions and AI integration.',
      image: '/team/marcus.jpg'
    },
    {
      name: 'Sarah Williams',
      role: 'CPO',
      bio: 'Design leader from Apple, focused on creating exceptional user experiences.',
      image: '/team/sarah.jpg'
    },
    {
      name: 'David Kim',
      role: 'CFO',
      bio: 'Financial strategist with experience scaling multiple startups to IPO.',
      image: '/team/david.jpg'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container">
          <motion.div
            variants={containerVariants}
            initial="initial"
            animate="animate"
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                <Heart className="w-4 h-4 mr-2" />
                Our Story
              </span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="heading-1 mb-6"
            >
              Pioneering Enterprise
              <br />
              Digital Transformation
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="body-lg mb-8 text-secondary-600 dark:text-slate-300"
            >
              Since 2018, we've been on a mission to empower enterprises with cutting-edge technology 
              solutions that drive growth, efficiency, and innovation. Our journey is built on a foundation 
              of expertise, passion, and an unwavering commitment to client success.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">500+</div>
                <div className="text-secondary-600 dark:text-slate-300">Enterprise Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">50+</div>
                <div className="text-secondary-600 dark:text-slate-300">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">99.9%</div>
                <div className="text-secondary-600 dark:text-slate-300">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">24/7</div>
                <div className="text-secondary-600 dark:text-slate-300">Global Support</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="heading-2 mb-8">Our Mission & Vision</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="heading-4 mb-4 text-primary-600">Mission</h3>
                <p className="body text-secondary-600 dark:text-slate-300 leading-relaxed">
                  To empower enterprises worldwide with innovative technology solutions that 
                  transform challenges into opportunities, enabling sustainable growth and 
                  competitive advantage in the digital age.
                </p>
              </div>
              <div>
                <h3 className="heading-4 mb-4 text-primary-600">Vision</h3>
                <p className="body text-secondary-600 dark:text-slate-300 leading-relaxed">
                  To be the global leader in enterprise digital transformation, recognized 
                  for our unwavering commitment to innovation, excellence, and creating 
                  lasting value for our clients and partners.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary-50 dark:bg-slate-800">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-2 mb-6">Our Core Values</h2>
            <p className="body-lg max-w-3xl mx-auto text-secondary-600 dark:text-slate-300">
              These principles guide every decision we make and every solution we deliver.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="heading-4 mb-4">{value.title}</h3>
                <p className="body text-secondary-600 dark:text-slate-300">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-2 mb-6">Our Journey</h2>
            <p className="body-lg max-w-3xl mx-auto text-secondary-600 dark:text-slate-300">
              From a startup dream to an enterprise powerhouse, here's how we've grown.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className="w-full lg:w-5/12">
                  <div className="card p-6">
                    <div className="text-2xl font-bold text-primary-600 mb-2">{milestone.year}</div>
                    <h3 className="heading-4 mb-2">{milestone.title}</h3>
                    <p className="body text-secondary-600 dark:text-slate-300">{milestone.description}</p>
                  </div>
                </div>
                <div className="w-full lg:w-2/12 flex justify-center">
                  <div className="w-4 h-4 bg-primary-600 rounded-full"></div>
                  {index < milestones.length - 1 && (
                    <div className="absolute w-0.5 h-24 bg-primary-200"></div>
                  )}
                </div>
                <div className="w-full lg:w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-secondary-50 dark:bg-slate-800">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-2 mb-6">Leadership Team</h2>
            <p className="body-lg max-w-3xl mx-auto text-secondary-600 dark:text-slate-300">
              Meet the visionaries driving our mission to transform enterprise technology.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {team.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-32 h-32 bg-gradient-to-br from-primary-400 to-accent-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="heading-4 mb-2">{member.name}</h3>
                <div className="text-primary-600 font-medium mb-3">{member.role}</div>
                <p className="body-sm text-secondary-600 dark:text-slate-300">{member.bio}</p>
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
            <h2 className="heading-2 mb-6 text-white">Join Our Mission</h2>
            <p className="text-xl mb-8 text-white/90">
              We're always looking for talented individuals who share our passion for 
              innovation and excellence. Explore career opportunities and become part of our journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/careers">
                <AnimatedButton variant="secondary" size="lg" className="bg-white dark:bg-slate-800 text-primary-600 hover:bg-secondary-50 dark:bg-slate-800">
                  View Open Positions
                  <ArrowRight className="w-5 h-5 ml-2" />
                </AnimatedButton>
              </Link>
              <AnimatedButton variant="outline" size="lg" className="border-white text-white hover:bg-white dark:bg-slate-800 hover:text-primary-600" onClick={openLeadModal}>
                  Partner With Us
                </AnimatedButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About

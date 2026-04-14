import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useModal } from '../context/ModalContext'
import { CheckCircle, ArrowRight, Mail, Phone, MessageSquare } from 'lucide-react'
import AnimatedButton from '../components/AnimatedButton'

const ThankYou = () => {
  const { openLeadModal } = useModal()
  return (
    <div className="min-h-screen bg-white dark:bg-slate-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Success Icon with Animation */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
              className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8"
            >
              <CheckCircle className="w-12 h-12 text-green-600" />
            </motion.div>

            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white mb-6">
              Thank You!
            </h1>
            
            <p className="text-xl text-secondary-600 dark:text-slate-300 leading-relaxed mb-8">
              Your information has been successfully submitted. Our team is reviewing your request 
              and will get back to you within 24 hours.
            </p>

            {/* Confirmation Details */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm p-6 max-w-2xl mx-auto">
              <h2 className="font-semibold text-secondary-900 dark:text-white mb-4">What Happens Next?</h2>
              <div className="space-y-3 text-left">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-primary-600 rounded-full" />
                  </div>
                  <div>
                    <div className="font-medium text-secondary-900 dark:text-white">Immediate Confirmation</div>
                    <div className="text-secondary-600 dark:text-slate-300 text-sm">You'll receive an email confirmation shortly</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-primary-600 rounded-full" />
                  </div>
                  <div>
                    <div className="font-medium text-secondary-900 dark:text-white">Expert Review</div>
                    <div className="text-secondary-600 dark:text-slate-300 text-sm">Our team will analyze your requirements</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-primary-600 rounded-full" />
                  </div>
                  <div>
                    <div className="font-medium text-secondary-900 dark:text-white">Personalized Response</div>
                    <div className="text-secondary-600 dark:text-slate-300 text-sm">We'll contact you with tailored solutions</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-secondary-900 dark:text-white mb-4">While You Wait</h2>
            <p className="text-secondary-600 dark:text-slate-300 max-w-2xl mx-auto">
              Explore our resources to learn more about how we help enterprises transform their operations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Case Studies",
                description: "Read how we've helped companies like yours achieve remarkable results.",
                link: "/blog",
                icon: "case studies"
              },
              {
                title: "Service Overview",
                description: "Discover our comprehensive suite of enterprise solutions.",
                link: "/services/strategy",
                icon: "services"
              },
              {
                title: "Industry Insights",
                description: "Stay updated with the latest trends in enterprise technology.",
                link: "/industries/fintech",
                icon: "insights"
              }
            ].map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-slate-700 dark:to-slate-800 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="font-semibold text-secondary-900 dark:text-white mb-3">{resource.title}</h3>
                <p className="text-secondary-600 dark:text-slate-300 mb-4 text-sm">{resource.description}</p>
                <Link to={resource.link}>
                  <AnimatedButton variant="outline" size="sm">
                    Explore
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </AnimatedButton>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-secondary-50 dark:bg-slate-800">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-secondary-900 dark:text-white mb-8 text-center">Need Immediate Assistance?</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="font-semibold text-secondary-900 dark:text-white mb-2">Call Us</h3>
                <p className="text-secondary-600 dark:text-slate-300 text-sm mb-4">Speak directly with our team</p>
                <a href="tel:+15551234567" className="text-primary-600 font-medium hover:text-primary-700 transition-colors duration-200">
                  +1 (555) 123-4567
                </a>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="font-semibold text-secondary-900 dark:text-white mb-2">Email Us</h3>
                <p className="text-secondary-600 dark:text-slate-300 text-sm mb-4">Get in touch via email</p>
                <a href="mailto:contact@enterprise-platform.com" className="text-primary-600 font-medium hover:text-primary-700 transition-colors duration-200">
                  contact@enterprise-platform.com
                </a>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="font-semibold text-secondary-900 dark:text-white mb-2">Live Chat</h3>
                <p className="text-secondary-600 dark:text-slate-300 text-sm mb-4">Chat with our support team</p>
                <button className="text-primary-600 font-medium hover:text-primary-700 transition-colors duration-200">
                  Start Chat
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-accent-600 text-white dark:from-primary-700 dark:to-accent-700">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="text-center max-w-3xl mx-auto text-white"
          >
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Enterprise?
            </h2>
            <p className="text-white/90 mb-8">
              Schedule a personalized consultation with our experts to explore how our solutions 
              can drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AnimatedButton variant="secondary" className="bg-white dark:bg-slate-800 text-primary-600 hover:bg-white dark:bg-slate-800/90" onClick={openLeadModal}>
                  Schedule Consultation
                </AnimatedButton>
              <Link to="/">
                <AnimatedButton variant="outline" className="border-white text-white hover:bg-white dark:bg-slate-800/10">
                  Return Home
                </AnimatedButton>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ThankYou

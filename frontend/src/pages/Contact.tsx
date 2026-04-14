import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send,
  CheckCircle,
  Clock,
  Users,
  MessageSquare
} from 'lucide-react'
import AnimatedButton from '../components/AnimatedButton'
import leadService, { LeadCreateRequest } from '../services/LeadService'
import toast from 'react-hot-toast'

const Contact = () => {
  const [formData, setFormData] = useState<LeadCreateRequest>({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    company_name: '',
    job_title: '',
    company_size: '',
    industry: '',
    service_interest: '',
    budget_range: '',
    timeline: '',
    message: '',
    source: 'website'
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await leadService.createLead(formData)
      toast.success('Thank you for your inquiry! We\'ll be in touch within 24 hours.')
      // Reset form
      setFormData({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        company_name: '',
        job_title: '',
        company_size: '',
        industry: '',
        service_interest: '',
        budget_range: '',
        timeline: '',
        message: '',
        source: 'website'
      })
    } catch (error) {
      // Error is handled by the LeadService interceptors
    } finally {
      setIsSubmitting(false)
    }
  }

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
                <MessageSquare className="w-4 h-4 mr-2" />
                Get in Touch
              </span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="heading-1 mb-6"
            >
              Let's Transform Your
              <br />
              Business Together
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="body-lg mb-8 text-secondary-600 dark:text-slate-300"
            >
              Ready to take your enterprise to the next level? Our team of experts is here to 
              understand your challenges and craft solutions that drive real results. 
              Reach out today and let's start the conversation.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-8">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-success-500 mr-2" />
                <span className="text-secondary-600 dark:text-slate-300">Response within 24 hours</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-success-500 mr-2" />
                <span className="text-secondary-600 dark:text-slate-300">Free initial consultation</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-success-500 mr-2" />
                <span className="text-secondary-600 dark:text-slate-300">No obligation</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <h2 className="heading-3 mb-8">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-900 dark:text-white mb-1">Phone</h3>
                    <p className="text-secondary-600 dark:text-slate-300">+1 (555) 123-4567</p>
                    <p className="text-sm text-secondary-500">Mon-Fri 9AM-6PM EST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-900 dark:text-white mb-1">Email</h3>
                    <p className="text-secondary-600 dark:text-slate-300">contact@enterprise.com</p>
                    <p className="text-sm text-secondary-500">24/7 support available</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-900 dark:text-white mb-1">Office</h3>
                    <p className="text-secondary-600 dark:text-slate-300">123 Enterprise Ave</p>
                    <p className="text-secondary-600 dark:text-slate-300">San Francisco, CA 94105</p>
                  </div>
                </div>
              </div>

              {/* Support Info */}
              <div className="mt-12 p-6 bg-secondary-50 dark:bg-slate-800 rounded-lg">
                <h3 className="font-semibold text-secondary-900 dark:text-white mb-4 flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-primary-600" />
                  Support Hours
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-secondary-600 dark:text-slate-300">Monday - Friday</span>
                    <span className="font-medium text-secondary-900 dark:text-white">9:00 AM - 6:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-secondary-600 dark:text-slate-300">Saturday</span>
                    <span className="font-medium text-secondary-900 dark:text-white">10:00 AM - 4:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-secondary-600 dark:text-slate-300">Sunday</span>
                    <span className="font-medium text-secondary-900 dark:text-white">Emergency Support Only</span>
                  </div>
                </div>
              </div>

              {/* Team Info */}
              <div className="mt-8 p-6 bg-primary-50 rounded-lg">
                <h3 className="font-semibold text-secondary-900 dark:text-white mb-4 flex items-center">
                  <Users className="w-5 h-5 mr-2 text-primary-600" />
                  Our Team
                </h3>
                <p className="text-sm text-secondary-600 dark:text-slate-300 mb-4">
                  Our dedicated team of enterprise solutions experts is ready to help you 
                  tackle your biggest challenges and achieve your business goals.
                </p>
                <div className="flex items-center text-sm">
                  <CheckCircle className="w-4 h-4 text-success-500 mr-2" />
                  <span className="text-secondary-600 dark:text-slate-300">500+ years combined experience</span>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="card p-8">
                <h2 className="heading-3 mb-8">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="first_name" className="block text-sm font-medium text-secondary-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="first_name"
                        name="first_name"
                        required
                        value={formData.first_name}
                        onChange={handleInputChange}
                        className="input"
                        placeholder="John"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="last_name" className="block text-sm font-medium text-secondary-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="last_name"
                        name="last_name"
                        required
                        value={formData.last_name}
                        onChange={handleInputChange}
                        className="input"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="input"
                        placeholder="john.doe@company.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="input"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company_name" className="block text-sm font-medium text-secondary-700 mb-2">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        id="company_name"
                        name="company_name"
                        required
                        value={formData.company_name}
                        onChange={handleInputChange}
                        className="input"
                        placeholder="Acme Corporation"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="job_title" className="block text-sm font-medium text-secondary-700 mb-2">
                        Job Title
                      </label>
                      <input
                        type="text"
                        id="job_title"
                        name="job_title"
                        value={formData.job_title}
                        onChange={handleInputChange}
                        className="input"
                        placeholder="Chief Technology Officer"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company_size" className="block text-sm font-medium text-secondary-700 mb-2">
                        Company Size
                      </label>
                      <select
                        id="company_size"
                        name="company_size"
                        value={formData.company_size}
                        onChange={handleInputChange}
                        className="input"
                      >
                        <option value="">Select company size</option>
                        <option value="1-10">1-10 employees</option>
                        <option value="11-50">11-50 employees</option>
                        <option value="51-200">51-200 employees</option>
                        <option value="201-500">201-500 employees</option>
                        <option value="501-1000">501-1000 employees</option>
                        <option value="1001-5000">1001-5000 employees</option>
                        <option value="5000+">5000+ employees</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="industry" className="block text-sm font-medium text-secondary-700 mb-2">
                        Industry
                      </label>
                      <select
                        id="industry"
                        name="industry"
                        value={formData.industry}
                        onChange={handleInputChange}
                        className="input"
                      >
                        <option value="">Select industry</option>
                        <option value="fintech">FinTech</option>
                        <option value="healthtech">HealthTech</option>
                        <option value="ecommerce">E-commerce</option>
                        <option value="logistics">Logistics</option>
                        <option value="ai">AI & Machine Learning</option>
                        <option value="manufacturing">Manufacturing</option>
                        <option value="retail">Retail</option>
                        <option value="education">Education</option>
                        <option value="government">Government</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="service_interest" className="block text-sm font-medium text-secondary-700 mb-2">
                        Service Interest
                      </label>
                      <select
                        id="service_interest"
                        name="service_interest"
                        value={formData.service_interest}
                        onChange={handleInputChange}
                        className="input"
                      >
                        <option value="">Select service</option>
                        <option value="strategy">Strategy Consulting</option>
                        <option value="design">UI/UX Design</option>
                        <option value="development">Development</option>
                        <option value="cloud">Cloud Solutions</option>
                        <option value="security">Security</option>
                        <option value="consulting">General Consulting</option>
                        <option value="all">All Services</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="budget_range" className="block text-sm font-medium text-secondary-700 mb-2">
                        Budget Range
                      </label>
                      <select
                        id="budget_range"
                        name="budget_range"
                        value={formData.budget_range}
                        onChange={handleInputChange}
                        className="input"
                      >
                        <option value="">Select budget range</option>
                        <option value="10k-25k">$10,000 - $25,000</option>
                        <option value="25k-50k">$25,000 - $50,000</option>
                        <option value="50k-100k">$50,000 - $100,000</option>
                        <option value="100k-250k">$100,000 - $250,000</option>
                        <option value="250k-500k">$250,000 - $500,000</option>
                        <option value="500k+">$500,000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-secondary-700 mb-2">
                      Project Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="input"
                    >
                      <option value="">Select timeline</option>
                      <option value="immediate">Immediate (within 1 month)</option>
                      <option value="1-3-months">1-3 months</option>
                      <option value="3-6-months">3-6 months</option>
                      <option value="6-12-months">6-12 months</option>
                      <option value="12-months+">12+ months</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="input"
                      placeholder="Tell us about your project, challenges, and goals..."
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <p className="text-sm text-secondary-500">
                      * Required fields
                    </p>
                    
                    <AnimatedButton
                      type="submit"
                      size="lg"
                      loading={isSubmitting}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                      <Send className="w-5 h-5 ml-2" />
                    </AnimatedButton>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact

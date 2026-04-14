import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Mail, User, Building, MessageSquare, CheckCircle } from 'lucide-react'
import { useModal } from '../context/ModalContext'
import leadService from '../services/LeadService'
import AnimatedButton from './AnimatedButton'

interface FormData {
  firstName: string
  lastName: string
  email: string
  companyName: string
  message: string
}

interface FormErrors {
  firstName?: string
  lastName?: string
  email?: string
  companyName?: string
  message?: string
}

const LeadCaptureModal: React.FC = () => {
  const { isLeadModalOpen, closeLeadModal } = useModal()
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    companyName: '',
    message: ''
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required'
    } else if (formData.firstName.trim().length < 2) {
      newErrors.firstName = 'First name must be at least 2 characters'
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required'
    } else if (formData.lastName.trim().length < 2) {
      newErrors.lastName = 'Last name must be at least 2 characters'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Work email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company name is required'
    } else if (formData.companyName.trim().length < 2) {
      newErrors.companyName = 'Company name must be at least 2 characters'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsLoading(true)
    
    try {
      await leadService.createLead({
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        company_name: formData.companyName,
        message: formData.message,
        source: 'Website Modal'
      })
      
      setIsSubmitted(true)
      
      // Reset form after 3 seconds and close modal
      setTimeout(() => {
        setFormData({ firstName: '', lastName: '', email: '', companyName: '', message: '' })
        setIsSubmitted(false)
        closeLeadModal()
      }, 3000)
      
    } catch (error) {
      console.error('Failed to submit lead:', error)
      setErrors({ message: 'Failed to submit. Please try again.' })
    } finally {
      setIsLoading(false)
    }
  }

  const handleClose = () => {
    if (!isLoading) {
      setFormData({ firstName: '', lastName: '', email: '', companyName: '', message: '' })
      setErrors({})
      setIsSubmitted(false)
      closeLeadModal()
    }
  }

  return (
    <AnimatePresence>
      {isLeadModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-sm"
            onClick={handleClose}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ 
              duration: 0.4,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="relative w-full max-w-lg"
          >
            {/* Glassmorphism Modal */}
            <div className="relative bg-white/10 dark:bg-slate-900/10 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-accent-500/20 to-secondary-500/20 dark:from-primary-500/30 dark:via-accent-500/30 dark:to-secondary-500/30" />
              
              {/* Content */}
              <div className="relative z-10 p-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">
                      Get Started Today
                    </h2>
                    <p className="text-white/80">
                      Transform your enterprise with our solutions
                    </p>
                  </div>
                  <button
                    onClick={handleClose}
                    disabled={isLoading}
                    className="p-2 rounded-lg bg-white/10 dark:bg-white/5 hover:bg-white/20 dark:hover:bg-white/10 text-white transition-colors disabled:opacity-50"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* First Name */}
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-white/90 mb-2">
                        First Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60" />
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 bg-white/10 dark:bg-slate-800/50 border border-white/20 dark:border-white/10 rounded-lg text-white placeholder-white/50 dark:placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent backdrop-blur-sm"
                          placeholder="John"
                          disabled={isLoading}
                        />
                      </div>
                      {errors.firstName && (
                        <p className="mt-1 text-sm text-red-300">{errors.firstName}</p>
                      )}
                    </div>

                    {/* Last Name */}
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-white/90 mb-2">
                        Last Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60" />
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 bg-white/10 dark:bg-slate-800/50 border border-white/20 dark:border-white/10 rounded-lg text-white placeholder-white/50 dark:placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent backdrop-blur-sm"
                          placeholder="Doe"
                          disabled={isLoading}
                        />
                      </div>
                      {errors.lastName && (
                        <p className="mt-1 text-sm text-red-300">{errors.lastName}</p>
                      )}
                    </div>

                    {/* Work Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-2">
                        Work Email *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 bg-white/10 dark:bg-slate-800/50 border border-white/20 dark:border-white/10 rounded-lg text-white placeholder-white/50 dark:placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent backdrop-blur-sm"
                          placeholder="john@company.com"
                          disabled={isLoading}
                        />
                      </div>
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-300">{errors.email}</p>
                      )}
                    </div>

                    {/* Company Name */}
                    <div>
                      <label htmlFor="companyName" className="block text-sm font-medium text-white/90 mb-2">
                        Company Name *
                      </label>
                      <div className="relative">
                        <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60" />
                        <input
                          type="text"
                          id="companyName"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 bg-white/10 dark:bg-slate-800/50 border border-white/20 dark:border-white/10 rounded-lg text-white placeholder-white/50 dark:placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent backdrop-blur-sm"
                          placeholder="Acme Corporation"
                          disabled={isLoading}
                        />
                      </div>
                      {errors.companyName && (
                        <p className="mt-1 text-sm text-red-300">{errors.companyName}</p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-white/90 mb-2">
                        How can we help? *
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-white/60" />
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={4}
                          className="w-full pl-10 pr-4 py-3 bg-white/10 dark:bg-slate-800/50 border border-white/20 dark:border-white/10 rounded-lg text-white placeholder-white/50 dark:placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent backdrop-blur-sm resize-none"
                          placeholder="Tell us about your challenges and goals..."
                          disabled={isLoading}
                        />
                      </div>
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-300">{errors.message}</p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <AnimatedButton
                      type="submit"
                      variant="gradient"
                      size="lg"
                      loading={isLoading}
                      disabled={isLoading}
                      className="w-full"
                    >
                      {isLoading ? 'Submitting...' : 'Request Consultation'}
                    </AnimatedButton>

                    {/* Privacy Note */}
                    <p className="text-xs text-white/60 dark:text-white/50 text-center">
                      By submitting, you agree to our privacy policy. We'll never spam you.
                    </p>
                  </form>
                ) : (
                  /* Success State */
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-8 h-8 text-green-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Thank You!
                    </h3>
                    <p className="text-white/80 dark:text-white/70 mb-6">
                      Your consultation request has been received. Our team will contact you within 24 hours.
                    </p>
                    <div className="w-12 h-1 bg-gradient-to-r from-primary-400 to-accent-400 mx-auto rounded-full" />
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default LeadCaptureModal

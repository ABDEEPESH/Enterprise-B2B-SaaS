import { useState } from 'react'
import { motion } from 'framer-motion'
import { useModal } from '../context/ModalContext'
import { 
  Check, 
  X, 
  ArrowRight, 
  Crown,
  Building,
  Rocket
} from 'lucide-react'
import AnimatedButton from '../components/AnimatedButton'

const Pricing = () => {
  const { openLeadModal } = useModal()
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly')

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small teams getting started with enterprise solutions',
      price: billingCycle === 'monthly' ? 2999 : 2499,
      yearlyPrice: 29990,
      icon: Rocket,
      color: 'primary',
      popular: false,
      features: [
        'Up to 50 users',
        '10GB cloud storage',
        'Basic analytics dashboard',
        'Email support (48h response)',
        'Monthly strategy calls',
        'API access (10k requests/month)',
        'Basic security features',
        'Mobile app access',
        'Standard reporting',
        '5-hour onboarding'
      ],
      notIncluded: [
        'Custom integrations',
        'Advanced security',
        'Dedicated account manager',
        'Custom training sessions',
        'SLA guarantee'
      ]
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses needing advanced features and support',
      price: billingCycle === 'monthly' ? 5999 : 4999,
      yearlyPrice: 59990,
      icon: Building,
      color: 'accent',
      popular: true,
      features: [
        'Up to 200 users',
        '100GB cloud storage',
        'Advanced analytics & insights',
        'Priority email support (24h response)',
        'Bi-weekly strategy calls',
        'API access (100k requests/month)',
        'Advanced security features',
        'Mobile app with offline mode',
        'Custom reports & dashboards',
        '20-hour onboarding',
        'Custom integrations (5)',
        'Advanced user management',
        'Data export capabilities',
        'Collaboration tools',
        'Performance monitoring'
      ],
      notIncluded: [
        'White-label solutions',
        'Custom development',
        'Dedicated infrastructure',
        '24/7 phone support'
      ]
    },
    {
      name: 'Enterprise',
      description: 'Comprehensive solution for large organizations with complex needs',
      price: billingCycle === 'monthly' ? 12999 : 9999,
      yearlyPrice: 119990,
      icon: Crown,
      color: 'success',
      popular: false,
      features: [
        'Unlimited users',
        'Unlimited cloud storage',
        'Enterprise analytics suite',
        '24/7 dedicated support',
        'Weekly strategy calls',
        'Unlimited API access',
        'Enterprise-grade security',
        'Custom mobile applications',
        'White-label solutions',
        '50-hour onboarding',
        'Unlimited custom integrations',
        'Advanced admin controls',
        'Custom data pipelines',
        'Advanced collaboration suite',
        'Real-time monitoring',
        'Custom training sessions',
        'Dedicated account manager',
        '99.9% SLA guarantee',
        'Custom development hours (40/mo)',
        'On-premise deployment option',
        'Compliance certifications'
      ],
      notIncluded: []
    }
  ]

  const addOns = [
    {
      name: 'Dedicated Infrastructure',
      price: 2999,
      description: 'Private cloud infrastructure with dedicated resources'
    },
    {
      name: 'Custom Development',
      price: 19999,
      description: 'Additional custom development hours beyond included allocation'
    },
    {
      name: 'Premium Training',
      price: 4999,
      description: 'Comprehensive training program for your entire team'
    },
    {
      name: 'Advanced Analytics',
      price: 1499,
      description: 'AI-powered predictive analytics and business intelligence'
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
                <Crown className="w-4 h-4 mr-2" />
                Transparent Pricing
              </span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="heading-1 mb-6"
            >
              Simple, Scalable
              <br />
              Pricing Plans
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="body-lg mb-8 text-secondary-600 dark:text-slate-300"
            >
              Choose the perfect plan for your business. All plans include our core platform 
              with enterprise-grade security, 24/7 monitoring, and regular updates.
            </motion.p>

            {/* Billing Toggle */}
            <motion.div variants={itemVariants} className="flex justify-center mb-8">
              <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-secondary-200 p-1 inline-flex">
                <button
                  onClick={() => setBillingCycle('monthly')}
                  className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    billingCycle === 'monthly'
                      ? 'bg-primary-600 text-white'
                      : 'text-secondary-600 dark:text-slate-300 hover:text-secondary-900 dark:text-white'
                  }`}
                >
                  Monthly Billing
                </button>
                <button
                  onClick={() => setBillingCycle('annual')}
                  className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    billingCycle === 'annual'
                      ? 'bg-primary-600 text-white'
                      : 'text-secondary-600 dark:text-slate-300 hover:text-secondary-900 dark:text-white'
                  }`}
                >
                  Annual Billing
                  <span className="ml-2 text-xs bg-success-100 text-success-700 px-2 py-1 rounded">
                    Save 17%
                  </span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="container">
          <motion.div
            variants={containerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          >
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`relative ${
                  plan.popular 
                    ? 'lg:scale-105 z-10' 
                    : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <span className="bg-gradient-to-r from-primary-600 to-accent-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className={`card p-8 h-full ${
                  plan.popular 
                    ? 'border-2 border-primary-600 shadow-xl' 
                    : 'border border-secondary-200'
                }`}>
                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 ${
                      plan.color === 'primary' ? 'bg-primary-100' :
                      plan.color === 'accent' ? 'bg-accent-100' :
                      'bg-success-100'
                    }`}>
                      <plan.icon className={`w-8 h-8 ${
                        plan.color === 'primary' ? 'text-primary-600' :
                        plan.color === 'accent' ? 'text-accent-600' :
                        'text-success-600'
                      }`} />
                    </div>
                    
                    <h3 className="heading-3 mb-2">{plan.name}</h3>
                    <p className="body text-secondary-600 dark:text-slate-300 mb-6">{plan.description}</p>
                    
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-secondary-900 dark:text-white">
                        ${plan.price.toLocaleString()}
                      </span>
                      <span className="text-secondary-600 dark:text-slate-300">/month</span>
                    </div>
                    
                    {billingCycle === 'annual' && (
                      <div className="text-sm text-success-600 font-medium">
                        ${plan.yearlyPrice.toLocaleString()} billed annually
                      </div>
                    )}
                  </div>

                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start">
                        <Check className="w-5 h-5 text-success-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-secondary-700">{feature}</span>
                      </div>
                    ))}
                    
                    {plan.notIncluded.map((feature, i) => (
                      <div key={i} className="flex items-start opacity-50">
                        <X className="w-5 h-5 text-secondary-400 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-secondary-500 line-through">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <AnimatedButton 
                      size="lg" 
                      className={`w-full ${
                        plan.popular 
                          ? '' 
                          : 'variant="outline"'
                      }`}
                      onClick={openLeadModal}
                    >
                      {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </AnimatedButton>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 bg-secondary-50 dark:bg-slate-800">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-2 mb-6">Enhance Your Plan</h2>
            <p className="body-lg max-w-3xl mx-auto text-secondary-600 dark:text-slate-300">
              Add powerful features to your plan with our flexible add-ons. 
              Mix and match to create the perfect solution for your business.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {addOns.map((addOn, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="card p-6"
              >
                <h3 className="font-semibold text-secondary-900 dark:text-white mb-2">{addOn.name}</h3>
                <div className="text-2xl font-bold text-primary-600 mb-3">
                  ${addOn.price.toLocaleString()}
                  <span className="text-sm text-secondary-600 dark:text-slate-300 font-normal">/mo</span>
                </div>
                <p className="text-sm text-secondary-600 dark:text-slate-300">{addOn.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="heading-2 mb-12 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              {[
                {
                  question: "Can I change plans anytime?",
                  answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle, and we'll prorate any differences."
                },
                {
                  question: "What's included in onboarding?",
                  answer: "Our onboarding includes personalized setup, data migration assistance, team training sessions, and dedicated support to ensure you get maximum value from day one."
                },
                {
                  question: "Do you offer custom plans?",
                  answer: "Absolutely! We work with large enterprises to create custom solutions tailored to specific requirements. Contact our sales team to discuss your needs."
                },
                {
                  question: "What's your refund policy?",
                  answer: "We offer a 30-day money-back guarantee for all new subscriptions. If you're not satisfied, we'll provide a full refund, no questions asked."
                },
                {
                  question: "Is my data secure?",
                  answer: "Yes, we use enterprise-grade security with 256-bit encryption, regular security audits, SOC 2 Type II compliance, and GDPR compliance to protect your data."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card p-6"
                >
                  <h3 className="font-semibold text-secondary-900 dark:text-white mb-3">{faq.question}</h3>
                  <p className="text-secondary-600 dark:text-slate-300">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
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
            <h2 className="heading-2 mb-6 text-white">Ready to Get Started?</h2>
            <p className="text-xl mb-8 text-white/90">
              Join thousands of enterprises that trust our platform to drive their 
              digital transformation. Start your free trial today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AnimatedButton variant="secondary" size="lg" className="bg-white dark:bg-slate-800 text-primary-600 hover:bg-secondary-50 dark:bg-slate-800" onClick={openLeadModal}>
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </AnimatedButton>
              <AnimatedButton variant="outline" size="lg" className="border-white text-white hover:bg-white dark:bg-slate-800 hover:text-primary-600" onClick={openLeadModal}>
                  Schedule Demo
                </AnimatedButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Pricing

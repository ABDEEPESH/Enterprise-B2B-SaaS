import { motion } from 'framer-motion'
import { useModal } from '../../context/ModalContext'
import { ShoppingCart, Package, Truck, CreditCard, CheckCircle } from 'lucide-react'
import AnimatedButton from '../../components/AnimatedButton'

const Ecommerce = () => {
  const { openLeadModal } = useModal()
  const solutions = [
    {
      icon: ShoppingCart,
      title: "E-Commerce Platform",
      description: "Scalable online storefront with advanced features for modern retail operations and customer experience.",
      features: ["Multi-channel selling", "Mobile optimization", "Advanced search", "Personalization"]
    },
    {
      icon: Package,
      title: "Inventory Management",
      description: "Real-time inventory tracking and automated stock management to prevent overselling and optimize stock levels.",
      features: ["Real-time updates", "Predictive analytics", "Multi-warehouse support", "Automated reordering"]
    },
    {
      icon: Truck,
      title: "Logistics & Shipping",
      description: "Integrated shipping solutions with real-time tracking and automated fulfillment processes.",
      features: ["Carrier integration", "Real-time tracking", "Route optimization", "Returns management"]
    },
    {
      icon: CreditCard,
      title: "Payment Processing",
      description: "Secure payment gateway integration with multiple payment methods and fraud detection.",
      features: ["Multi-currency support", "Fraud detection", "Recurring payments", "Mobile payments"]
    }
  ]

  const benefits = [
    "Increased conversion rates through optimized user experience",
    "Reduced operational costs with automated workflows",
    "Enhanced customer satisfaction with fast, reliable service",
    "Scalable infrastructure for seasonal demand spikes",
    "Advanced analytics for data-driven decision making",
    "Seamless integration with existing business systems"
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-slate-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingCart className="w-10 h-10 text-purple-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white mb-6">
              E-Commerce Solutions
            </h1>
            <p className="text-xl text-secondary-600 dark:text-slate-300 leading-relaxed">
              Power your online retail business with comprehensive e-commerce solutions that drive sales, 
              streamline operations, and deliver exceptional customer experiences.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <AnimatedButton>
                Start Selling Online
              </AnimatedButton>
              <AnimatedButton variant="outline">
                View Demo Store
              </AnimatedButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-purple-600">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            {[
              { number: "10,000+", label: "Online Stores" },
              { number: "$2B+", label: "GMV Processed" },
              { number: "99.95%", label: "Uptime" },
              { number: "24/7", label: "Support" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-purple-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-secondary-900 dark:text-white mb-4">E-Commerce Platform Features</h2>
            <p className="text-secondary-600 dark:text-slate-300 max-w-2xl mx-auto">
              Complete e-commerce solutions designed to grow your online business and maximize revenue.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-700 dark:to-slate-800 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <solution.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-3">{solution.title}</h3>
                    <p className="text-secondary-600 dark:text-slate-300 mb-4">{solution.description}</p>
                    <div className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2 text-sm text-secondary-600 dark:text-slate-300">
                          <CheckCircle className="w-4 h-4 text-purple-600" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-secondary-50 dark:bg-slate-800">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl font-bold text-secondary-900 dark:text-white mb-6">Why Choose Our E-Commerce Platform?</h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-secondary-600 dark:text-slate-300">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-semibold mb-4">Performance & Scalability</h3>
              <p className="text-white/90 mb-6">
                Our e-commerce platform is built to handle high traffic volumes and scale with your business growth, ensuring fast loading times and reliable performance.
              </p>
              <div className="space-y-3">
                <div className="bg-white dark:bg-slate-800/20 backdrop-blur-sm rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Lightning Fast</h4>
                  <p className="text-white/80 text-sm">Sub-second page load times for optimal user experience</p>
                </div>
                <div className="bg-white dark:bg-slate-800/20 backdrop-blur-sm rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Auto-Scaling</h4>
                  <p className="text-white/80 text-sm">Automatic scaling to handle traffic spikes and seasonal demand</p>
                </div>
                <div className="bg-white dark:bg-slate-800/20 backdrop-blur-sm rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Global CDN</h4>
                  <p className="text-white/80 text-sm">Content delivery network for fast loading worldwide</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white dark:from-purple-700 dark:to-pink-700">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center max-w-3xl mx-auto text-white"
          >
            <h2 className="text-3xl font-bold mb-6">
              Launch Your Online Store Today
            </h2>
            <p className="text-white/90 mb-8">
              Join thousands of successful online retailers who trust our platform to power their 
              e-commerce operations and drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AnimatedButton variant="secondary" className="bg-white dark:bg-slate-800 text-purple-600 hover:bg-white dark:bg-slate-800/90" onClick={openLeadModal}>
                Start Free Trial
              </AnimatedButton>
              <AnimatedButton variant="outline" className="border-white text-white hover:bg-white dark:bg-slate-800/10" onClick={openLeadModal}>
                Schedule Demo
              </AnimatedButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Ecommerce

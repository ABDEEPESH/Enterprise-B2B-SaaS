import { motion } from 'framer-motion'
import { useModal } from '../../context/ModalContext'
import { Truck, Package, MapPin, Route, CheckCircle } from 'lucide-react'
import AnimatedButton from '../../components/AnimatedButton'

const Logistics = () => {
  const { openLeadModal } = useModal()
  const solutions = [
    {
      icon: Truck,
      title: "Fleet Management",
      description: "Comprehensive fleet tracking and management system to optimize vehicle utilization and reduce operational costs.",
      features: ["Real-time GPS tracking", "Maintenance scheduling", "Driver management", "Fuel optimization"]
    },
    {
      icon: Route,
      title: "Route Optimization",
      description: "AI-powered route planning to minimize delivery times and fuel consumption while maximizing efficiency.",
      features: ["Dynamic routing", "Traffic avoidance", "Multi-stop optimization", "Weather integration"]
    },
    {
      icon: Package,
      title: "Warehouse Management",
      description: "Advanced warehouse operations system with inventory tracking, order fulfillment, and automation capabilities.",
      features: ["Inventory tracking", "Order processing", "Automation integration", "Space optimization"]
    },
    {
      icon: MapPin,
      title: "Last-Mile Delivery",
      description: "Sophisticated last-mile delivery solution with real-time tracking and customer communication features.",
      features: ["Customer notifications", "Delivery scheduling", "Proof of delivery", "Returns management"]
    }
  ]

  const benefits = [
    "Reduced operational costs through optimized routes and fleet management",
    "Improved delivery accuracy with real-time tracking and monitoring",
    "Enhanced customer satisfaction with transparent delivery processes",
    "Scalable solutions for growing logistics operations",
    "Advanced analytics for data-driven decision making",
    "Seamless integration with existing supply chain systems"
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-slate-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-amber-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Truck className="w-10 h-10 text-orange-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white mb-6">
              Logistics & Supply Chain Solutions
            </h1>
            <p className="text-xl text-secondary-600 dark:text-slate-300 leading-relaxed">
              Transform your logistics operations with intelligent supply chain solutions that optimize 
              delivery routes, reduce costs, and enhance customer satisfaction.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <AnimatedButton onClick={openLeadModal}>
                Optimize Your Logistics
              </AnimatedButton>
              <AnimatedButton onClick={openLeadModal}>
                Request Demo
              </AnimatedButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-orange-600">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            {[
              { number: "5,000+", label: "Fleets Managed" },
              { number: "10M+", label: "Deliveries Monthly" },
              { number: "30%", label: "Cost Reduction" },
              { number: "24/7", label: "Real-Time Tracking" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-orange-100">{stat.label}</div>
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
            <h2 className="text-3xl font-bold text-secondary-900 dark:text-white mb-4">Logistics Management Solutions</h2>
            <p className="text-secondary-600 dark:text-slate-300 max-w-2xl mx-auto">
              Comprehensive logistics platform designed to streamline your supply chain operations and maximize efficiency.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-slate-700 dark:to-slate-800 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <solution.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-3">{solution.title}</h3>
                    <p className="text-secondary-600 dark:text-slate-300 mb-4">{solution.description}</p>
                    <div className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2 text-sm text-secondary-600 dark:text-slate-300">
                          <CheckCircle className="w-4 h-4 text-orange-600" />
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
              <h2 className="text-3xl font-bold text-secondary-900 dark:text-white mb-6">Why Choose Our Logistics Platform?</h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-secondary-600 dark:text-slate-300">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-600 to-amber-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-semibold mb-4">Real-Time Visibility</h3>
              <p className="text-white/90 mb-6">
                Get complete visibility into your supply chain operations with real-time tracking, 
                analytics, and predictive insights to optimize every aspect of your logistics.
              </p>
              <div className="space-y-3">
                <div className="bg-white dark:bg-slate-800/20 backdrop-blur-sm rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Live Tracking</h4>
                  <p className="text-white/80 text-sm">Real-time GPS tracking for all vehicles and shipments</p>
                </div>
                <div className="bg-white dark:bg-slate-800/20 backdrop-blur-sm rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Predictive Analytics</h4>
                  <p className="text-white/80 text-sm">AI-powered insights for route optimization and demand forecasting</p>
                </div>
                <div className="bg-white dark:bg-slate-800/20 backdrop-blur-sm rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Automated Alerts</h4>
                  <p className="text-white/80 text-sm">Instant notifications for delays, issues, and delivery updates</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-amber-600 text-white dark:from-orange-700 dark:to-amber-700">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center max-w-3xl mx-auto text-white"
          >
            <h2 className="text-3xl font-bold mb-6">
              Optimize Your Supply Chain Today
            </h2>
            <p className="text-white/90 mb-8">
              Join leading logistics companies who are transforming their operations with our 
              intelligent supply chain solutions and achieving significant cost savings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AnimatedButton variant="secondary" className="bg-white dark:bg-slate-800 text-orange-600 hover:bg-white dark:bg-slate-800/90">
                Start Optimizing
              </AnimatedButton>
              <AnimatedButton variant="outline" className="border-white text-white hover:bg-white dark:bg-slate-800/10">
                Free Assessment
              </AnimatedButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Logistics

import { motion } from 'framer-motion'
import { useModal } from '../../context/ModalContext'
import { Heart, Activity, Shield, BrainCircuit, Stethoscope, CheckCircle } from 'lucide-react'
import AnimatedButton from '../../components/AnimatedButton'

const HealthTech = () => {
  const { openLeadModal } = useModal()
  const solutions = [
    {
      icon: Heart,
      title: "Electronic Health Records",
      description: "Secure, interoperable EHR systems that streamline patient data management and improve care coordination.",
      features: ["HIPAA compliant", "Real-time updates", "Mobile access", "Data analytics"]
    },
    {
      icon: BrainCircuit,
      title: "AI-Powered Diagnostics",
      description: "Machine learning algorithms that assist healthcare professionals in accurate and early disease detection.",
      features: ["Medical imaging analysis", "Predictive analytics", "Clinical decision support", "Risk assessment"]
    },
    {
      icon: Shield,
      title: "Telemedicine Platforms",
      description: "Comprehensive virtual care solutions that connect patients with healthcare providers remotely.",
      features: ["Video consultations", "Secure messaging", "Prescription management", "Appointment scheduling"]
    },
    {
      icon: Activity,
      title: "Wearable Integration",
      description: "IoT-enabled health monitoring systems that track patient vitals and provide real-time health insights.",
      features: ["Continuous monitoring", "Alert systems", "Data synchronization", "Health dashboards"]
    }
  ]

  const benefits = [
    "Improved patient outcomes through data-driven insights",
    "Reduced operational costs with automated workflows",
    "Enhanced security and compliance with healthcare regulations",
    "Scalable infrastructure for growing healthcare organizations",
    "Real-time collaboration between healthcare providers",
    "Advanced analytics for population health management"
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-slate-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 via-white to-teal-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Stethoscope className="w-10 h-10 text-emerald-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white mb-6">
              Healthcare Technology Solutions
            </h1>
            <p className="text-xl text-secondary-600 dark:text-slate-300 leading-relaxed">
              Transforming healthcare delivery with innovative technology solutions that improve patient care, 
              streamline operations, and ensure regulatory compliance.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <AnimatedButton onClick={openLeadModal}>
                Schedule a Consultation
              </AnimatedButton>
              <AnimatedButton variant="outline">
                View Case Studies
              </AnimatedButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-emerald-600">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            {[
              { number: "250+", label: "Healthcare Providers" },
              { number: "5M+", label: "Patients Served" },
              { number: "99.9%", label: "Uptime" },
              { number: "HIPAA", label: "Compliant" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-emerald-100">{stat.label}</div>
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
            <h2 className="text-3xl font-bold text-secondary-900 dark:text-white mb-4">Healthcare Solutions</h2>
            <p className="text-secondary-600 dark:text-slate-300 max-w-2xl mx-auto">
              Comprehensive technology solutions designed specifically for the healthcare industry's unique challenges.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-slate-700 dark:to-slate-800 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <solution.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-3">{solution.title}</h3>
                    <p className="text-secondary-600 dark:text-slate-300 mb-4">{solution.description}</p>
                    <div className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2 text-sm text-secondary-600 dark:text-slate-300">
                          <CheckCircle className="w-4 h-4 text-emerald-600" />
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
              <h2 className="text-3xl font-bold text-secondary-900 dark:text-white mb-6">Why Choose Our Healthcare Solutions?</h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-secondary-600 dark:text-slate-300">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-semibold mb-4">Healthcare Compliance & Security</h3>
              <p className="text-white/90 mb-6">
                Our solutions are built with healthcare compliance at the core, ensuring your organization meets all regulatory requirements while maintaining the highest standards of data security.
              </p>
              <div className="space-y-3">
                <div className="bg-white dark:bg-slate-800/20 backdrop-blur-sm rounded-lg p-4">
                  <h4 className="font-semibold mb-2">HIPAA Compliant</h4>
                  <p className="text-white/80 text-sm">Full compliance with healthcare data protection regulations</p>
                </div>
                <div className="bg-white dark:bg-slate-800/20 backdrop-blur-sm rounded-lg p-4">
                  <h4 className="font-semibold mb-2">End-to-End Encryption</h4>
                  <p className="text-white/80 text-sm">Advanced encryption for all patient data and communications</p>
                </div>
                <div className="bg-white dark:bg-slate-800/20 backdrop-blur-sm rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Audit Trails</h4>
                  <p className="text-white/80 text-sm">Complete logging and monitoring for compliance reporting</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-600 text-white dark:from-emerald-700 dark:to-teal-700">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center max-w-3xl mx-auto text-white"
          >
            <h2 className="text-3xl font-bold mb-6">
              Transform Your Healthcare Organization
            </h2>
            <p className="text-white/90 mb-8">
              Join leading healthcare providers who are leveraging technology to improve patient outcomes, 
              reduce costs, and enhance operational efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AnimatedButton variant="secondary" className="bg-white dark:bg-slate-800 text-emerald-600 hover:bg-white dark:bg-slate-800/90" onClick={openLeadModal}>
                Get Started Today
              </AnimatedButton>
              <AnimatedButton variant="outline" className="border-white text-white hover:bg-white dark:bg-slate-800/10" onClick={openLeadModal}>
                Request Demo
              </AnimatedButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HealthTech

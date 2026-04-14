import { motion } from 'framer-motion'
import { BrainCircuit, Cpu, Database, Shield, CheckCircle } from 'lucide-react'
import AnimatedButton from '../../components/AnimatedButton'
import { useModal } from '../../context/ModalContext'

const AI = () => {
  const { openLeadModal } = useModal()
  const solutions = [
    {
      icon: BrainCircuit,
      title: "Machine Learning Models",
      description: "Custom ML solutions tailored to your business needs, from predictive analytics to natural language processing.",
      features: ["Custom model development", "Predictive analytics", "NLP solutions", "Computer vision"]
    },
    {
      icon: Database,
      title: "AI-Powered Analytics",
      description: "Advanced data analytics platform that leverages AI to uncover insights and drive business intelligence.",
      features: ["Real-time analytics", "Predictive modeling", "Anomaly detection", "Automated reporting"]
    },
    {
      icon: Cpu,
      title: "Intelligent Automation",
      description: "AI-driven automation solutions that streamline workflows and reduce manual intervention.",
      features: ["Process automation", "Intelligent workflows", "Decision automation", "Smart routing"]
    },
    {
      icon: Shield,
      title: "AI Security Solutions",
      description: "Advanced security systems powered by AI to detect threats and protect your digital assets.",
      features: ["Threat detection", "Fraud prevention", "Behavioral analysis", "Automated response"]
    }
  ]

  const benefits = [
    "Improved decision-making with AI-driven insights",
    "Increased operational efficiency through automation",
    "Enhanced customer experience with personalized AI solutions",
    "Competitive advantage through innovative AI applications",
    "Scalable AI infrastructure for growing business needs",
    "Reduced costs with intelligent process optimization"
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-slate-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <BrainCircuit className="w-10 h-10 text-indigo-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white mb-6">
              Artificial Intelligence Solutions
            </h1>
            <p className="text-xl text-secondary-600 dark:text-slate-300 leading-relaxed">
              Harness the power of artificial intelligence to transform your business processes, 
              gain competitive insights, and drive innovation across your organization.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <AnimatedButton onClick={openLeadModal}>
                Schedule AI Consultation
              </AnimatedButton>
              <AnimatedButton variant="outline">
                View Case Studies
              </AnimatedButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-indigo-600">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            {[
              { number: "500+", label: "AI Models Deployed" },
              { number: "10TB+", label: "Data Processed Daily" },
              { number: "95%", label: "Accuracy Rate" },
              { number: "24/7", label: "AI Monitoring" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-indigo-100">{stat.label}</div>
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
            <h2 className="text-3xl font-bold text-secondary-900 dark:text-white mb-4">AI-Powered Solutions</h2>
            <p className="text-secondary-600 dark:text-slate-300 max-w-2xl mx-auto">
              Cutting-edge AI technologies designed to solve complex business challenges and drive digital transformation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-slate-700 dark:to-slate-800 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <solution.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-3">{solution.title}</h3>
                    <p className="text-secondary-600 dark:text-slate-300 mb-4">{solution.description}</p>
                    <div className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2 text-sm text-secondary-600 dark:text-slate-300">
                          <CheckCircle className="w-4 h-4 text-indigo-600" />
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
              <h2 className="text-3xl font-bold text-secondary-900 dark:text-white mb-6">Why Choose Our AI Solutions?</h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-secondary-600 dark:text-slate-300">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-semibold mb-4">Enterprise AI Platform</h3>
              <p className="text-white/90 mb-6">
                Our comprehensive AI platform provides the infrastructure, tools, and expertise 
                to deploy and manage AI solutions at scale across your organization.
              </p>
              <div className="space-y-3">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Scalable Infrastructure</h4>
                  <p className="text-white/80 text-sm">Cloud-native AI platform that scales with your business needs</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Model Management</h4>
                  <p className="text-white/80 text-sm">Complete lifecycle management for AI models and deployments</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Data Governance</h4>
                  <p className="text-white/80 text-sm">Enterprise-grade data security and compliance for AI operations</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white dark:from-indigo-700 dark:to-purple-700">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center max-w-3xl mx-auto text-white"
          >
            <h2 className="text-3xl font-bold mb-6">
              Transform Your Business with AI
            </h2>
            <p className="text-white/90 mb-8">
              Join innovative companies leveraging artificial intelligence to gain competitive 
              advantage and drive business transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AnimatedButton variant="secondary" className="bg-white dark:bg-slate-800 text-indigo-600 hover:bg-white dark:bg-slate-800/90" onClick={openLeadModal}>
                Start AI Journey
              </AnimatedButton>
              <AnimatedButton variant="outline" className="border-white text-white hover:bg-white/10 dark:hover:bg-white/20" onClick={openLeadModal}>
                AI Strategy Session
              </AnimatedButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AI

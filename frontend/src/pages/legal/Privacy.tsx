import { motion } from 'framer-motion'
import { Shield, Eye, Lock, Database, UserCheck, FileText } from 'lucide-react'
import AnimatedButton from '../../components/AnimatedButton'

const Privacy = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-primary-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-secondary-600 leading-relaxed">
              Your privacy is fundamental to our mission. This policy outlines how we collect, 
              use, and protect your information when you use our enterprise platform.
            </p>
            <div className="mt-8 text-sm text-secondary-500">
              Last updated: April 14, 2024
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-12"
          >
            {/* Information We Collect */}
            <section>
              <h2 className="text-3xl font-bold text-secondary-900 mb-6">Information We Collect</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-secondary-50 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <UserCheck className="w-6 h-6 text-primary-600" />
                    <h3 className="font-semibold text-secondary-900">Personal Information</h3>
                  </div>
                  <p className="text-secondary-600">
                    Name, email address, phone number, job title, company information, and other 
                    contact details you provide when registering for our services or contacting us.
                  </p>
                </div>

                <div className="bg-secondary-50 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Database className="w-6 h-6 text-primary-600" />
                    <h3 className="font-semibold text-secondary-900">Usage Data</h3>
                  </div>
                  <p className="text-secondary-600">
                    Information about how you use our platform, including features accessed, 
                    time spent, interaction patterns, and performance metrics.
                  </p>
                </div>

                <div className="bg-secondary-50 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Eye className="w-6 h-6 text-primary-600" />
                    <h3 className="font-semibold text-secondary-900">Device Information</h3>
                  </div>
                  <p className="text-secondary-600">
                    IP address, browser type, operating system, device identifiers, and other 
                    technical information about your devices and software.
                  </p>
                </div>

                <div className="bg-secondary-50 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <FileText className="w-6 h-6 text-primary-600" />
                    <h3 className="font-semibold text-secondary-900">Business Information</h3>
                  </div>
                  <p className="text-secondary-600">
                    Company size, industry, revenue, business requirements, and other 
                    contextual information relevant to our enterprise services.
                  </p>
                </div>
              </div>
            </section>

            {/* How We Use Your Information */}
            <section>
              <h2 className="text-3xl font-bold text-secondary-900 mb-6">How We Use Your Information</h2>
              
              <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-8">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <strong className="text-secondary-900">Service Provision:</strong>
                      <span className="text-secondary-600 ml-2">
                        To deliver, maintain, and improve our enterprise platform and services
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <strong className="text-secondary-900">Communication:</strong>
                      <span className="text-secondary-600 ml-2">
                        To respond to your inquiries, send important updates, and provide customer support
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <strong className="text-secondary-900">Personalization:</strong>
                      <span className="text-secondary-600 ml-2">
                        To customize your experience and provide relevant content and recommendations
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <strong className="text-secondary-900">Analytics:</strong>
                      <span className="text-secondary-600 ml-2">
                        To analyze usage patterns, improve our services, and develop new features
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <strong className="text-secondary-900">Security:</strong>
                      <span className="text-secondary-600 ml-2">
                        To detect and prevent fraud, abuse, and security threats
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <strong className="text-secondary-900">Legal Compliance:</strong>
                      <span className="text-secondary-600 ml-2">
                        To comply with legal obligations and enforce our terms of service
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </section>

            {/* Information Sharing */}
            <section>
              <h2 className="text-3xl font-bold text-secondary-900 mb-6">Information Sharing</h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-primary-600 pl-6">
                  <h3 className="font-semibold text-secondary-900 mb-2">We Do Not Sell Your Information</h3>
                  <p className="text-secondary-600">
                    We never sell, rent, or trade your personal information with third parties for 
                    marketing purposes. Your data is used exclusively to provide and improve our services.
                  </p>
                </div>

                <div className="border-l-4 border-secondary-300 pl-6">
                  <h3 className="font-semibold text-secondary-900 mb-2">Limited Sharing Circumstances</h3>
                  <p className="text-secondary-600 mb-4">
                    We may share information only in the following limited circumstances:
                  </p>
                  <ul className="space-y-2 text-secondary-600">
                    <li>· With service providers who perform functions on our behalf (e.g., cloud hosting)</li>
                    <li>· When required by law or to protect our rights and safety</li>
                    <li>· In connection with a business merger or acquisition</li>
                    <li>· With your explicit consent for specific purposes</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="text-3xl font-bold text-secondary-900 mb-6">Data Security</h2>
              
              <div className="bg-gradient-to-br from-primary-600 to-secondary-600 rounded-xl p-8 text-white">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Enterprise-Grade Protection</h3>
                    <p className="text-white/90 mb-6">
                      We implement industry-leading security measures to protect your information:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <Lock className="w-5 h-5" />
                        <span>256-bit SSL encryption for data transmission</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <Lock className="w-5 h-5" />
                        <span>AES-256 encryption for data at rest</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <Lock className="w-5 h-5" />
                        <span>Regular security audits and penetration testing</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <Lock className="w-5 h-5" />
                        <span>Strict access controls and authentication</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Compliance Standards</h3>
                    <p className="text-white/90 mb-6">
                      Our security practices comply with major international standards:
                    </p>
                    <div className="space-y-3">
                      <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-3">
                        <div className="font-medium">SOC 2 Type II Certified</div>
                        <div className="text-sm text-white/80">Annual third-party security audits</div>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-3">
                        <div className="font-medium">GDPR Compliant</div>
                        <div className="text-sm text-white/80">Full compliance with EU data protection laws</div>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-3">
                        <div className="font-medium">ISO 27001 Aligned</div>
                        <div className="text-sm text-white/80">Information security management standards</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-3xl font-bold text-secondary-900 mb-6">Your Privacy Rights</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-secondary-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                  <h3 className="font-semibold text-secondary-900 mb-3">Access and Correction</h3>
                  <p className="text-secondary-600">
                    Request access to your personal information and correct inaccuracies or 
                    incomplete data.
                  </p>
                </div>

                <div className="bg-white border border-secondary-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                  <h3 className="font-semibold text-secondary-900 mb-3">Data Portability</h3>
                  <p className="text-secondary-600">
                    Obtain a copy of your data in a structured, machine-readable format 
                    for use with other services.
                  </p>
                </div>

                <div className="bg-white border border-secondary-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                  <h3 className="font-semibold text-secondary-900 mb-3">Deletion</h3>
                  <p className="text-secondary-600">
                    Request deletion of your personal information, subject to legal and 
                    business requirements.
                  </p>
                </div>

                <div className="bg-white border border-secondary-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                  <h3 className="font-semibold text-secondary-900 mb-3">Opt-Out</h3>
                  <p className="text-secondary-600">
                    Opt out of certain data collection and processing activities where 
                    technically feasible.
                  </p>
                </div>
              </div>
            </section>

            {/* International Data Transfers */}
            <section>
              <h2 className="text-3xl font-bold text-secondary-900 mb-6">International Data Transfers</h2>
              
              <div className="bg-secondary-50 rounded-xl p-8">
                <p className="text-secondary-600 mb-6">
                  Our platform operates globally and may transfer your information to countries 
                  other than your own. We ensure appropriate safeguards are in place for all 
                  international data transfers, including:
                </p>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-primary-600" />
                    </div>
                    <h4 className="font-semibold text-secondary-900 mb-2">Standard Contractual Clauses</h4>
                    <p className="text-secondary-600 text-sm">
                      EU-approved contracts for international data transfers
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Lock className="w-8 h-8 text-primary-600" />
                    </div>
                    <h4 className="font-semibold text-secondary-900 mb-2">Adequacy Decisions</h4>
                    <p className="text-secondary-600 text-sm">
                      Transfers to countries with EU-approved data protection laws
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Database className="w-8 h-8 text-primary-600" />
                    </div>
                    <h4 className="font-semibold text-secondary-900 mb-2">Binding Corporate Rules</h4>
                    <p className="text-secondary-600 text-sm">
                      Internal rules for intra-group data transfers
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Policy Updates */}
            <section>
              <h2 className="text-3xl font-bold text-secondary-900 mb-6">Policy Updates</h2>
              
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-8 border border-amber-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-amber-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-900 mb-3">How We Notify Changes</h3>
                    <p className="text-secondary-600 mb-4">
                      We may update this privacy policy from time to time. When we make material 
                      changes, we will:
                    </p>
                    <ul className="space-y-2 text-secondary-600">
                      <li>· Post the updated policy on our website with a new effective date</li>
                      <li>· Send email notifications to registered users</li>
                      <li>· Display prominent notices on our platform</li>
                      <li>· Provide a summary of key changes for your review</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-3xl font-bold text-secondary-900 mb-6">Contact Us</h2>
              
              <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl p-8 text-white">
                <p className="text-white/90 mb-6">
                  If you have questions about this privacy policy or want to exercise your privacy 
                  rights, please contact our privacy team:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Privacy Team</h4>
                    <div className="space-y-2 text-white/80">
                      <p>Email: privacy@enterprise-platform.com</p>
                      <p>Phone: +1 (555) 123-4567</p>
                      <p>Hours: Monday-Friday, 9 AM - 6 PM EST</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Mailing Address</h4>
                    <div className="text-white/80">
                      <p>Privacy Officer</p>
                      <p>Enterprise Platform Inc.</p>
                      <p>123 Tech Boulevard, Suite 100</p>
                      <p>San Francisco, CA 94105</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <AnimatedButton variant="secondary" className="bg-white text-primary-600 hover:bg-white/90">
                    Contact Privacy Team
                  </AnimatedButton>
                </div>
              </div>
            </section>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Privacy

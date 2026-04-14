import { motion } from 'framer-motion'
import { FileText, Shield, AlertCircle, CheckCircle, Scale } from 'lucide-react'
import AnimatedButton from '../../components/AnimatedButton'

const Terms = () => {
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
            <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="w-10 h-10 text-primary-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-secondary-600 dark:text-slate-300 leading-relaxed">
              These terms govern your use of our enterprise platform and services. 
              By using our platform, you agree to these terms and conditions.
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
            {/* Acceptance of Terms */}
            <section>
              <h2 className="text-3xl font-bold text-secondary-900 dark:text-white mb-6">Acceptance of Terms</h2>
              
              <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-slate-700 dark:to-slate-800 rounded-xl p-8">
                <p className="text-secondary-600 dark:text-slate-300 leading-relaxed">
                  By accessing and using Enterprise Platform ("the Service"), you accept and agree 
                  to be bound by the terms and provision of this agreement. If you do not agree 
                  to abide by the above, please do not use this service.
                </p>
                <p className="text-secondary-600 dark:text-slate-300 leading-relaxed mt-4">
                  These Terms of Service apply to all users of the Service, including without 
                  limitation users who are browsers, vendors, customers, merchants, and/or 
                  contributors of content.
                </p>
              </div>
            </section>

            {/* Description of Service */}
            <section>
              <h2 className="text-3xl font-bold text-secondary-900 dark:text-white mb-6">Description of Service</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-secondary-50 dark:bg-slate-800 rounded-xl p-6">
                  <h3 className="font-semibold text-secondary-900 dark:text-white mb-3">Platform Features</h3>
                  <p className="text-secondary-600 dark:text-slate-300">
                    Enterprise Platform provides a comprehensive suite of business tools including 
                    lead management, customer relationship management, analytics, and collaboration 
                    features designed for B2B organizations.
                  </p>
                </div>

                <div className="bg-secondary-50 dark:bg-slate-800 rounded-xl p-6">
                  <h3 className="font-semibold text-secondary-900 dark:text-white mb-3">Service Availability</h3>
                  <p className="text-secondary-600 dark:text-slate-300">
                    We strive to maintain high availability of our services but do not guarantee 
                    uninterrupted access. Scheduled maintenance and unexpected downtime may occur.
                  </p>
                </div>

                <div className="bg-secondary-50 dark:bg-slate-800 rounded-xl p-6">
                  <h3 className="font-semibold text-secondary-900 dark:text-white mb-3">Service Modifications</h3>
                  <p className="text-secondary-600 dark:text-slate-300">
                    We reserve the right to modify, suspend, or discontinue the service at any 
                    time with or without notice to users.
                  </p>
                </div>

                <div className="bg-secondary-50 dark:bg-slate-800 rounded-xl p-6">
                  <h3 className="font-semibold text-secondary-900 dark:text-white mb-3">Third-Party Services</h3>
                  <p className="text-secondary-600 dark:text-slate-300">
                    Our service may integrate with third-party applications and services. These 
                    integrations are subject to their respective terms and privacy policies.
                  </p>
                </div>
              </div>
            </section>

            {/* User Accounts */}
            <section>
              <h2 className="text-3xl font-bold text-secondary-900 dark:text-white mb-6">User Accounts</h2>
              
              <div className="space-y-6">
                <div className="bg-white dark:bg-slate-800 border border-secondary-200 rounded-xl p-6">
                  <h3 className="font-semibold text-secondary-900 dark:text-white mb-4">Account Registration</h3>
                  <ul className="space-y-3 text-secondary-600 dark:text-slate-300">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>You must provide accurate, current, and complete information during registration</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>You are responsible for maintaining the confidentiality of your account credentials</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>You must notify us immediately of any unauthorized use of your account</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>You are responsible for all activities that occur under your account</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-secondary-900 dark:text-white mb-2">Account Termination</h4>
                      <p className="text-secondary-600 dark:text-slate-300">
                        We reserve the right to suspend or terminate your account at any time for 
                        violations of these terms or for any other reason we deem appropriate.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* User Conduct */}
            <section>
              <h2 className="text-3xl font-bold text-secondary-900 dark:text-white mb-6">User Conduct</h2>
              
              <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-8">
                <h3 className="font-semibold text-secondary-900 dark:text-white mb-4">Prohibited Activities</h3>
                <p className="text-secondary-600 dark:text-slate-300 mb-6">
                  You agree not to engage in any of the following prohibited activities:
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-secondary-700">Using the service for illegal purposes</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-secondary-700">Violating applicable laws or regulations</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-secondary-700">Infringing on intellectual property rights</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-secondary-700">Distributing malware or malicious code</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-secondary-700">Spamming or sending unsolicited communications</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-secondary-700">Attempting to gain unauthorized access</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-secondary-700">Interfering with service operation</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-secondary-700">Harassing or abusing other users</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Intellectual Property */}
            <section>
              <h2 className="text-3xl font-bold text-secondary-900 dark:text-white mb-6">Intellectual Property</h2>
              
              <div className="space-y-6">
                <div className="bg-white dark:bg-slate-800 border border-secondary-200 rounded-xl p-6">
                  <h3 className="font-semibold text-secondary-900 dark:text-white mb-4">Our Intellectual Property</h3>
                  <p className="text-secondary-600 dark:text-slate-300 mb-4">
                    The Service and its original content, features, and functionality are and will 
                    remain the exclusive property of Enterprise Platform Inc. and its licensors. 
                    The service is protected by copyright, trademark, and other laws.
                  </p>
                  <p className="text-secondary-600 dark:text-slate-300">
                    You may not modify, reproduce, distribute, create derivative works, or publicly 
                    display any content from our service without our express written permission.
                  </p>
                </div>

                <div className="bg-secondary-50 dark:bg-slate-800 rounded-xl p-6">
                  <h3 className="font-semibold text-secondary-900 dark:text-white mb-4">User-Generated Content</h3>
                  <p className="text-secondary-600 dark:text-slate-300 mb-4">
                    You retain ownership of any content you submit to our service. However, by submitting 
                    content, you grant us a worldwide, non-exclusive, royalty-free license to use, 
                    reproduce, modify, and display such content in connection with the service.
                  </p>
                  <p className="text-secondary-600 dark:text-slate-300">
                    You represent and warrant that you own or have the necessary licenses for all 
                    content you submit and that such content does not violate any third-party rights.
                  </p>
                </div>
              </div>
            </section>

            {/* Privacy and Data Protection */}
            <section>
              <h2 className="text-3xl font-bold text-secondary-900 dark:text-white mb-6">Privacy and Data Protection</h2>
              
              <div className="bg-gradient-to-br from-primary-600 to-secondary-600 dark:from-primary-700 dark:to-secondary-700 rounded-xl p-8 text-white">
                <div className="flex items-center gap-4 mb-6">
                  <Shield className="w-8 h-8" />
                  <h3 className="text-2xl font-semibold">Your Privacy Matters</h3>
                </div>
                
                <p className="text-white/90 mb-6">
                  Your privacy is of utmost importance to us. Our collection and use of personal 
                  information is governed by our Privacy Policy, which forms part of these terms.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Data Collection</h4>
                    <p className="text-white/80">
                      We collect only the information necessary to provide and improve our services, 
                      as detailed in our Privacy Policy.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Data Protection</h4>
                    <p className="text-white/80">
                      We implement industry-standard security measures to protect your data from 
                      unauthorized access, alteration, or destruction.
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <AnimatedButton variant="secondary" className="bg-white dark:bg-slate-800 text-primary-600 hover:bg-white dark:bg-slate-800/90">
                    View Privacy Policy
                  </AnimatedButton>
                </div>
              </div>
            </section>

            {/* Payment Terms */}
            <section>
              <h2 className="text-3xl font-bold text-secondary-900 dark:text-white mb-6">Payment Terms</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-secondary-50 dark:bg-slate-800 rounded-xl p-6">
                  <h3 className="font-semibold text-secondary-900 dark:text-white mb-3">Subscription Fees</h3>
                  <p className="text-secondary-600 dark:text-slate-300">
                    Paid subscriptions are billed in advance on a monthly or annual basis. 
                    Fees are non-refundable except as required by law.
                  </p>
                </div>

                <div className="bg-secondary-50 dark:bg-slate-800 rounded-xl p-6">
                  <h3 className="font-semibold text-secondary-900 dark:text-white mb-3">Payment Methods</h3>
                  <p className="text-secondary-600 dark:text-slate-300">
                    We accept major credit cards and other payment methods as specified on our 
                    platform. All payment processing is handled by secure third-party providers.
                  </p>
                </div>

                <div className="bg-secondary-50 dark:bg-slate-800 rounded-xl p-6">
                  <h3 className="font-semibold text-secondary-900 dark:text-white mb-3">Price Changes</h3>
                  <p className="text-secondary-600 dark:text-slate-300">
                    We reserve the right to modify our subscription fees at any time. Price 
                    changes will be communicated to users at least 30 days in advance.
                  </p>
                </div>

                <div className="bg-secondary-50 dark:bg-slate-800 rounded-xl p-6">
                  <h3 className="font-semibold text-secondary-900 dark:text-white mb-3">Cancellation</h3>
                  <p className="text-secondary-600 dark:text-slate-300">
                    You may cancel your subscription at any time. Cancellations take effect at 
                    the end of the current billing period.
                  </p>
                </div>
              </div>
            </section>

            {/* Disclaimers */}
            <section>
              <h2 className="text-3xl font-bold text-secondary-900 dark:text-white mb-6">Disclaimers</h2>
              
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-8">
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-secondary-900 dark:text-white mb-4">Important Limitations</h3>
                    <ul className="space-y-3 text-secondary-600 dark:text-slate-300">
                      <li>· The service is provided "as is" without warranties of any kind</li>
                      <li>· We do not guarantee the accuracy or reliability of all content</li>
                      <li>· We are not liable for any losses arising from service use</li>
                      <li>· Third-party links and content are not under our control</li>
                      <li>· Service availability may be affected by factors beyond our control</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section>
              <h2 className="text-3xl font-bold text-secondary-900 dark:text-white mb-6">Limitation of Liability</h2>
              
              <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <Scale className="w-8 h-8 text-red-600" />
                  <h3 className="text-2xl font-semibold text-secondary-900 dark:text-white">Liability Limitations</h3>
                </div>
                
                <p className="text-secondary-600 dark:text-slate-300 mb-6">
                  To the fullest extent permitted by law, Enterprise Platform Inc. shall not be liable 
                  for any indirect, incidental, special, consequential, or punitive damages, 
                  including without limitation, loss of profits, data, use, goodwill, or other 
                  intangible losses.
                </p>
                
                <p className="text-secondary-600 dark:text-slate-300">
                  Our total liability to you for any cause of action whatsoever will not exceed 
                  the amount paid by you for the service during the preceding twelve (12) months.
                </p>
              </div>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className="text-3xl font-bold text-secondary-900 dark:text-white mb-6">Governing Law</h2>
              
              <div className="bg-white dark:bg-slate-800 border border-secondary-200 rounded-xl p-6">
                <p className="text-secondary-600 dark:text-slate-300 mb-4">
                  These Terms of Service and any separate agreements whereby we provide you services 
                  shall be governed by and construed in accordance with the laws of the State of 
                  California, United States, without regard to its conflict of law provisions.
                </p>
                
                <p className="text-secondary-600 dark:text-slate-300">
                  Any disputes arising from these terms shall be resolved through binding arbitration 
                  in San Francisco, California, in accordance with the rules of the American 
                  Arbitration Association.
                </p>
              </div>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-3xl font-bold text-secondary-900 dark:text-white mb-6">Contact Information</h2>
              
              <div className="bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-700 dark:to-secondary-700 rounded-xl p-8 text-white">
                <p className="text-white/90 mb-6">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Legal Department</h4>
                    <div className="space-y-2 text-white/80">
                      <p>Email: legal@enterprise-platform.com</p>
                      <p>Phone: +1 (555) 123-4567</p>
                      <p>Hours: Monday-Friday, 9 AM - 6 PM EST</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Mailing Address</h4>
                    <div className="text-white/80">
                      <p>Legal Department</p>
                      <p>Enterprise Platform Inc.</p>
                      <p>123 Tech Boulevard, Suite 100</p>
                      <p>San Francisco, CA 94105</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <AnimatedButton variant="secondary" className="bg-white dark:bg-slate-800 text-primary-600 hover:bg-white dark:bg-slate-800/90">
                    Contact Legal Team
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

export default Terms

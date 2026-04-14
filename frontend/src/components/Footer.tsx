import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Briefcase,
  Building,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  LinkedIn,
  Instagram,
  Github,
  ChevronRight,
} from 'lucide-react'

const Footer = () => {
  const footerLinks = {
    services: [
      { name: 'Strategy Consulting', href: '/services/strategy' },
      { name: 'UI/UX Design', href: '/services/design' },
      { name: 'Development', href: '/services/development' },
      { name: 'Cloud Solutions', href: '/services/cloud' },
      { name: 'Security', href: '/services/security' },
    ],
    industries: [
      { name: 'FinTech', href: '/industries/fintech' },
      { name: 'HealthTech', href: '/industries/healthtech' },
      { name: 'E-commerce', href: '/industries/ecommerce' },
      { name: 'Logistics', href: '/industries/logistics' },
      { name: 'AI & ML', href: '/industries/ai' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'Careers', href: '/careers' },
      { name: 'Blog', href: '/blog' },
      { name: 'Contact', href: '/contact' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'GDPR Compliance', href: '/gdpr' },
    ],
  }

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: LinkedIn, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Github, href: '#', label: 'Github' },
  ]

  return (
    <footer className="bg-secondary-900 text-white">
      {/* Main Footer Content */}
      <div className="container py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center space-x-2 mb-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-gradient-to-br from-primary-600 to-accent-600 rounded-lg flex items-center justify-center shadow-lg"
              >
                <Briefcase className="w-6 h-6 text-white" />
              </motion.div>
              <span className="text-xl font-bold">Enterprise</span>
            </Link>
            
            <p className="text-secondary-300 mb-6 leading-relaxed">
              Transform your business with our comprehensive suite of enterprise solutions. 
              We help organizations innovate, scale, and thrive in the digital age.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-secondary-300">
                <Phone className="w-4 h-4 text-primary-400" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-secondary-300">
                <Mail className="w-4 h-4 text-primary-400" />
                <span className="text-sm">contact@enterprise.com</span>
              </div>
              <div className="flex items-center space-x-3 text-secondary-300">
                <MapPin className="w-4 h-4 text-primary-400" />
                <span className="text-sm">123 Enterprise Ave, San Francisco, CA 94105</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4 mt-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-secondary-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <Briefcase className="w-5 h-5 mr-2 text-primary-400" />
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="flex items-center text-secondary-300 hover:text-primary-400 transition-colors duration-200 group"
                  >
                    <ChevronRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <Building className="w-5 h-5 mr-2 text-primary-400" />
              Industries
            </h3>
            <ul className="space-y-3">
              {footerLinks.industries.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="flex items-center text-secondary-300 hover:text-primary-400 transition-colors duration-200 group"
                  >
                    <ChevronRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="flex items-center text-secondary-300 hover:text-primary-400 transition-colors duration-200 group"
                  >
                    <ChevronRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-800">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-secondary-400 text-sm">
              © {new Date().getFullYear()} Enterprise Platform. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-secondary-400 hover:text-primary-400 text-sm transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

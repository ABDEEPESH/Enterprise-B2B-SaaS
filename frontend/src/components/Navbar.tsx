import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Menu,
  X,
  ChevronDown,
  Briefcase,
  Building,
  FileText,
  Shield,
  Code,
  Cloud,
  Palette,
  Lightbulb,
  TrendingUp,
  Heart,
  ShoppingCart,
  Truck,
  Brain,
  BookOpen,
  Users,
  Phone,
  Mail,
  MapPin,
} from 'lucide-react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
    setActiveDropdown(null)
  }, [location.pathname])

  const navLinks = [
    {
      name: 'Services',
      icon: Briefcase,
      dropdown: [
        { name: 'Strategy Consulting', href: '/services/strategy', icon: Lightbulb },
        { name: 'UI/UX Design', href: '/services/design', icon: Palette },
        { name: 'Development', href: '/services/development', icon: Code },
        { name: 'Cloud Solutions', href: '/services/cloud', icon: Cloud },
        { name: 'Security', href: '/services/security', icon: Shield },
      ],
    },
    {
      name: 'Industries',
      icon: Building,
      dropdown: [
        { name: 'FinTech', href: '/industries/fintech', icon: TrendingUp },
        { name: 'HealthTech', href: '/industries/healthtech', icon: Heart },
        { name: 'E-commerce', href: '/industries/ecommerce', icon: ShoppingCart },
        { name: 'Logistics', href: '/industries/logistics', icon: Truck },
        { name: 'AI & ML', href: '/industries/ai', icon: Brain },
      ],
    },
    {
      name: 'Resources',
      icon: FileText,
      dropdown: [
        { name: 'Blog', href: '/blog', icon: BookOpen },
        { name: 'Careers', href: '/careers', icon: Users },
        { name: 'Privacy Policy', href: '/privacy', icon: Shield },
        { name: 'Terms of Service', href: '/terms', icon: FileText },
      ],
    },
  ]

  const isActiveLink = (path: string) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-secondary-200'
          : 'bg-white/80 backdrop-blur-sm border-b border-secondary-100'
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 group"
            onClick={() => setActiveDropdown(null)}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 bg-gradient-to-br from-primary-600 to-accent-600 rounded-lg flex items-center justify-center shadow-lg"
            >
              <Briefcase className="w-6 h-6 text-white" />
            </motion.div>
            <span className="text-xl font-bold text-secondary-900 group-hover:text-primary-600 transition-colors">
              Enterprise
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative">
                <button
                  onMouseEnter={() => setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeDropdown === link.name
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-secondary-600 hover:text-primary-600 hover:bg-secondary-50'
                  }`}
                >
                  <link.icon className="w-4 h-4" />
                  <span>{link.name}</span>
                  <ChevronDown
                    className={`w-3 h-3 transition-transform duration-200 ${
                      activeDropdown === link.name ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      onMouseEnter={() => setActiveDropdown(link.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                      className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-secondary-200 overflow-hidden"
                    >
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.href}
                          to={item.href}
                          className={`flex items-center space-x-3 px-4 py-3 text-sm transition-all duration-200 ${
                            isActiveLink(item.href)
                              ? 'bg-primary-50 text-primary-600 border-l-4 border-primary-600'
                              : 'text-secondary-600 hover:bg-secondary-50 hover:text-secondary-900'
                          }`}
                        >
                          <item.icon className="w-4 h-4" />
                          <span>{item.name}</span>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            <div className="flex items-center space-x-4 pl-4 border-l border-secondary-200">
              <Link
                to="/about"
                className="text-sm font-medium text-secondary-600 hover:text-primary-600 transition-colors"
              >
                About
              </Link>
              <Link
                to="/pricing"
                className="text-sm font-medium text-secondary-600 hover:text-primary-600 transition-colors"
              >
                Pricing
              </Link>
              <Link
                to="/contact"
                className="btn-primary text-sm"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-secondary-600 hover:text-secondary-900 hover:bg-secondary-100 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-secondary-200"
          >
            <div className="container py-4 space-y-4">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <button
                    onClick={() =>
                      setActiveDropdown(activeDropdown === link.name ? null : link.name)
                    }
                    className="flex items-center justify-between w-full px-4 py-2 text-left text-sm font-medium text-secondary-600 hover:text-primary-600 hover:bg-secondary-50 rounded-lg transition-colors"
                  >
                    <div className="flex items-center space-x-2">
                      <link.icon className="w-4 h-4" />
                      <span>{link.name}</span>
                    </div>
                    <ChevronDown
                      className={`w-3 h-3 transition-transform duration-200 ${
                        activeDropdown === link.name ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="mt-2 ml-4 space-y-1"
                      >
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.href}
                            to={item.href}
                            className={`flex items-center space-x-3 px-4 py-2 text-sm rounded-lg transition-colors ${
                              isActiveLink(item.href)
                                ? 'bg-primary-50 text-primary-600'
                                : 'text-secondary-600 hover:bg-secondary-50'
                            }`}
                          >
                            <item.icon className="w-4 h-4" />
                            <span>{item.name}</span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              <div className="pt-4 border-t border-secondary-200 space-y-2">
                <Link
                  to="/about"
                  className="block px-4 py-2 text-sm font-medium text-secondary-600 hover:text-primary-600 hover:bg-secondary-50 rounded-lg transition-colors"
                >
                  About
                </Link>
                <Link
                  to="/pricing"
                  className="block px-4 py-2 text-sm font-medium text-secondary-600 hover:text-primary-600 hover:bg-secondary-50 rounded-lg transition-colors"
                >
                  Pricing
                </Link>
                <Link
                  to="/contact"
                  className="block mx-4 btn-primary text-center text-sm"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar

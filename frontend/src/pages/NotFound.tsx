import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Home, Search, ArrowLeft, RefreshCw } from 'lucide-react'
import AnimatedButton from '../components/AnimatedButton'

const NotFound = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          {/* 404 Animation */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="mb-8"
          >
            <div className="text-8xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              404
            </div>
          </motion.div>

          {/* Error Message */}
          <h1 className="text-3xl font-bold text-secondary-900 mb-4">
            Page Not Found
          </h1>
          
          <p className="text-xl text-secondary-600 mb-8 leading-relaxed">
            Oops! The page you're looking for seems to have vanished into the digital ether. 
            Let's get you back on track.
          </p>

          {/* Search Suggestions */}
          <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl p-6 mb-8">
            <h2 className="font-semibold text-secondary-900 mb-4">Maybe you were looking for:</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <Link to="/" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 transition-colors duration-200">
                <Home className="w-4 h-4" />
                Home Page
              </Link>
              <Link to="/about" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 transition-colors duration-200">
                <Search className="w-4 h-4" />
                About Us
              </Link>
              <Link to="/services/strategy" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 transition-colors duration-200">
                <Search className="w-4 h-4" />
                Our Services
              </Link>
              <Link to="/contact" className="flex items-center gap-2 text-primary-600 hover:text-primary-700 transition-colors duration-200">
                <Search className="w-4 h-4" />
                Contact Us
              </Link>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <AnimatedButton className="w-full sm:w-auto">
                <Home className="w-5 h-5 mr-2" />
                Go Home
              </AnimatedButton>
            </Link>
            
            <button
              onClick={() => window.history.back()}
              className="w-full sm:w-auto"
            >
              <AnimatedButton variant="outline" className="w-full sm:w-auto">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Go Back
              </AnimatedButton>
            </button>
          </div>

          {/* Help Section */}
          <div className="mt-12 text-center">
            <p className="text-secondary-600 mb-4">
              Still can't find what you're looking for?
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-secondary-500">
              <RefreshCw className="w-4 h-4" />
              <span>Try refreshing the page or contact our support team</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default NotFound

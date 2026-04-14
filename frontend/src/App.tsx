import { Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MasterLayout from './components/MasterLayout'

// Core Pages
import Home from './pages/Home'
import About from './pages/About'
import Process from './pages/Process'
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'

// Service Pages
import Strategy from './pages/services/Strategy'
import Design from './pages/services/Design'
import Development from './pages/services/Development'
import Cloud from './pages/services/Cloud'
import Security from './pages/services/Security'

// Industry Pages
import FinTech from './pages/industries/FinTech'
import HealthTech from './pages/industries/HealthTech'
import Ecommerce from './pages/industries/Ecommerce'
import Logistics from './pages/industries/Logistics'
import AI from './pages/industries/AI'

// Legal/Resources Pages
import BlogIndex from './pages/blog/BlogIndex'
import BlogPost from './pages/blog/BlogPost'
import Privacy from './pages/legal/Privacy'
import Terms from './pages/legal/Terms'
import Careers from './pages/legal/Careers'

// Utility Pages
import NotFound from './pages/NotFound'
import ThankYou from './pages/ThankYou'

function App() {
  return (
    <div className="min-h-screen bg-white text-secondary-900">
      <Routes>
        <Route path="/" element={<MasterLayout />}>
          {/* Core Pages */}
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="process" element={<Process />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="contact" element={<Contact />} />
          
          {/* Service Pages */}
          <Route path="services/strategy" element={<Strategy />} />
          <Route path="services/design" element={<Design />} />
          <Route path="services/development" element={<Development />} />
          <Route path="services/cloud" element={<Cloud />} />
          <Route path="services/security" element={<Security />} />
          
          {/* Industry Pages */}
          <Route path="industries/fintech" element={<FinTech />} />
          <Route path="industries/healthtech" element={<HealthTech />} />
          <Route path="industries/ecommerce" element={<Ecommerce />} />
          <Route path="industries/logistics" element={<Logistics />} />
          <Route path="industries/ai" element={<AI />} />
          
          {/* Legal/Resources Pages */}
          <Route path="blog" element={<BlogIndex />} />
          <Route path="blog/:slug" element={<BlogPost />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="careers" element={<Careers />} />
          
          {/* Utility Pages */}
          <Route path="thank-you" element={<ThankYou />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App

import { Routes, Route } from 'react-router-dom'
import { ModalProvider } from './context/ModalContext'
import { ThemeProvider } from './context/ThemeContext'
import MasterLayout from './components/MasterLayout'
import LeadCaptureModal from './components/LeadCaptureModal'

// Core Pages
import Home from './pages/Home'
import About from './pages/About'
import Process from './pages/Process'
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'

// Service Pages
import Services from './pages/services/Services'
import Strategy from './pages/services/Strategy'
import Design from './pages/services/Design'
import Development from './pages/services/Development'
import Cloud from './pages/services/Cloud'
import Security from './pages/services/Security'

// Industry Pages
import Industries from './pages/industries/Industries'
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
    <ThemeProvider>
      <ModalProvider>
        <div className="min-h-screen bg-white dark:bg-slate-900 text-secondary-900 dark:text-slate-100 transition-colors duration-300">
          <Routes>
            <Route path="/" element={<MasterLayout />}>
              {/* Core Pages */}
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="process" element={<Process />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="contact" element={<Contact />} />
              
              {/* Service Pages */}
              <Route path="services" element={<Services />} />
              <Route path="services/strategy" element={<Strategy />} />
              <Route path="services/design" element={<Design />} />
              <Route path="services/development" element={<Development />} />
              <Route path="services/cloud" element={<Cloud />} />
              <Route path="services/security" element={<Security />} />
              
              {/* Industry Pages */}
              <Route path="industries" element={<Industries />} />
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
          <LeadCaptureModal />
        </div>
      </ModalProvider>
    </ThemeProvider>
  )
}

export default App

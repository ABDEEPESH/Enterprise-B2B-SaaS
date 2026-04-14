import { motion } from 'framer-motion'
import { 
  Briefcase, 
  Users, 
  MapPin, 
  Clock, 
  DollarSign, 
  Heart,
  Rocket,
  Target,
  Lightbulb,
  Award
} from 'lucide-react'
import AnimatedButton from '../../components/AnimatedButton'

const Careers = () => {
  const openPositions = [
    {
      id: 1,
      title: "Senior Full-Stack Engineer",
      department: "Engineering",
      location: "San Francisco, CA / Remote",
      type: "Full-time",
      experience: "5+ years",
      salary: "$150,000 - $200,000",
      description: "Lead the development of our enterprise platform, architect scalable solutions, and mentor junior engineers.",
      requirements: [
        "Expertise in React, Node.js, and cloud technologies",
        "Experience with enterprise-scale applications",
        "Strong understanding of system design and architecture",
        "Excellent problem-solving and communication skills"
      ]
    },
    {
      id: 2,
      title: "Product Manager",
      department: "Product",
      location: "New York, NY",
      type: "Full-time",
      experience: "3+ years",
      salary: "$120,000 - $160,000",
      description: "Drive product strategy and roadmap for our B2B SaaS platform, working closely with engineering and design teams.",
      requirements: [
        "Experience in B2B SaaS product management",
        "Strong analytical and data-driven mindset",
        "Excellent cross-functional collaboration skills",
        "Understanding of enterprise software needs"
      ]
    },
    {
      id: 3,
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      experience: "4+ years",
      salary: "$130,000 - $170,000",
      description: "Build and maintain our cloud infrastructure, implement CI/CD pipelines, and ensure system reliability.",
      requirements: [
        "Expertise in AWS, Docker, and Kubernetes",
        "Experience with infrastructure as code (Terraform)",
        "Strong understanding of security best practices",
        "Experience with monitoring and observability tools"
      ]
    },
    {
      id: 4,
      title: "UX/UI Designer",
      department: "Design",
      location: "San Francisco, CA",
      type: "Full-time",
      experience: "3+ years",
      salary: "$110,000 - $150,000",
      description: "Create intuitive and beautiful user experiences for our enterprise platform, from concept to implementation.",
      requirements: [
        "Strong portfolio demonstrating enterprise design work",
        "Proficiency in Figma, Sketch, and design systems",
        "Understanding of user research and usability testing",
        "Ability to collaborate effectively with engineers"
      ]
    },
    {
      id: 5,
      title: "Sales Development Representative",
      department: "Sales",
      location: "Chicago, IL",
      type: "Full-time",
      experience: "1-2 years",
      salary: "$60,000 - $80,000 + Commission",
      description: "Generate qualified leads for our sales team, build relationships with prospects, and drive revenue growth.",
      requirements: [
        "Experience in B2B sales or lead generation",
        "Excellent communication and interpersonal skills",
        "Self-motivated with a results-driven mindset",
        "Familiarity with CRM software and sales tools"
      ]
    },
    {
      id: 6,
      title: "Data Scientist",
      department: "Analytics",
      location: "Remote",
      type: "Full-time",
      experience: "4+ years",
      salary: "$140,000 - $180,000",
      description: "Develop machine learning models and analytics solutions to drive insights and improve our platform.",
      requirements: [
        "Strong background in statistics and machine learning",
        "Experience with Python, R, and data visualization tools",
        "Understanding of big data technologies",
        "Ability to translate business needs into analytical solutions"
      ]
    }
  ]

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive medical, dental, and vision insurance with 100% premium coverage for employees."
    },
    {
      icon: DollarSign,
      title: "Financial Security",
      description: "Competitive salary, 401(k) with company match, stock options, and performance bonuses."
    },
    {
      icon: Clock,
      title: "Work-Life Balance",
      description: "Flexible work hours, unlimited PTO, remote work options, and generous parental leave."
    },
    {
      icon: Rocket,
      title: "Professional Growth",
      description: "Annual learning stipend, conference attendance, mentorship programs, and career development paths."
    },
    {
      icon: Users,
      title: "Team Culture",
      description: "Collaborative environment, team building events, and inclusive workplace initiatives."
    },
    {
      icon: Target,
      title: "Performance Recognition",
      description: "Regular performance reviews, achievement awards, and opportunities for advancement."
    }
  ]

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
              <Briefcase className="w-10 h-10 text-primary-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-secondary-600 dark:text-slate-300 leading-relaxed">
              Build the future of enterprise technology with a team that values innovation, 
              collaboration, and continuous growth. Your next career chapter starts here.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 text-sm text-secondary-600 dark:text-slate-300">
                <Users className="w-4 h-4" />
                <span>150+ Team Members</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-secondary-600 dark:text-slate-300">
                <MapPin className="w-4 h-4" />
                <span>Global Remote Team</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-secondary-600 dark:text-slate-300">
                <Award className="w-4 h-4" />
                <span>Best Places to Work 2024</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 bg-secondary-50 dark:bg-slate-800">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-secondary-900 dark:text-white mb-4">Why Join Enterprise Platform?</h2>
            <p className="text-secondary-600 dark:text-slate-300 max-w-2xl mx-auto">
              We're not just building software; we're transforming how businesses operate. 
              Join us in creating solutions that matter.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Lightbulb,
                title: "Innovation-Driven Culture",
                description: "Work on cutting-edge technologies and solve complex challenges that impact thousands of businesses worldwide."
              },
              {
                icon: Target,
                title: "Mission-Driven Work",
                description: "Contribute to products that help enterprises grow, optimize operations, and achieve their strategic goals."
              },
              {
                icon: Rocket,
                title: "Rapid Growth",
                description: "Be part of a fast-growing company with ample opportunities for career advancement and skill development."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="font-semibold text-secondary-900 dark:text-white mb-3">{item.title}</h3>
                <p className="text-secondary-600 dark:text-slate-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-secondary-900 dark:text-white mb-4">Comprehensive Benefits</h2>
            <p className="text-secondary-600 dark:text-slate-300 max-w-2xl mx-auto">
              We invest in our people with competitive compensation, comprehensive benefits, 
              and a culture that supports your personal and professional growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-slate-700 dark:to-slate-800 rounded-xl p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-900 dark:text-white mb-2">{benefit.title}</h3>
                    <p className="text-secondary-600 dark:text-slate-300 text-sm">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 bg-secondary-50 dark:bg-slate-800">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-secondary-900 dark:text-white mb-4">Open Positions</h2>
            <p className="text-secondary-600 dark:text-slate-300 max-w-2xl mx-auto">
              Explore our current openings and find the role that matches your skills and aspirations.
            </p>
          </motion.div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className="bg-white dark:bg-slate-800 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-2">{position.title}</h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-secondary-600 dark:text-slate-300">
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          {position.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {position.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {position.type}
                        </span>
                        <span className="flex items-center gap-1">
                          <DollarSign className="w-4 h-4" />
                          {position.salary}
                        </span>
                      </div>
                    </div>
                    <AnimatedButton variant="outline" size="sm">
                      Apply Now
                    </AnimatedButton>
                  </div>
                  
                  <p className="text-secondary-600 dark:text-slate-300 mb-4">{position.description}</p>
                  
                  <div className="border-t pt-4">
                    <h4 className="font-medium text-secondary-900 dark:text-white mb-2">Key Requirements:</h4>
                    <ul className="space-y-1">
                      {position.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="text-sm text-secondary-600 dark:text-slate-300 flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-secondary-600 dark:text-slate-300 mb-6">
              Don't see the perfect fit? We're always looking for talented people to join our team.
            </p>
            <AnimatedButton variant="outline">
              Send Us Your Resume
            </AnimatedButton>
          </div>
        </div>
      </section>

      {/* Our Culture */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 md:p-12 text-white"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Culture & Values</h2>
                <p className="text-white/90 mb-6 leading-relaxed">
                  At Enterprise Platform, we believe in fostering an environment where innovation 
                  thrives, collaboration is celebrated, and every team member can make a meaningful 
                  impact. Our culture is built on trust, transparency, and a shared commitment to excellence.
                </p>
                <div className="space-y-4">
                  {[
                    "Customer-first mindset in everything we do",
                    "Continuous learning and improvement",
                    "Diversity, equity, and inclusion",
                    "Sustainable and ethical business practices",
                    "Work-life integration and flexibility"
                  ].map((value, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-white dark:bg-slate-800 rounded-full" />
                      <span className="text-white/90">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white dark:bg-slate-800/10 backdrop-blur-sm rounded-xl p-8">
                <h3 className="text-xl font-semibold mb-6">Life at Enterprise Platform</h3>
                <div className="space-y-4">
                  <div className="bg-white dark:bg-slate-800/20 backdrop-blur-sm rounded-lg p-4">
                    <h4 className="font-medium mb-2">Team Events</h4>
                    <p className="text-white/80 text-sm">
                      Monthly team building activities, annual retreats, and regular social events.
                    </p>
                  </div>
                  <div className="bg-white dark:bg-slate-800/20 backdrop-blur-sm rounded-lg p-4">
                    <h4 className="font-medium mb-2">Learning & Development</h4>
                    <p className="text-white/80 text-sm">
                      Weekly tech talks, workshops, and access to online learning platforms.
                    </p>
                  </div>
                  <div className="bg-white dark:bg-slate-800/20 backdrop-blur-sm rounded-lg p-4">
                    <h4 className="font-medium mb-2">Innovation Time</h4>
                    <p className="text-white/80 text-sm">
                      Dedicated time for personal projects and experimentation with new technologies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-slate-700 dark:to-slate-800">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-secondary-900 dark:text-white mb-6">
              Ready to Shape the Future?
            </h2>
            <p className="text-xl text-secondary-600 dark:text-slate-300 mb-8">
              Join a team that's passionate about building innovative solutions that transform 
              how enterprises operate and grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AnimatedButton>
                View All Positions
              </AnimatedButton>
              <AnimatedButton variant="outline">
                Learn About Our Culture
              </AnimatedButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Careers

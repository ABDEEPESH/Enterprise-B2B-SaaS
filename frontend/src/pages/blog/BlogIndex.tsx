import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Calendar, Clock, User, ArrowRight, Search } from 'lucide-react'
import AnimatedButton from '../../components/AnimatedButton'

const blogPosts = [
  {
    id: 1,
    slug: 'future-of-enterprise-ai',
    title: 'The Future of Enterprise AI: Transforming Business Operations',
    excerpt: 'Explore how artificial intelligence is revolutionizing enterprise operations and creating new opportunities for growth and innovation.',
    author: 'Dr. Sarah Chen',
    date: '2024-04-10',
    readTime: '8 min read',
    category: 'AI & Machine Learning',
    image: '/api/placeholder/800/400'
  },
  {
    id: 2,
    slug: 'cloud-migration-best-practices',
    title: 'Cloud Migration Best Practices for Large Enterprises',
    excerpt: 'Learn the essential strategies and considerations for successful cloud migration in enterprise environments.',
    author: 'Michael Rodriguez',
    date: '2024-04-08',
    readTime: '12 min read',
    category: 'Cloud Computing',
    image: '/api/placeholder/800/400'
  },
  {
    id: 3,
    slug: 'cybersecurity-frameworks',
    title: 'Modern Cybersecurity Frameworks for Digital Transformation',
    excerpt: 'Discover the latest cybersecurity frameworks and strategies to protect your enterprise during digital transformation.',
    author: 'Jennifer Park',
    date: '2024-04-05',
    readTime: '10 min read',
    category: 'Security',
    image: '/api/placeholder/800/400'
  },
  {
    id: 4,
    slug: 'data-driven-decision-making',
    title: 'Building a Data-Driven Culture: From Insights to Action',
    excerpt: 'How to foster a data-driven culture that transforms business intelligence into competitive advantage.',
    author: 'Robert Thompson',
    date: '2024-04-02',
    readTime: '15 min read',
    category: 'Data Analytics',
    image: '/api/placeholder/800/400'
  },
  {
    id: 5,
    slug: 'microservices-architecture',
    title: 'Microservices Architecture: Scaling Enterprise Applications',
    excerpt: 'The complete guide to implementing microservices architecture for scalable and maintainable enterprise applications.',
    author: 'Alex Kumar',
    date: '2024-03-28',
    readTime: '11 min read',
    category: 'Software Architecture',
    image: '/api/placeholder/800/400'
  },
  {
    id: 6,
    slug: 'digital-transformation-roadmap',
    title: 'Your Digital Transformation Roadmap: A Strategic Approach',
    excerpt: 'A comprehensive framework for planning and executing successful digital transformation initiatives.',
    author: 'Emma Wilson',
    date: '2024-03-25',
    readTime: '9 min read',
    category: 'Digital Strategy',
    image: '/api/placeholder/800/400'
  }
]

const categories = ['All', 'AI & Machine Learning', 'Cloud Computing', 'Security', 'Data Analytics', 'Software Architecture', 'Digital Strategy']

const BlogIndex = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl font-bold text-secondary-900 mb-6">
              Enterprise Insights & Innovation
            </h1>
            <p className="text-xl text-secondary-600 mb-8 leading-relaxed">
              Explore cutting-edge perspectives on enterprise technology, digital transformation, 
              and industry trends from our expert team of consultants and engineers.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-secondary-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles, topics, or authors..."
                className="w-full pl-12 pr-4 py-4 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    category === 'All'
                      ? 'bg-primary-600 text-white'
                      : 'bg-white text-secondary-600 hover:bg-primary-50 border border-secondary-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 md:p-12 text-white"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                    Featured Article
                  </span>
                  <span className="text-white/80 text-sm">AI & Machine Learning</span>
                </div>
                <h2 className="text-3xl font-bold mb-4">
                  The Future of Enterprise AI: Transforming Business Operations
                </h2>
                <p className="text-white/90 mb-6 leading-relaxed">
                  Explore how artificial intelligence is revolutionizing enterprise operations and creating 
                  new opportunities for growth and innovation in today's competitive landscape.
                </p>
                <div className="flex items-center gap-6 mb-6 text-sm text-white/80">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Dr. Sarah Chen
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Apr 10, 2024
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    8 min read
                  </div>
                </div>
                <AnimatedButton variant="secondary" className="bg-white text-primary-600 hover:bg-white/90">
                  Read Full Article
                </AnimatedButton>
              </div>
              <div className="relative">
                <div className="aspect-video bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <ArrowRight className="w-8 h-8" />
                    </div>
                    <p className="text-white/80">Featured Image</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-secondary-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">Latest Insights</h2>
            <p className="text-secondary-600 max-w-2xl mx-auto">
              Stay updated with the latest trends, best practices, and innovations in enterprise technology.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
              >
                <div className="aspect-video bg-gradient-to-br from-primary-100 to-secondary-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ArrowRight className="w-12 h-12 text-primary-600 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-primary-600 bg-primary-50 px-2 py-1 rounded">
                      {post.category}
                    </span>
                    <span className="text-xs text-secondary-500">{post.readTime}</span>
                  </div>
                  
                  <Link to={`/blog/${post.slug}`}>
                    <h3 className="text-xl font-bold text-secondary-900 mb-3 group-hover:text-primary-600 transition-colors duration-200">
                      {post.title}
                    </h3>
                  </Link>
                  
                  <p className="text-secondary-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-secondary-500">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <AnimatedButton variant="outline" size="lg">
              Load More Articles
            </AnimatedButton>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center max-w-3xl mx-auto text-white"
          >
            <h2 className="text-3xl font-bold mb-4">
              Stay Ahead of the Curve
            </h2>
            <p className="text-white/90 mb-8">
              Get weekly insights on enterprise technology trends, best practices, and innovation delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-secondary-900 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <AnimatedButton variant="secondary" className="bg-white text-primary-600 hover:bg-white/90">
                Subscribe
              </AnimatedButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default BlogIndex

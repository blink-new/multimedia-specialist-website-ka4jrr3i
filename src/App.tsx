import { useState } from 'react'
import { Button } from './components/ui/button'
import { Card, CardContent } from './components/ui/card'
import { Badge } from './components/ui/badge'
import { Camera, Video, Brain, ArrowRight, Play, Calendar, User, ExternalLink } from 'lucide-react'

function App() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  const services = [
    {
      icon: Camera,
      title: "Photography",
      description: "Professional photography services for events, portraits, products, and commercial projects.",
      features: ["Event Photography", "Portrait Sessions", "Product Photography", "Commercial Shoots"]
    },
    {
      icon: Video,
      title: "Videography", 
      description: "High-quality video production from concept to final edit for all your multimedia needs.",
      features: ["Corporate Videos", "Event Coverage", "Promotional Content", "Documentary Style"]
    },
    {
      icon: Brain,
      title: "AI Development",
      description: "Custom AI solutions and automation tools to streamline your business processes.",
      features: ["Machine Learning", "Process Automation", "Custom AI Tools", "Data Analysis"]
    }
  ]

  const portfolioItems = [
    {
      type: "Photography",
      title: "Corporate Event Series",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop",
      category: "Events"
    },
    {
      type: "Videography", 
      title: "Brand Documentary",
      image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&h=400&fit=crop",
      category: "Commercial"
    },
    {
      type: "AI Development",
      title: "Automated Workflow System",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
      category: "Technology"
    },
    {
      type: "Photography",
      title: "Product Showcase",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
      category: "Product"
    },
    {
      type: "Videography",
      title: "Startup Pitch Video",
      image: "https://images.unsplash.com/photo-1551818255-e6e10975cd17?w=600&h=400&fit=crop",
      category: "Startup"
    },
    {
      type: "AI Development",
      title: "Computer Vision App",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
      category: "AI/ML"
    }
  ]

  const projects = [
    {
      title: "TechCorp Annual Conference",
      description: "Complete multimedia coverage including photography, videography, and live streaming for a 3-day tech conference with 500+ attendees.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop",
      tags: ["Photography", "Videography", "Live Streaming"],
      client: "TechCorp Industries",
      year: "2024"
    },
    {
      title: "AI-Powered Inventory System",
      description: "Custom machine learning solution that automated inventory management, reducing manual work by 80% and improving accuracy.",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop",
      tags: ["AI Development", "Machine Learning", "Automation"],
      client: "RetailMax",
      year: "2024"
    },
    {
      title: "Luxury Brand Campaign",
      description: "High-end photography and video production for luxury fashion brand's seasonal campaign across multiple platforms.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
      tags: ["Photography", "Videography", "Creative Direction"],
      client: "Luxe Fashion",
      year: "2023"
    }
  ]

  const blogPosts = [
    {
      title: "The Future of AI in Creative Industries",
      excerpt: "Exploring how artificial intelligence is revolutionizing photography, videography, and creative workflows in 2024.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
      date: "March 15, 2024",
      author: "Alex Chen",
      readTime: "5 min read",
      category: "AI & Technology"
    },
    {
      title: "Essential Photography Tips for Business Events",
      excerpt: "Professional techniques for capturing compelling corporate events that tell your brand's story effectively.",
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&h=250&fit=crop",
      date: "March 8, 2024",
      author: "Alex Chen",
      readTime: "7 min read",
      category: "Photography"
    },
    {
      title: "Video Marketing Trends That Drive Results",
      excerpt: "Latest video marketing strategies and production techniques that are generating real ROI for businesses.",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=250&fit=crop",
      date: "February 28, 2024",
      author: "Alex Chen",
      readTime: "6 min read",
      category: "Videography"
    }
  ]

  return (
    <div className="min-h-screen bg-[#0F0F23] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0F0F23]/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-black gradient-text">
              MULTIMEDIA
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="hover:text-accent transition-colors">Services</a>
              <a href="#portfolio" className="hover:text-accent transition-colors">Portfolio</a>
              <a href="#projects" className="hover:text-accent transition-colors">Projects</a>
              <a href="#blog" className="hover:text-accent transition-colors">Blog</a>
              <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
            </div>
            <Button className="bg-accent text-black hover:bg-accent/90 font-semibold">
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            <span className="gradient-text">MULTIMEDIA</span><br />
            <span className="text-white">SPECIALIST</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Professional photography, videography, and AI development services for businesses of all sizes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 text-lg purple-glow">
              View Portfolio
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-black font-semibold px-8 py-4 text-lg">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              <span className="gradient-text">SERVICES</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive multimedia solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-white/5 border-white/10 card-hover backdrop-blur-sm">
                <CardContent className="p-8">
                  <service.icon className="h-12 w-12 text-accent mb-6" />
                  <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              <span className="gradient-text">PORTFOLIO</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A showcase of our recent work across photography, videography, and AI development
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg card-hover">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge className="bg-accent text-black mb-2">{item.type}</Badge>
                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                    <p className="text-sm text-gray-300">{item.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                <span className="gradient-text">ABOUT</span>
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                With over a decade of experience in multimedia production and cutting-edge AI development, 
                I help businesses tell their stories through powerful visual content and innovative technology solutions.
              </p>
              <p className="text-gray-400 mb-8">
                From intimate startup launches to large-scale corporate events, I bring the same level of 
                professionalism and creative vision to every project. My unique combination of artistic 
                expertise and technical innovation ensures your brand stands out in today's competitive landscape.
              </p>
              <Button className="bg-primary hover:bg-primary/90 text-white font-semibold">
                Learn More About Me
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="relative">
              <div className="relative rounded-lg overflow-hidden purple-glow">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop" 
                  alt="About"
                  className="w-full h-80 object-cover"
                />
                {!isVideoPlaying && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <Button 
                      size="lg"
                      className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border-white/30"
                      onClick={() => setIsVideoPlaying(true)}
                    >
                      <Play className="h-6 w-6 mr-2" />
                      Watch Story
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              <span className="gradient-text">FEATURED PROJECTS</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Highlighting some of our most impactful work and successful collaborations
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-white/5 border-white/10 card-hover backdrop-blur-sm overflow-hidden">
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-black/50 text-white border-white/20">
                      {project.year}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <Badge key={idx} variant="outline" className="border-accent/30 text-accent text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">{project.client}</span>
                    <Button size="sm" variant="ghost" className="text-accent hover:text-accent/80">
                      View Details
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              <span className="gradient-text">LATEST INSIGHTS</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Industry insights, tips, and trends from the world of multimedia and AI
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="bg-white/5 border-white/10 card-hover backdrop-blur-sm overflow-hidden">
                <div className="relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-accent text-black">
                      {post.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-white leading-tight">{post.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                    <div className="flex items-center">
                      <User className="h-3 w-3 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {post.date}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">{post.readTime}</span>
                    <Button size="sm" variant="ghost" className="text-accent hover:text-accent/80">
                      Read More
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <span className="gradient-text">LET'S CREATE</span><br />
            <span className="text-white">SOMETHING AMAZING</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Ready to elevate your brand with professional multimedia services? 
            Let's discuss your project and bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent text-black hover:bg-accent/90 font-semibold px-8 py-4 text-lg neon-glow">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-4 text-lg">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="text-2xl font-black gradient-text mb-4">
                MULTIMEDIA SPECIALIST
              </div>
              <p className="text-gray-400 max-w-md">
                Professional multimedia services combining artistic vision with cutting-edge technology 
                to help businesses tell their stories effectively.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Photography</li>
                <li>Videography</li>
                <li>AI Development</li>
                <li>Consulting</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Portfolio</li>
                <li>Blog</li>
                <li>Contact</li>
                <li>LinkedIn</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Multimedia Specialist. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
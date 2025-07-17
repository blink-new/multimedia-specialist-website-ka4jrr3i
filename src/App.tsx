import { useState, useEffect } from 'react'
import { Button } from './components/ui/button'
import { Card, CardContent } from './components/ui/card'
import { Badge } from './components/ui/badge'
import { 
  Sun, 
  Moon, 
  UserCircle, 
  Sparkles, 
  LayoutGrid, 
  Globe, 
  Cpu, 
  Film, 
  Bot, 
  Wrench, 
  Briefcase, 
  Linkedin, 
  Instagram, 
  Youtube, 
  Mail, 
  Heart 
} from 'lucide-react'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  useEffect(() => {
    // Set initial theme
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true)
      document.documentElement.classList.add('dark')
    } else {
      setIsDarkMode(false)
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDarkMode
    setIsDarkMode(newTheme)
    
    if (newTheme) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  const skills = [
    {
      icon: Film,
      title: "Multimedia",
      description: "Video Editing, Cinematic Camera Work, Motion Graphics, Color Grading."
    },
    {
      icon: Bot,
      title: "AI & Automation", 
      description: "Generative AI (Image/Video/Text), Prompt Engineering, AI Agent Creation."
    },
    {
      icon: Wrench,
      title: "Tools of the Trade",
      description: "Premiere Pro, DaVinci Resolve, Langflow, Stable Diffusion, Lightroom."
    }
  ]

  const experiences = [
    {
      title: "Multimedia Specialist",
      company: "SFC Plus, Abu Dhabi",
      period: "Feb 2024 - Present",
      description: "Produced AI-enhanced photo/video content for restaurant brands and implemented social media automation, improving engagement by 20%.",
      current: true
    },
    {
      title: "Videographer & Photographer",
      company: "Maven Events, Abu Dhabi", 
      period: "Sep 2022 - Jan 2024",
      description: "Created branded visual campaigns for corporate events, integrating AI workflows into production processes for enhanced efficiency."
    },
    {
      title: "Multimedia Creator",
      company: "Royal Swiss Auto Services, Abu Dhabi",
      period: "Jan 2022 - Sep 2022", 
      description: "Developed dynamic reels for luxury automotive brands and managed content pipelines using Wrike and Google Workspace."
    },
    {
      title: "Freelance Visual Creator",
      company: "Kerala, India",
      period: "Aug 2020 - Dec 2021",
      description: "Leveraged AI for footage repurposing, achieving a 30% increase in engagement for various clients."
    }
  ]

  const portfolioItems = [
    {
      title: "Royal Swiss Auto",
      description: "Dynamic reels for luxury automotive brands. (Replace with your video)",
      videoId: "LXb3EKWsInQ"
    },
    {
      title: "Maven Events", 
      description: "Cinematic event coverage. (Replace with your video)",
      videoId: "LXb3EKWsInQ"
    },
    {
      title: "SFC Plus",
      description: "AI-powered video production for F&B brands. (Replace with your video)",
      videoId: "LXb3EKWsInQ"
    }
  ]

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 transition-colors duration-300">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-xl font-bold text-slate-800 dark:text-white">
            Yadu Krishnan
          </a>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#about" className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">About</a>
            <a href="#experience" className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">Experience</a>
            <a href="#portfolio" className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">Portfolio</a>
            <a href="#contact" className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">Contact</a>
          </nav>
          <Button
            onClick={toggleTheme}
            variant="ghost"
            size="sm"
            className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8 md:py-16">
        {/* Hero Section */}
        <section className="text-center">
          <img 
            src="https://placehold.co/160x160/1f2937/ffffff?text=YK" 
            alt="Yadu Krishnan K S Avatar" 
            className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full object-cover mb-6 ring-4 ring-offset-4 ring-offset-slate-50 dark:ring-offset-slate-900 ring-cyan-500 shadow-lg"
          />
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-2">
            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
              Yadu Krishnan K S
            </span>
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-slate-600 dark:text-slate-400 mb-6">
            Creative Multimedia Specialist & AI Integration Expert
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-slate-500 dark:text-slate-400 mb-8">
            Blending cinematic multimedia with cutting-edge AI workflows to produce stunning visual content that drives engagement. Based in Abu Dhabi, UAE.
          </p>
          <Button 
            className="bg-cyan-500 hover:bg-blue-500 focus:ring-4 focus:ring-cyan-500/50 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore My Work
          </Button>
        </section>

        {/* About Section */}
        <section id="about" className="my-24 scroll-mt-20">
          <Card className="bg-white dark:bg-slate-800 p-8 shadow-md">
            <CardContent className="p-0">
              <h2 className="text-3xl font-bold mb-6 text-slate-800 dark:text-white flex items-center">
                <UserCircle className="mr-3 text-cyan-500 h-8 w-8" />
                About Me
              </h2>
              <div className="space-y-4 text-lg">
                <p>
                  With over 6 years of experience, I specialize in creating compelling multimedia content enhanced by generative AI technologies. Based in Abu Dhabi, I bring international expertise across F&B, automotive, and corporate sectors, delivering innovative visual storytelling and automation solutions.
                </p>
                <p className="font-semibold text-slate-800 dark:text-slate-200">Key Differentiators:</p>
                <ul className="list-none space-y-2">
                  <li className="flex items-start">
                    <Sparkles className="w-5 h-5 mr-3 mt-1 text-cyan-500 flex-shrink-0" />
                    <span><strong className="font-semibold">AI-Enhanced Workflows:</strong> Automated content creation with generative AI.</span>
                  </li>
                  <li className="flex items-start">
                    <LayoutGrid className="w-5 h-5 mr-3 mt-1 text-cyan-500 flex-shrink-0" />
                    <span><strong className="font-semibold">Cross-Platform Expertise:</strong> F&B, automotive, fashion, and tourism.</span>
                  </li>
                  <li className="flex items-start">
                    <Globe className="w-5 h-5 mr-3 mt-1 text-cyan-500 flex-shrink-0" />
                    <span><strong className="font-semibold">International Experience:</strong> Deep understanding of the UAE market.</span>
                  </li>
                  <li className="flex items-start">
                    <Cpu className="w-5 h-5 mr-3 mt-1 text-cyan-500 flex-shrink-0" />
                    <span><strong className="font-semibold">Technical Innovation:</strong> Custom AI assistants and automation pipelines.</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>
        
        {/* Skills Section */}
        <section id="skills" className="my-24 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8 text-center text-slate-800 dark:text-white">Core Competencies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <Card key={index} className="bg-white dark:bg-slate-800 shadow-md text-center">
                <CardContent className="p-6">
                  <skill.icon className="mx-auto w-12 h-12 mb-4 text-cyan-500" />
                  <h3 className="text-xl font-bold mb-3 text-slate-800 dark:text-white">{skill.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400">{skill.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="my-24 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-800 dark:text-white">Career Journey</h2>
          <div className="relative border-l-2 border-cyan-500/50 dark:border-cyan-500/30 ml-6">
            {experiences.map((exp, index) => (
              <div key={index} className="mb-10 ml-10">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-cyan-500 rounded-full -left-3 ring-8 ring-white dark:ring-slate-900">
                  <Briefcase className="w-4 h-4 text-white" />
                </span>
                <h3 className="flex items-center mb-1 text-lg font-semibold text-slate-900 dark:text-white">
                  {exp.title}
                  {exp.current && (
                    <Badge className="bg-cyan-500/10 text-cyan-500 text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3">
                      Present
                    </Badge>
                  )}
                </h3>
                <p className="block mb-2 text-sm font-normal leading-none text-slate-500 dark:text-slate-400">
                  {exp.company} | {exp.period}
                </p>
                <p className="text-base font-normal text-slate-600 dark:text-slate-300">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="my-24 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8 text-center text-slate-800 dark:text-white">Featured Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <Card key={index} className="bg-white dark:bg-slate-800 shadow-md overflow-hidden group">
                <div className="aspect-video">
                  <iframe 
                    className="w-full h-full" 
                    src={`https://www.youtube.com/embed/${item.videoId}`}
                    title={`${item.title} Portfolio Video`}
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  />
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-slate-800 dark:text-white mb-2">{item.title}</h4>
                  <p className="text-slate-600 dark:text-slate-400">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="my-24 scroll-mt-20">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-slate-800 dark:text-white">Let's Create Together</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
              Have a project in mind or want to talk about AI in media? Reach out!
            </p>
            <Card className="bg-white dark:bg-slate-800 shadow-md">
              <CardContent className="p-8">
                <form className="space-y-6 text-left" action="https://formspree.io/f/your-id" method="POST">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                        Name
                      </label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        placeholder="Your Name" 
                        required 
                        className="w-full px-4 py-2 bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none text-slate-900 dark:text-slate-100" 
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                        Email
                      </label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder="your.email@example.com" 
                        required 
                        className="w-full px-4 py-2 bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none text-slate-900 dark:text-slate-100" 
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Message
                    </label>
                    <textarea 
                      id="message" 
                      name="message" 
                      placeholder="Tell me about your project..." 
                      rows={5} 
                      required 
                      className="w-full px-4 py-2 bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none text-slate-900 dark:text-slate-100"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-cyan-500 hover:bg-blue-500 focus:ring-4 focus:ring-cyan-500/50 text-white font-bold py-3 px-8 shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-100 dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700">
        <div className="container mx-auto px-6 py-8 text-center">
          <div className="flex justify-center space-x-6 mb-6">
            <a 
              href="https://linkedin.com/in/yadu" 
              aria-label="LinkedIn" 
              className="text-slate-500 hover:text-blue-500 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
            >
              <Linkedin className="w-7 h-7" />
            </a>
            <a 
              href="https://instagram.com/yadu" 
              aria-label="Instagram" 
              className="text-slate-500 hover:text-blue-500 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
            >
              <Instagram className="w-7 h-7" />
            </a>
            <a 
              href="https://youtube.com/yadu" 
              aria-label="YouTube" 
              className="text-slate-500 hover:text-blue-500 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
            >
              <Youtube className="w-7 h-7" />
            </a>
            <a 
              href="mailto:contact@yadu.com" 
              aria-label="Email" 
              className="text-slate-500 hover:text-blue-500 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
            >
              <Mail className="w-7 h-7" />
            </a>
          </div>
          <p className="text-slate-500 dark:text-slate-400">
            &copy; {new Date().getFullYear()} Yadu Krishnan K S. All Rights Reserved.
          </p>
          <p className="text-sm text-slate-400 dark:text-slate-500 mt-2">
            Built with <Heart className="inline-block w-4 h-4 text-red-500" /> and Tailwind CSS in Abu Dhabi
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
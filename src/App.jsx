import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Download,
  ExternalLink,
  ChevronDown,
  Menu,
  X,
  Settings,
  Cpu,
  Zap,
  Code,
  Wrench
} from 'lucide-react'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'experience', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const projects = [
    {
      id: 1,
      title: "Automated Assembly Line Integration",
      description: "Integrated robotic arms into an automated assembly line, improving production efficiency by 35% and reducing defect rates.",
      image: "/api/placeholder/600/400",
      technologies: ["PLC Programming", "Robotics", "SCADA", "HMI"],
      category: "Manufacturing Automation"
    },
    {
      id: 2,
      title: "Smart Factory IoT Implementation",
      description: "Developed IoT-based monitoring system for real-time production tracking and predictive maintenance.",
      image: "/api/placeholder/600/400",
      technologies: ["IoT", "Python", "InfluxDB", "Grafana"],
      category: "Process Control"
    },
    {
      id: 3,
      title: "Collaborative Robot Safety System",
      description: "Designed and implemented safety systems for collaborative robots in human-robot shared workspaces.",
      image: "/api/placeholder/600/400",
      technologies: ["Safety PLCs", "Vision Systems", "Risk Assessment", "ISO 10218"],
      category: "Robotics Integration"
    }
  ]

  const skills = [
    {
      category: "Programming Languages",
      items: [
        { name: "Python", level: 90 },
        { name: "C++", level: 85 },
        { name: "Ladder Logic", level: 95 },
        { name: "JavaScript", level: 80 }
      ]
    },
    {
      category: "Control Systems",
      items: [
        { name: "Allen-Bradley", level: 70 },
        { name: "Siemens", level: 100 },
        { name: "SCADA/HMI", level: 100 },
        { name: "Motion Control", level: 85 }
      ]
    },
    {
      category: "Robotics",
      items: [
        { name: "Fanuc Robots", level: 90 },
        { name: "KUKA", level: 85 },
        { name: "ABB Robots", level: 88 },
        { name: "ROS", level: 75 }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-[#1a1d29] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#1a1d29]/90 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-white">
              John Smith
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Projects', 'Skills', 'Experience', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-[#3b82f6] ${
                    activeSection === item.toLowerCase() ? 'text-[#3b82f6]' : 'text-gray-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#2d3142] border-t border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['Home', 'About', 'Projects', 'Skills', 'Experience', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-md w-full text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-[#3b82f6]/20 to-transparent"></div>
          <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-white/20 rounded-full"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-white/20 rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            John Smith
            <br />
            <span className="text-[#3b82f6]">Industrial Automation</span>
            <br />
            <span className="text-[#f97316]">& Robotics Engineer</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Bridging Hardware and Software for Next-Generation Manufacturing Solutions
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-[#3b82f6] hover:bg-[#2563eb] text-white px-8 py-3 text-lg"
            >
              Get in Touch
            </Button>
            <Button 
              variant="outline" 
              className="border-white/20 text-white hover:bg-white/10 px-8 py-3 text-lg"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6 mt-8">
            <div className="flex items-center space-x-2 text-gray-300">
              <Settings className="h-5 w-5 text-[#3b82f6]" />
              <span>PLC Programming</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300">
              <Cpu className="h-5 w-5 text-[#f97316]" />
              <span>Robotics</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300">
              <Code className="h-5 w-5 text-[#10b981]" />
              <span>Software Development</span>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-[#2d3142]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Passionate about creating intelligent automation solutions that transform manufacturing processes
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-[#3b82f6]">Professional Journey</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                With over 15 years of experience in industrial automation and robotics, I specialize in designing and implementing 
                comprehensive automation solutions that bridge the gap between hardware and software systems. My expertise spans 
                from PLC programming and SCADA development to advanced robotics integration and IoT implementations.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I have successfully led projects that resulted in significant improvements in production efficiency, quality control, 
                and operational safety across various industries including automotive, and food processing.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center p-4 bg-[#1a1d29] rounded-lg">
                  <div className="text-2xl font-bold text-[#3b82f6]">50+</div>
                  <div className="text-sm text-gray-300">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-[#1a1d29] rounded-lg">
                  <div className="text-2xl font-bold text-[#f97316]">8+</div>
                  <div className="text-sm text-gray-300">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-[#1a1d29] rounded-lg">
                  <div className="text-2xl font-bold text-[#10b981]">15+</div>
                  <div className="text-sm text-gray-300">Certifications</div>
                </div>
                <div className="text-center p-4 bg-[#1a1d29] rounded-lg">
                  <div className="text-2xl font-bold text-[#f59e0b]">35%</div>
                  <div className="text-sm text-gray-300">Avg. Efficiency Gain</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6 text-[#3b82f6]">Core Competencies</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Settings className="h-6 w-6 text-[#3b82f6]" />
                  <div>
                    <h4 className="font-semibold">Control Systems Design</h4>
                    <p className="text-sm text-gray-300">PLC programming, SCADA development, HMI design</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Cpu className="h-6 w-6 text-[#f97316]" />
                  <div>
                    <h4 className="font-semibold">Robotics Integration</h4>
                    <p className="text-sm text-gray-300">Industrial robots, collaborative systems, safety implementation</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Code className="h-6 w-6 text-[#10b981]" />
                  <div>
                    <h4 className="font-semibold">Software Development</h4>
                    <p className="text-sm text-gray-300">Python, C#, web applications, database design</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Wrench className="h-6 w-6 text-[#f59e0b]" />
                  <div>
                    <h4 className="font-semibold">Project Management</h4>
                    <p className="text-sm text-gray-300">Cross-functional teams and system integration</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-[#1a1d29]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Showcasing innovative automation solutions that drive efficiency and innovation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="bg-[#2d3142] border-white/10 hover:border-[#3b82f6]/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="aspect-video bg-gradient-to-br from-[#3b82f6]/20 to-[#f97316]/20 rounded-t-lg flex items-center justify-center">
                  <div className="text-4xl">🤖</div>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary" className="bg-[#3b82f6]/20 text-[#3b82f6] border-[#3b82f6]/30">
                      {project.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-white">{project.title}</CardTitle>
                  <CardDescription className="text-gray-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <Badge 
                        key={index} 
                        variant="outline" 
                        className="border-white/20 text-gray-300 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full border-[#3b82f6]/50 text-[#3b82f6] hover:bg-[#3b82f6]/10"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-[#2d3142]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Technical Skills</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive expertise across the automation technology stack
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillCategory, categoryIndex) => (
              <Card key={categoryIndex} className="bg-[#1a1d29] border-white/10">
                <CardHeader>
                  <CardTitle className="text-white text-center">{skillCategory.category}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {skillCategory.items.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-[#3b82f6]">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-[#3b82f6] to-[#f97316] h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-[#1a1d29]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Professional Experience</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Career progression in industrial automation and robotics engineering
            </p>
          </div>
          
          <div className="space-y-8">
            <Card className="bg-[#2d3142] border-white/10">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-white">Automation Engineer</CardTitle>
                    <CardDescription className="text-[#3b82f6]">ExMachina Engenharia e Robótica</CardDescription>
                  </div>
                  <Badge className="bg-[#10b981]/20 text-[#10b981] border-[#10b981]/30">
                    2020 - Present
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Automation engineer consultant responsible for designing and implementing complex manufacturing automation systems. 
                  Manage cross-functional teams and coordinate with vendors for large-scale integration projects.
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Led implementation of automated assembly line resulting in 35% efficiency improvement</li>
                  <li>Designed safety systems for collaborative robot installations</li>
                  <li>Developed custom SCADA applications for real-time production monitoring</li>
                  <li>Mentored junior engineers and established best practices for PLC programming</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-[#2d3142] border-white/10">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-white">Automation Engineer</CardTitle>
                    <CardDescription className="text-[#3b82f6]">Sogefi Suspension Brasil LTDA</CardDescription>
                  </div>
                  <Badge className="bg-[#f97316]/20 text-[#f97316] border-[#f97316]/30">
                    2018 - 2020
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Developed and maintained automation systems for automotive industry. 
                  Specialized in regulatory compliance and validation procedures.
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Implemented FDA-compliant automation systems for pharmaceutical production</li>
                  <li>Reduced system downtime by 25% through predictive maintenance programs</li>
                  <li>Designed HMI interfaces for operator training and system monitoring</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#2d3142]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to discuss your next automation project? Let's connect and explore how we can work together.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-[#3b82f6]">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-6 w-6 text-[#3b82f6]" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-300">carlos.tofanim@exmachina.eng.br</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="h-6 w-6 text-[#3b82f6]" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-gray-300">+55 (19) 99617-6789</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <MapPin className="h-6 w-6 text-[#3b82f6]" />
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-gray-300">Campinas - São Paulo, Brazil</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">Professional Links</h4>
                <div className="flex space-x-4">
                  <Button variant="outline" size="icon" className="border-white/20 text-white hover:bg-white/10">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="border-white/20 text-white hover:bg-white/10">
                    <Github className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
            
            <Card className="bg-[#1a1d29] border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Send a Message</CardTitle>
                <CardDescription className="text-gray-300">
                  I'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3b82f6]"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3b82f6]"
                    placeholder="carlos.tofanim@exmachina.eng.br"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3b82f6]"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <Button className="w-full bg-[#3b82f6] hover:bg-[#2563eb] text-white">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1d29] border-t border-white/10 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-300">
            <p>&copy; 2025 Carlos E. Tofanim. All rights reserved.</p>
            <p className="mt-2 text-sm">Industrial Automation & Robotics Engineer</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App


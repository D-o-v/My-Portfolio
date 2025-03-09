'use client'

import { useState } from 'react'
import { FaExternalLinkAlt, FaCode, FaIcons, FaTimes, FaLock, FaGlobe, FaServer, FaDesktop, FaShoppingCart, FaUtensils, FaComments, FaMoneyBillWave, FaClipboardCheck, FaUserShield, FaCreditCard, FaFilm } from 'react-icons/fa'
import AnimatedBackground from '../components/AnimatedBackground'
import Image from 'next/image'

interface Project {
  title: string
  description: string
  technologies: string[]
  link?: string
  sourceCode?: string
  icon: any
  type: 'open' | 'private'
  fullDescription: string
  role: string
  company?: string
  year: string
  images?: string[]
}

const projects: Project[] = [
  {
    title: 'Your Personal Finance Girl',
    description: 'Financial management application with budgeting and expense tracking',
    technologies: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Chart.js'],
    link: 'https://ypfg.onrender.com',
    type: 'open',
    icon: FaMoneyBillWave,
    fullDescription: 'Developed a personal finance management application that helps users track expenses, create budgets, and visualize spending patterns. The application features customizable budget categories, expense tracking with receipt scanning, goal setting functionality, and interactive charts for financial analysis. Implemented secure authentication and data protection measures to ensure sensitive financial information remains private.',
    role: 'Frontend Developer',
    year: '2025',
    images: ['/asset/ypfg1.png', '/asset/ypfg2.png']
  },
  
  {
    title: 'Office Food Ordering App',
    description: 'Internal platform for coordinating office meal orders',
    technologies: ['React', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    link: 'https://foodorderingap.netlify.app',
    // sourceCode: 'https://github.com/d-o-v/food-ordering-app',
    type: 'open',
    icon: FaUtensils,
    fullDescription: 'Designed and built an internal application used for collating and processing food orders within the office environment. The application streamlines the lunch ordering process, allowing employees to browse menus, place orders, and track delivery status. Features include group ordering capabilities, payment splitting functionality, and integration with local restaurant menus. Implemented an admin dashboard for order management and reporting that simplified the reconciliation process.',
    role: 'Full Stack Developer',
    year: '2024',
    images: ['/asset/officedelivery1.png', '/asset/officedelivery2.png']
  },
  {
    title: 'Performance Management Solution',
    description: 'Intuitive staff appraisal workflow system with real-time feedback',
    technologies: ['React', 'Tailwind CSS', 'WebSocket', 'Redux'],
    type: 'private',
    icon: FaClipboardCheck,
    fullDescription: 'Architected and implemented the frontend of a performance management portal using React, improving staff appraisal workflow efficiency. Created an intuitive user interface that streamlined the evaluation process and made it easier for managers to provide feedback. The solution included real-time notifications, customizable assessment forms, and comprehensive dashboards for tracking team performance.',
    role: 'Frontend Developer',
    //company: 'Innovative Ops Solutions (Seconded to UBA)',
    year: '2024',
    images: ['/performance-portal-1.png', '/performance-portal-2.png']
  },
  {
    title: 'Self-Service Portal',
    description: 'Responsive portal with real-time updates and modern UI components',
    technologies: ['React', 'TypeScript', 'Redux', 'Tailwind CSS'],
    type: 'private',
    icon: FaUserShield,
    fullDescription: 'Developed a responsive self-service portal using React, featuring real-time updates and modern UI components, resulting in improved user satisfaction and reduced support tickets. The portal allowed users to manage their accounts, submit requests, and track service status without requiring direct support intervention. Implemented comprehensive state management with Redux and built reusable component libraries that accelerated development across multiple projects.',
    role: 'Frontend Developer',
    //company: 'Innovative Ops Solutions (Seconded to UBA)',
    year: '2023',
    images: ['/self-service-1.png', '/self-service-2.png']
  },
  {
    title: 'Payment Gateway System',
    description: 'Secure payment processing solution with multiple integration options',
    technologies: ['.NET Core', 'React', 'SQL Server', 'Redis'],
    type: 'private',
    icon: FaCreditCard,
    fullDescription: 'Contributed to the development of a secure payment processing system that supports multiple payment methods and integrates with various e-commerce platforms. The system features fraud detection algorithms, transaction monitoring, automated reconciliation, and comprehensive reporting tools. Implemented encryption and security measures that ensure compliance with PCI DSS standards while maintaining a seamless user experience.',
    role: 'Full Stack Developer',
    company: 'Innovative Ops Solutions',
    year: '2023',
    images: ['/payment-gateway-1.png', '/payment-gateway-2.png']
  },
  {
    title: 'OFXpress Delivery System',
    description: 'Logistics platform for package tracking and delivery management',
    technologies: ['React', 'Node.js', 'MongoDB', 'Google Maps API'],
    link: 'https://ofxpress.com',
    type: 'private',
    icon: FaShoppingCart,
    fullDescription: 'Contributed to the development of a comprehensive delivery management system that enables real-time package tracking, route optimization, and delivery scheduling. The platform includes features for managing delivery personnel, optimizing delivery routes, tracking packages in real-time, and providing customers with accurate delivery estimates. Implemented integration with Google Maps API for route visualization and optimized dispatch planning.',
    role: 'Frontend Developer',
    // company: 'Momas Consulting',
    year: '2024',
    images: ['/ofxpress-1.png', '/ofxpress-2.png']
  },
  {
    title: 'Insurance Claims Portal',
    description: 'Comprehensive claims interface with complex form validations',
    technologies: ['React', 'Tailwind CSS', 'Redux', 'TypeScript'],
    type: 'private',
    icon: FaClipboardCheck,
    fullDescription: 'Built a comprehensive insurance claims interface using React and Tailwind CSS, implementing complex form validations and state management. The portal streamlined the claims submission process, reducing processing time by 40% and improving user satisfaction. Implemented a step-by-step form wizard that simplified complex insurance claim procedures and reduced error rates in submissions.',
    role: 'Frontend Developer',
    //company: 'Innovative Ops Solutions (Seconded to UBA)',
    year: '2023',
    images: ['/insurance-portal-1.png', '/insurance-portal-2.png']
  },
  {
    title: 'Chat Application',
    description: 'Real-time messaging platform with instant notifications',
    technologies: ['React', 'Node.js', 'WebSocket', 'MongoDB'],
    link: 'https://chat-app-demo.example.com',
    sourceCode: 'https://github.com/example/chat-application',
    type: 'open',
    icon: FaComments,
    fullDescription: 'Built a real-time chat application with instant messaging capabilities, online status indicators, and message delivery confirmations. The application features end-to-end encryption for secure communications, support for multimedia message types, and responsive design for cross-device compatibility. Implemented WebSockets for real-time message delivery and notifications that ensure users never miss important conversations.',
    role: 'Full Stack Developer',
    year: '2022',
    images: ['/chat-app-1.png', '/chat-app-2.png']
  },
  {
    title: 'Task Management System',
    description: 'Modern interface with real-time collaboration features',
    technologies: ['React', 'Bootstrap', 'WebSocket', 'Node.js'],
    type: 'private',
    icon: FaClipboardCheck,
    fullDescription: 'Developed a modern React interface with Bootstrap styling and real-time collaboration features using WebSocket. Created a library of reusable components that streamlined development and maintained consistent UI patterns across the application. The system included features for task assignment, progress tracking, deadline management, and team collaboration that improved project management efficiency and team productivity.',
    role: 'Frontend Developer',
    company: 'Momas Consulting',
    year: '2020',
    images: ['/task-system-1.png', '/task-system-2.png']
  },
  {
    title: 'E-commerce Website',
    description: 'Responsive product catalog with efficient filtering systems',
    technologies: ['Next.js', 'Redux', 'Tailwind CSS', 'PayStack'],
    type: 'private',
    icon: FaShoppingCart,
    fullDescription: 'Designed a responsive product catalog with Next.js, featuring Redux-powered shopping cart management and efficient filtering systems. Implemented a streamlined PayStack checkout process that reduced cart abandonment and improved conversion rates. The website included features for product categorization, search functionality, user reviews, wish lists, and order tracking that enhanced the overall shopping experience.',
    role: 'Frontend Developer',
    company: 'Momas Consulting',
    year: '2019',
    images: ['/ecommerce-1.png', '/ecommerce-2.png']
  },
  {
    title: 'Movie Recommendation App',
    description: 'Personalized film suggestions based on user preferences',
    technologies: ['React', 'Node.js', 'MongoDB', 'TMDB API'],
    link: 'https://movie-recommendations.example.com',
    sourceCode: 'https://github.com/example/movie-recommendation-app',
    type: 'open',
    icon: FaFilm,
    fullDescription: 'Created a movie recommendation application that suggests films based on user preferences, viewing history, and ratings. The app features a comprehensive database of movies with detailed information, personalized recommendation algorithms, watchlist functionality, and social sharing capabilities. Implemented integration with TMDB API for up-to-date movie data and implemented machine learning techniques to improve recommendation accuracy over time.',
    role: 'Full Stack Developer',
    year: '2021',
    images: ['/movie-app-1.png', '/movie-app-2.png']
  }
]

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [filter, setFilter] = useState<'all' | 'open' | 'private'>('all')
  const [searchTerm, setSearchTerm] = useState('')

  const openProjectModal = (project: Project) => {
    setSelectedProject(project)
  }

  const closeProjectModal = () => {
    setSelectedProject(null)
  }

  const filteredProjects = projects.filter(project => {
    const matchesFilter = filter === 'all' || project.type === filter
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase())) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesFilter && matchesSearch
  })

  return (
    <div className="relative min-h-screen py-16 overflow-hidden">
      <AnimatedBackground />
      
      <div className="relative z-10 container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-6 text-white drop-shadow-lg">
          Professional Projects
        </h1>
        <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
          A showcase of my work across various domains including web applications, e-commerce platforms,
          financial systems, and collaborative tools. Each project demonstrates my skills in modern
          frontend and backend technologies.
        </p>

        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex gap-2">
            <button 
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all
                ${filter === 'all' 
                  ? 'bg-gradient-to-r from-[#6a11cb] to-[#2575fc] text-white' 
                  : 'bg-white/10 text-white hover:bg-white/20'}`}
            >
              All Projects
            </button>
            <button 
              onClick={() => setFilter('open')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all
                ${filter === 'open' 
                  ? 'bg-gradient-to-r from-[#6a11cb] to-[#2575fc] text-white' 
                  : 'bg-white/10 text-white hover:bg-white/20'}`}
            >
              <div className="flex items-center gap-2">
                <FaGlobe className="h-3 w-3" />
                Open Source
              </div>
            </button>
            <button 
              onClick={() => setFilter('private')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all
                ${filter === 'private' 
                  ? 'bg-gradient-to-r from-[#6a11cb] to-[#2575fc] text-white' 
                  : 'bg-white/10 text-white hover:bg-white/20'}`}
            >
              <div className="flex items-center gap-2">
                <FaLock className="h-3 w-3" />
                Private
              </div>
            </button>
          </div>
          
          <div className="relative w-full md:w-auto">
            <input
              type="text"
              placeholder="Search projects or technologies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-white/10 border border-white/20 rounded-full py-2 px-4 pl-10 text-white w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-[#3498db] focus:border-transparent"
            />
            <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

        {filteredProjects.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-white text-xl">No projects found matching your criteria.</p>
            <button 
              onClick={() => {setFilter('all'); setSearchTerm('')}}
              className="mt-4 bg-gradient-to-r from-[#6a11cb] to-[#2575fc] text-white px-4 py-2 rounded-full"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={index} 
                className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-4xl relative group"
              >
                {/* Project Type Tag */}
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${
                  project.type === 'open' 
                    ? 'bg-green-500/20 text-green-400' 
                    : 'bg-red-500/20 text-red-400'
                }`}>
                  {project.type === 'open' ? (
                    <div className="flex items-center gap-2">
                      <FaGlobe className="h-4 w-4" />
                      Open Source
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <FaLock className="h-4 w-4" />
                      Private
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-center mb-4">
                    {project.icon ? (
                      <project.icon className="h-8 w-8 mr-4 text-[#3498db]" />
                    ) : null}
                    <h2 className="text-xl font-semibold text-white">
                      {project.title}
                    </h2>
                  </div>
                  
                  <p className="text-gray-300 mb-4 h-12">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span 
                        key={tech} 
                        className="bg-[#3498db]/20 text-[#3498db] px-2 py-1 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="bg-[#3498db]/20 text-[#3498db] px-2 py-1 rounded-full text-xs">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">
                      {project.year}
                    </span>
                    <button 
                      onClick={() => openProjectModal(project)}
                      className="bg-gradient-to-r from-[#6a11cb] to-[#2575fc] text-white px-4 py-2 rounded-full flex items-center gap-2 hover:opacity-90 transition-opacity"
                    >
                      View Details
                      <FaExternalLinkAlt className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4 animate-fadeIn">
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-slideUp">
            <div className="p-8 relative">
              <button 
                onClick={closeProjectModal}
                className="absolute top-6 right-6 text-white hover:text-red-500 transition-colors"
              >
                <FaTimes className="h-6 w-6" />
              </button>

              <div className="flex flex-col md:flex-row justify-between items-start mb-6">
                <div>
                  <div className="flex items-center gap-4 mb-2">
                    {selectedProject.icon && <selectedProject.icon className="h-10 w-10 text-[#3498db]" />}
                    <h2 className="text-3xl font-bold text-white">
                      {selectedProject.title}
                    </h2>
                  </div>
                  
                  {selectedProject.company && (
                    <p className="text-gray-300 mb-2">
                      <span className="font-semibold">Company:</span> {selectedProject.company}
                    </p>
                  )}
                  
                  <p className="text-gray-300">
                    <span className="font-semibold">Role:</span> {selectedProject.role} | <span className="font-semibold">Year:</span> {selectedProject.year}
                  </p>
                </div>
                
                <div className={`px-4 py-2 rounded-full text-sm font-semibold mt-4 md:mt-0 ${
                  selectedProject.type === 'open' 
                    ? 'bg-green-500/20 text-green-400' 
                    : 'bg-red-500/20 text-red-400'
                }`}>
                  {selectedProject.type === 'open' ? 'Open Source Project' : 'Private Project'}
                </div>
              </div>

              {/* Image Carousel */}
              {selectedProject.images && selectedProject.images.length > 0 && (
                <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                  {selectedProject.images.map((img, index) => (
                    <div key={index} className="rounded-lg overflow-hidden shadow-lg bg-black/30 h-64 relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 border-4 border-t-blue-500 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
                      </div>
                      <Image
                        src={img}
                        alt={`${selectedProject.title} screenshot ${index + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover rounded-lg"
                      />
                    </div>
                  ))}
                </div>
              )}

              <div className="space-y-6 text-gray-300">
                <div className="bg-black/20 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-white mb-4">Project Overview</h3>
                  <p className="leading-relaxed">{selectedProject.fullDescription}</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="bg-[#3498db]/20 text-[#3498db] px-3 py-1.5 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {selectedProject.type === 'open' && (
                  <div className="flex flex-col sm:flex-row gap-4 mt-6">
                    {selectedProject.link && (
                      <a 
                        href={selectedProject.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-[#6a11cb] to-[#2575fc] text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                      >
                        <FaGlobe className="h-5 w-5" />
                        View Live Project
                      </a>
                    )}
                    {selectedProject.sourceCode && (
                      <a 
                        href={selectedProject.sourceCode} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-white text-[#2c3e50] px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
                      >
                        <FaCode className="h-5 w-5" />
                        Source Code
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
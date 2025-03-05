// // // app/projects/page.tsx
'use client'

import { useState } from 'react'
import { FaExternalLinkAlt, FaCode, FaIcons, FaTimes, FaLock, FaGlobe } from 'react-icons/fa'
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
  fullDescription?: string
  role?: string
  images?: string[]
}

const projects: Project[] = [
  {
    title: 'Performance Management Solution',
    description: 'Frontend portal for staff appraisal workflow using React',
    technologies: ['React', 'Tailwind CSS', 'WebSocket'],
    type: 'private',
    fullDescription: 'A comprehensive performance management system designed to streamline staff appraisal processes.',
    role: 'Lead Frontend Developer',
    images: ['/project-1-1.png', '/project-1-2.png'],
    icon: FaIcons
  },
  {
    title: 'Self-Service Portal',
    description: 'Responsive portal with real-time updates and modern UI',
    technologies: ['React', 'TypeScript', 'Redux'],
    link: 'https://example-self-service-portal.com',
    sourceCode: 'https://github.com/example/self-service-portal',
    type: 'open',
    icon: FaCode,
    fullDescription: 'An innovative self-service platform enabling users to manage their accounts and services seamlessly.',
    role: 'Full Stack Developer',
    images: ['/project-2-1.png', '/project-2-2.png']
  },
  // Add more projects following this structure
]

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const openProjectModal = (project: Project) => {
    setSelectedProject(project)
  }

  const closeProjectModal = () => {
    setSelectedProject(null)
  }

  return (
    <div className="relative min-h-screen py-16 overflow-hidden">
      <AnimatedBackground />
      
      <div className="relative z-10 container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-white drop-shadow-lg">
          Professional Projects
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-4xl relative"
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
                
                <p className="text-gray-300 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="bg-[#3498db]/20 text-[#3498db] px-2 py-1 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-end">
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
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4">
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 relative">
              <button 
                onClick={closeProjectModal}
                className="absolute top-4 right-4 text-white hover:text-red-500"
              >
                <FaTimes className="h-6 w-6" />
              </button>

              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-white">
                  {selectedProject.title}
                </h2>
                <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  selectedProject.type === 'open' 
                    ? 'bg-green-500/20 text-green-400' 
                    : 'bg-red-500/20 text-red-400'
                }`}>
                  {selectedProject.type === 'open' ? 'Open Source' : 'Private Project'}
                </div>
              </div>

              {/* Image Carousel */}
              {selectedProject.images && selectedProject.images.length > 0 && (
                <div className="mb-6 grid grid-cols-2 gap-4">
                  {selectedProject.images.map((img, index) => (
                    <Image
                      key={index}
                      src={img}
                      alt={`${selectedProject.title} screenshot ${index + 1}`}
                      width={400}
                      height={300}
                      className="rounded-lg shadow-lg"
                    />
                  ))}
                </div>
              )}

              <div className="space-y-4 text-gray-300">
                <p><strong>Role:</strong> {selectedProject.role}</p>
                <p>{selectedProject.fullDescription}</p>

                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="bg-[#3498db]/20 text-[#3498db] px-2 py-1 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {selectedProject.type === 'open' && (
                  <div className="flex space-x-4 mt-4">
                    {selectedProject.link && (
                      <a 
                        href={selectedProject.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-[#6a11cb] to-[#2575fc] text-white px-4 py-2 rounded-lg hover:opacity-90"
                      >
                        View Live Site
                      </a>
                    )}
                    {selectedProject.sourceCode && (
                      <a 
                        href={selectedProject.sourceCode} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-white text-[#2c3e50] px-4 py-2 rounded-lg hover:bg-gray-100"
                      >
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
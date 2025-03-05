'use client'

import Link from 'next/link'
import { 
  FaReact, 
  FaServer, 
  FaLaptopCode, 
  FaPaintBrush,
  FaLinkedin,
  FaGithub,
  FaEnvelope
} from 'react-icons/fa'
import { motion } from 'framer-motion'
import AnimatedBackground from '../components/AnimatedBackground'
import { downloadPdf } from '@/utils/downloadPdf'

const skillCategories = [
  {
    name: 'Frontend',
    color: 'text-blue-400',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML', 'CSS', 'JavaScript'],
    icon: FaReact
  },
  {
    name: 'Backend',
    color: 'text-green-400',
    skills: ['.NET Core', 'C#', 'Node.js', 'SQL Server', 'WebSockets', 'API Development'],
    icon: FaServer
  },
  {
    name: 'DevOps & Tools',
    color: 'text-red-400',
    skills: ['Docker', 'Git', 'CI/CD', 'Deployment', 'Cloud Services', 'Containerization'],
    icon: FaLaptopCode
  },
  {
    name: 'Design & Soft Skills',
    color: 'text-yellow-400',
    skills: ['UI/UX Design', 'Responsive Design', 'Problem Solving', 'Team Collaboration', 'Communication'],
    icon: FaPaintBrush
  }
]

const socialLinks = [
  { 
    icon: FaLinkedin, 
    href: 'https://www.linkedin.com/in/yourprofile', 
    color: 'text-blue-600',
    label: 'LinkedIn'
  },
  { 
    icon: FaGithub, 
    href: 'https://github.com/D-o-v', 
    color: 'text-gray-800',
    label: 'GitHub'
  },
  { 
    icon: FaEnvelope, 
    href: 'mailto:your.email@example.com', 
    color: 'text-red-500',
    label: 'Email'
  }
]

export default function AboutPage() {
  return (
    <div className="relative min-h-screen py-16 overflow-hidden">
      <AnimatedBackground />
      
      <div className="relative z-10 container mx-auto max-w-4xl px-4 w-full">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-6xl font-extrabold text-center mb-16 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
        >
          About Me
        </motion.h1>

        {/* Content Container */}
        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 space-y-6"
        >
          <div>
            <h2 className="text-3xl font-bold mb-4 text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text">
              Professional Journey
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                As a passionate Software Developer, I transform complex challenges 
                into elegant, efficient solutions. My journey is driven by relentless 
                curiosity and a commitment to continuous learning.
              </p>
              <p>
                Specializing in React, Next.js, and .NET ecosystems, I craft scalable 
                web applications that solve real-world problems with a perfect blend 
                of technical expertise and user-centric design.
              </p>
            </div>
          </div>

          {/* Skills Grid */}
          <div>
            <h3 className="text-3xl font-bold mb-6 text-transparent bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text">
              Skills & Expertise
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {skillCategories.map((category, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-white/10 p-5 rounded-2xl hover:bg-white/20 transition-all"
                >
                  <div className="flex items-center mb-3">
                    <category.icon className={`mr-3 ${category.color} h-7 w-7`} />
                    <h4 className="text-xl font-semibold">{category.name}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span 
                        key={skill} 
                        className={`${category.color} bg-white/10 px-3 py-1 rounded-full text-xs font-medium`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Action Buttons & Social Links */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 items-center justify-center">
            <button 
            onClick={() => downloadPdf('ODUNAYO_DAUDA__CV.pdf', '/asset/mycv.pdf')}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:opacity-90 transition-all flex items-center justify-center gap-2"
            >
              Download Resume
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path 
                  fillRule="evenodd" 
                  d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-9.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" 
                  clipRule="evenodd" 
                />
              </svg>
            </button>
            
            <div className="flex space-x-4 items-center justify-center">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`${link.color} hover:opacity-80 transition-all`}
                  aria-label={link.label}
                >
                  <link.icon className="h-7 w-7" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
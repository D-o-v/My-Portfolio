// // // app/page.tsx

'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  FaCode, 
  FaReact, 
  FaNodeJs, 
  FaDatabase, 
  FaCloud, 
  FaLaptopCode 
} from 'react-icons/fa'
import AnimatedBackground from './components/AnimatedBackground'
import { downloadPdf } from '@/utils/downloadPdf'

export default function Home() {
  const [activeSkill, setActiveSkill] = useState(0)
  const skills = [
    { 
      icon: FaReact, 
      name: 'React Development', 
      description: 'Building dynamic, responsive web applications with modern JavaScript frameworks' 
    },
    { 
      icon: FaNodeJs, 
      name: 'Backend Solutions', 
      description: 'Developing robust server-side applications with Node.js and .NET Core' 
    },
    { 
      icon: FaDatabase, 
      name: 'Database Design', 
      description: 'Creating efficient database schemas and optimizing data management' 
    },
    { 
      icon: FaCloud, 
      name: 'Cloud Services', 
      description: 'Implementing scalable cloud architectures and deployment strategies' 
    },
    { 
      icon: FaCode, 
      name: 'System Architecture', 
      description: 'Designing intelligent, scalable software solutions' 
    },
    { 
      icon: FaLaptopCode, 
      name: 'DevOps', 
      description: 'Streamlining development and deployment processes' 
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSkill((prev) => (prev + 1) % skills.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [skills.length])

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
      <AnimatedBackground/>

      <div className="relative z-10 max-w-5xl mx-auto px-4 py-16 text-center">
        <div className="mb-12 animate-fade-in-down">
          <Image 
            src="/asset/profile.png"
            alt="Odunayo Dauda"
            width={250} 
            height={250} 
            className="rounded-full mx-auto mb-6 shadow-2xl border-4 border-white transition-transform duration-500 hover:rotate-6"
          />
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg animate-slide-in-left">
          Odunayo <span className="bg-gradient-to-r from-[#6a11cb] to-[#2575fc] bg-clip-text text-transparent">Dauda</span>
        </h1>

        <h2 className="text-2xl md:text-3xl mb-6 text-gray-300 animate-slide-in-right">
          Software Developer | Full-Stack Engineer
        </h2>

        <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-2xl mx-auto animate-fade-in">
          Transforming complex challenges into elegant, efficient digital solutions 
          through innovative software engineering and user-centric design.
        </p>

        <div className="flex justify-center space-x-4 mb-12 animate-bounce-in">
        <button 
          onClick={() => downloadPdf('ODUNAYO_DAUDA__CV.pdf', '/asset/ODUNAYO_DAUDA__CV.pdf')}
          className="btn bg-gradient-to-r from-[#6a11cb] to-[#2575fc] text-white hover:from-[#2575fc] hover:to-[#6a11cb] flex items-center gap-2 shadow-lg transition-transform hover:scale-105"
        >
          Download CV
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

          <Link 
            href="/projects" 
            className="btn bg-white text-[#2c3e50] hover:bg-gray-100 flex items-center gap-2 shadow-lg transition-transform hover:scale-105"
          >
            View Projects
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 text-[#3498db]" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" 
                clipRule="evenodd" 
              />
            </svg>
          </Link>
        </div>

        {/* Skills Showcase */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold mb-8 text-white">
            Professional <span className="bg-gradient-to-r from-[#6a11cb] to-[#2575fc] bg-clip-text text-transparent">Skills</span>
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className={`p-6 rounded-2xl transition-all duration-300 ${
                  activeSkill === index 
                    ? 'bg-gradient-to-r from-[#6a11cb] to-[#2575fc] text-white scale-105 shadow-2xl' 
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
                onClick={() => setActiveSkill(index)}
              >
                <skill.icon className={`mx-auto h-12 w-12 mb-4 ${
                  activeSkill === index ? 'text-white' : 'text-[#3498db]'
                }`} />
                <h4 className="text-xl font-semibold mb-2">{skill.name}</h4>
                <p className="text-sm">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
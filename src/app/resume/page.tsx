 // app/resume/page.tsx

import { DocumentArrowDownIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import AnimatedBackground from '../components/AnimatedBackground'
import { downloadPdf } from '@/utils/downloadPdf'
import { PDFDownloadButton } from '../components/PDFDownloadButton'

export default function ResumePage() {
  const professionalExperience = [
    {
      company: 'United Bank for Africa',
      period: '02/2023 - Current',
      role: 'Software Developer',
      location: 'Lagos, Nigeria',
      achievements: [
        'Architected frontend for performance management portal',
        'Developed responsive self-service portal',
        'Built comprehensive insurance claims interface with React and Tailwind CSS'
      ]
    },
    {
      company: 'Momas Consulting',
      period: '10/2019 - 01/2023',
      role: 'Frontend Developer',
      location: 'Lagos, Nigeria',
      achievements: [
        'Built interactive food delivery platform UI',
        'Developed task management system with real-time collaboration',
        'Designed e-commerce website with efficient checkout process'
      ]
    }
  ]

  const skills = [
    { category: 'Programming Languages', items: ['TypeScript', 'JavaScript', 'C#', 'Python'] },
    { category: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS', 'HTML5', 'CSS3'] },
    { category: 'Backend', items: ['.NET Core', 'Node.js', 'SQL Server', 'WebSockets'] },
    { category: 'Tools & DevOps', items: ['Docker', 'Git', 'CI/CD', 'Cloud Services'] }
  ]

  const education = [
    {
      institution: 'Obafemi Awolowo University',
      degree: 'Bachelor of Science in Chemistry',
      period: '02/2015 - 02/2020',
      location: 'Ile-Ife, Osun State'
    }
  ]

  const certifications = [
    {
      title: 'Advanced Full-Stack Development',
      provider: 'Industry Training Program',
      focus: '.NET, C#, Next.js, React, TypeScript, Node.js, Tailwind CSS, Docker'
    },
    {
      title: 'ALX Software Engineering',
      provider: 'ALX Africa',
      focus: 'Git, C, Python, React, Collaborative Coding'
    },
    {
      title: 'Infosys Technical Core Finacle Training',
      provider: 'Infosys',
      focus: 'Core Banking Solutions, Software Architecture'
    }
  ]

  return (
    <div className="relative min-h-screen py-16 overflow-hidden">
      <AnimatedBackground />
      
      <div className="relative z-10 container mx-auto max-w-4xl px-4">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-bold text-white drop-shadow-lg">
            Professional Resume
          </h1>
         
          <PDFDownloadButton/>
        </div>

        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-2xl space-y-8">
          {/* Professional Summary (previously added) */}

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4 border-b border-white/20 pb-2">
              Professional Summary
            </h2>
            <div className="bg-white/5 p-4 rounded-lg">
              <p className="text-gray-300 leading-relaxed">
                A dedicated and innovative Software Developer with extensive experience in crafting robust, 
                scalable web applications using modern technologies. With a strong background in React, 
                Next.js, and .NET ecosystems, I specialize in developing high-performance, user-centric 
                digital solutions that drive business efficiency and user satisfaction.
              </p>
              <div className="mt-4 space-y-2">
                <p className="text-gray-300 flex items-start">
                  <span className="mr-2 text-[#3498db] font-bold">•</span>
                  Proven track record of delivering complex web applications with a focus on 
                  responsive design, optimal user experience, and seamless functionality.
                </p>
                <p className="text-gray-300 flex items-start">
                  <span className="mr-2 text-[#3498db] font-bold">•</span>
                  Expertise in full-stack development, leveraging TypeScript, React, .NET Core, 
                  and modern frontend technologies to create comprehensive software solutions.
                </p>
                <p className="text-gray-300 flex items-start">
                  <span className="mr-2 text-[#3498db] font-bold">•</span>
                  Strong problem-solving skills with a commitment to writing clean, maintainable 
                  code and implementing best practices in software development.
                </p>
                <p className="text-gray-300 flex items-start">
                  <span className="mr-2 text-[#3498db] font-bold">•</span>
                  Collaborative team player with excellent communication skills, adept at 
                  working in agile environments and translating complex technical concepts 
                  into understandable terms for stakeholders.
                </p>
              </div>
            </div>
          </section>
          
          {/* Work Experience Section */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4 border-b border-white/20 pb-2">
              Professional Experience
            </h2>
            {professionalExperience.map((job, index) => (
              <div 
                key={index} 
                className="mb-6 bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-[#3498db]">
                      {job.role} | {job.company}
                    </h3>
                    <p className="text-gray-400 mb-2">{job.period} | {job.location}</p>
                  </div>
                </div>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  {job.achievements.map((achievement, idx) => (
                    <li 
                      key={idx} 
                      className="hover:text-white transition-colors duration-300"
                    >
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Skills Section with Detailed Categorization */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4 border-b border-white/20 pb-2">
              Technical Skills
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {skills.map((skillCategory, index) => (
                <div 
                  key={index} 
                  className="bg-white/10 p-4 rounded-lg hover:bg-white/20 transition-all"
                >
                  <h3 className="text-lg font-semibold text-[#3498db] mb-3">
                    {skillCategory.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillCategory.items.map((skill) => (
                      <span 
                        key={skill} 
                        className="bg-[#3498db]/20 text-[#3498db] px-2 py-1 rounded-full text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4 border-b border-white/20 pb-2">
              Education
            </h2>
            {education.map((edu, index) => (
              <div 
                key={index} 
                className="bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-[#3498db]">
                  {edu.degree}
                </h3>
                <p className="text-gray-400 mb-2">
                  {edu.institution} | {edu.period}
                </p>
                <p className="text-gray-300">{edu.location}</p>
              </div>
            ))}
          </section>

          {/* Certifications and Training */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4 border-b border-white/20 pb-2">
              Certifications & Training
            </h2>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div 
                  key={index} 
                  className="bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold text-[#3498db]">
                    {cert.title}
                  </h3>
                  <p className="text-gray-400 mb-2">{cert.provider}</p>
                  <p className="text-gray-300 italic">Focus: {cert.focus}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4 border-b border-white/20 pb-2">
              Contact Information
            </h2>
            <div className="bg-white/5 p-4 rounded-lg">
              <div className="grid md:grid-cols-2 gap-4 text-gray-300">
                <div>
                  <h3 className="font-semibold text-[#3498db]">Location</h3>
                  <p>Lagos, Nigeria</p>
                </div>
                <div>
                  <h3 className="font-semibold text-[#3498db]">Email</h3>
                  <a 
                    href="mailto:daudavictorodunayo@gmail.com" 
                    className="hover:text-white transition-colors"
                  >
                    daudavictorodunayo@gmail.com
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold text-[#3498db]">Phone</h3>
                  <p>+234 816 884 7049</p>
                </div>
                <div>
                  <h3 className="font-semibold text-[#3498db]">Professional Links</h3>
                  <div className="space-y-1">
                    <a 
                      href="https://www.linkedin.com/in/odunayo-dauda-103600191/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-[#3498db] transition-colors"
                    >
                      LinkedIn Profile
                    </a>
                    <br />
                    <a 
                      href="https://github.com/odunayodauda" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-[#3498db] transition-colors"
                    >
                      GitHub Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}


'use client'

import { useForm, ValidationError } from "@formspree/react"
import { FaPaperPlane, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import AnimatedBackground from '../components/AnimatedBackground'

export default function ContactPage() {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID || '')

  return (
    <div className="relative min-h-screen py-16 overflow-hidden">
      <AnimatedBackground/>
      
      <div className="relative z-10 container mx-auto max-w-4xl px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-white drop-shadow-lg">
          Get In Touch
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-2xl">
            <h2 className="text-2xl font-semibold text-white mb-6">Contact Information</h2>
            
            <div className="space-y-4">
              <div className="flex items-center text-[#3498db]">
                <FaEnvelope className="mr-4 h-6 w-6" />
                <span className="text-gray-300">daudavictorodunayo@gmail.com</span>
              </div>
              
              <div className="flex items-center text-[#3498db]">
                <FaPhone className="mr-4 h-6 w-6" />
                <span className="text-gray-300">+2348168847049</span>
              </div>
              
              <div className="flex items-center text-[#3498db]">
                <FaMapMarkerAlt className="mr-4 h-6 w-6" />
                <span className="text-gray-300">Lagos, Nigeria</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          {state.succeeded ? (
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-2xl flex items-center justify-center">
              <div className="text-center text-white">
                <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
                <p className="text-gray-300">Your message has been sent successfully.</p>
              </div>
            </div>
          ) : (
            <form 
              onSubmit={handleSubmit}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-2xl"
            >
              <div className="mb-4">
                <label htmlFor="name" className="block text-white mb-2">Name</label>
                <input 
                  id="name"
                  type="text" 
                  name="name"
                  required
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-[#3498db]"
                />
                <ValidationError 
                  prefix="Name" 
                  field="name"
                  errors={state.errors}
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-white mb-2">Email</label>
                <input 
                  id="email"
                  type="email" 
                  name="email"
                  required
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-[#3498db]"
                />
                <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors}
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="message" className="block text-white mb-2">Message</label>
                <textarea 
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-[#3498db]"
                />
                <ValidationError 
                  prefix="Message" 
                  field="message"
                  errors={state.errors}
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              
              <button 
                type="submit"
                disabled={state.submitting}
                className="w-full bg-gradient-to-r from-[#6a11cb] to-[#2575fc] text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                <FaPaperPlane className="h-5 w-5" />
                {state.submitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
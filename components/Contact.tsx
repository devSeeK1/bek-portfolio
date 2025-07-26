'use client'

import { useState, useRef, FormEvent } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const form = useRef<HTMLFormElement>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [messageType, setMessageType] = useState<'success' | 'error' | ''>('')

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (!form.current) return
    
    setIsLoading(true)
    setMessage('')
    
    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      
      setMessage('Message sent successfully! I\'ll get back to you soon.')
      setMessageType('success')
      form.current.reset()
    } catch (error) {
      setMessage('Failed to send message. Please try again or contact me directly.')
      setMessageType('error')
      console.error('EmailJS error:', error instanceof Error ? error.message : String(error))
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="py-12 border-t border-gray-200 dark:border-gray-700">
      <h2 className="text-3xl font-bold mb-6 text-center">Get In Touch</h2>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-lg mx-auto"
      >
        <div className="mb-4">
          <label htmlFor="from_name" className="block mb-2 text-sm font-medium">Name</label>
          <input
            type="text"
            id="from_name"
            name="from_name"
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="from_email" className="block mb-2 text-sm font-medium">Email</label>
          <input
            type="email"
            id="from_email"
            name="from_email"
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block mb-2 text-sm font-medium">Message</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Sending...' : 'Send Message'}
        </button>
        
        {message && (
          <div className={`mt-4 p-3 rounded-lg text-center ${
            messageType === 'success' 
              ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-100' 
              : 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-100'
          }`}>
            {message}
          </div>
        )}
      </form>
    </section>
  )
}
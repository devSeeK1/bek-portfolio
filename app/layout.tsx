import { Inter } from 'next/font/google'
import './globals.css'
import ThemeToggle from '../components/ThemeToggle'
import Chatbot from '../components/Chatbot'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ezozbek | Portfolio',
  description: 'Modern portfolio showcasing full-stack development and UI design skills with Next.js & Tailwind CSS',
}

export default function RootLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300`}>
        {children}
        <ThemeToggle />
        <Chatbot />
      </body>
    </html>
  )
}
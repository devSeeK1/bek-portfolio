import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'

const apiKey = process.env.ANTHROPIC_API_KEY;

if (!apiKey) {
  console.error('ANTHROPIC_API_KEY is not set in environment variables');
}

const anthropic = new Anthropic({
  apiKey: apiKey!,
})

// Portfolio context for Claude
const PORTFOLIO_CONTEXT = `
You are BEK's professional AI assistant. Keep responses SHORT (2-3 sentences max) and professional.

BEK - Full-Stack Developer & UI Designer
Skills: React, Next.js, TypeScript, Node.js, MongoDB, Firebase

Projects:
1. E-Commerce Dashboard (React, Node.js, MongoDB)
2. Task Management App (Next.js, Tailwind, Firebase)

Instructions:
- Keep responses under 50 words
- Be professional and concise
- Focus on BEK's skills and projects
- Encourage contact for opportunities
- Redirect off-topic questions politely
`

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json()

    if (!message || message.trim().length === 0) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      )
    }

    const response = await anthropic.messages.create({
      model: 'claude-3-haiku-20240307',
      max_tokens: 100,
      messages: [
        {
          role: 'user',
          content: `${PORTFOLIO_CONTEXT}\n\nUser question: ${message}`
        }
      ],
    })

    const botResponse = response.content[0]?.type === 'text' 
      ? response.content[0].text 
      : 'Sorry, I had trouble processing that. Please try again.'

    return NextResponse.json({ response: botResponse })

  } catch (error) {
    console.error('Claude API error:', error)
    
    return NextResponse.json(
      { 
        error: 'Sorry, I\'m having trouble connecting right now. Please try again later or contact BEK directly through the contact form.' 
      },
      { status: 500 }
    )
  }
}
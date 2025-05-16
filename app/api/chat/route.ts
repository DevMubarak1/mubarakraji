import { NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(req: Request) {
  const { messages } = await req.json()

  if (!messages || !Array.isArray(messages)) {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: messages.map(msg => ({ role: msg.role, content: msg.content })),
    })

    return NextResponse.json({ message: completion.choices[0].message.content })
  } catch (error) {
    console.error('OpenAI API error:', error)
    return NextResponse.json({ error: 'An error occurred while processing your request.' }, { status: 500 })
  }
}


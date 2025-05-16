import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { messages } = await req.json()

  if (!messages || !Array.isArray(messages)) {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  // Simulate a dummy chatbot response
  const lastUserMessage = messages[messages.length - 1]?.content || "No message provided"

  const mockReply = `You said: "${lastUserMessage}". (This is a mock response because no API key is set.)`

  return NextResponse.json({ message: mockReply })
}

import { NextRequest, NextResponse } from 'next/server';

const N8N_WEBHOOK_URL = 'https://n8n.nevadatech.co/webhook/chatbot';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { message, sessionId, language } = body;

    if (!message || !message.trim()) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    const response = await fetch(N8N_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message: message.trim(),
        sessionId: sessionId || 'anonymous',
        language: language || 'en',
      }),
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: 'Failed to get response' },
        { status: 502 }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

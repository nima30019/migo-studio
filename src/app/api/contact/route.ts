import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, projectType, message } = body;

    // Server-side validation
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json(
        { error: 'Name is required and must be at least 2 characters.' },
        { status: 400 }
      );
    }

    if (!email || !email.includes('@') || !email.includes('.')) {
      return NextResponse.json(
        { error: 'A valid email address is required.' },
        { status: 400 }
      );
    }

    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      return NextResponse.json(
        { error: 'Please provide a project description with at least 10 characters.' },
        { status: 400 }
      );
    }

    // Process & log inquiry
    console.log('[MIGO Contact API] Received inquiry:', {
      name: name.trim(),
      email: email.trim(),
      company: body.company || 'Not provided',
      projectType: projectType || 'General Inquiry',
      budget: body.budget || 'Not specified',
      timeline: body.timeline || 'Flexible',
      message: message.trim(),
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: 'Your inquiry has been received by MIGO studio engineers.',
      referenceId: 'MIGO-' + Math.random().toString(36).substring(2, 9).toUpperCase(),
    });
  } catch (error) {
    console.error('[MIGO Contact API Error]:', error);
    return NextResponse.json(
      { error: 'An error occurred while processing your request. Please try again.' },
      { status: 500 }
    );
  }
}

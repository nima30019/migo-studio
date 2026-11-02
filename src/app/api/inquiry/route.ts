import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, projectTypes, description } = body;

    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json(
        { error: 'Name is required and must be at least 2 characters.' },
        { status: 400 }
      );
    }

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email address is required.' },
        { status: 400 }
      );
    }

    if (!description || typeof description !== 'string' || description.trim().length < 10) {
      return NextResponse.json(
        { error: 'Please share brief project requirements (min 10 characters).' },
        { status: 400 }
      );
    }

    const referenceNumber = 'PRJ-' + Math.floor(100000 + Math.random() * 900000);

    console.log('[MIGO Project Onboarding API] Registered submission:', {
      referenceNumber,
      name,
      email,
      phone: body.phone || 'N/A',
      company: body.company || 'N/A',
      projectTypes: projectTypes || [],
      platforms: body.platforms || [],
      budget: body.budget || 'Open for consultation',
      timeline: body.timeline || 'Flexible',
      description,
      submittedAt: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      referenceNumber,
      message: 'Project onboarding request logged successfully. A solutions architect will reach out within 24 hours.',
    });
  } catch (err) {
    console.error('[MIGO Inquiry API Error]:', err);
    return NextResponse.json(
      { error: 'Failed to submit inquiry. Please retry.' },
      { status: 500 }
    );
  }
}

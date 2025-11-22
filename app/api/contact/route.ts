// app/api/contact/route.ts
import { Resend } from 'resend'
import { NextResponse } from 'next/server'
import React from 'react'
import { AdminContactEmail, CustomerContactReplyEmail } from '@/lib/email-templates'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, message } = body

    // Validation
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { success: false, error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Format submission time
    const submittedAt = new Date().toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'Asia/Colombo',
    })

    const contactData = {
      name,
      email,
      phone,
      message,
      submittedAt,
    }

    console.log('📧 Processing contact message:', contactData)

    // Send email to admin using React component directly
    const adminEmail = await resend.emails.send({
      from: 'MihithTaxi Contact <noreply@notifications.mihithlankatours.com>',
      to: [process.env.ADMIN_EMAIL || 'janiduhwelarathna@gmail.com'],
      subject: `💬 New Contact Message from ${name}`,
      react: React.createElement(AdminContactEmail, { data: contactData }),
    })

    console.log('✅ Admin email sent:', adminEmail)

    // Send auto-reply to customer
    const customerEmail = await resend.emails.send({
      from: 'MihithTaxi <noreply@notifications.mihithlankatours.com>',
      to: [email],
      subject: '✅ We Received Your Message - Mihith Lanka Taxi',
      react: React.createElement(CustomerContactReplyEmail, { data: contactData }),
    })

    console.log('✅ Customer auto-reply sent:', customerEmail)

    return NextResponse.json({
      success: true,
      message: 'Message sent successfully!',
      adminEmailId: adminEmail.data?.id,
      customerEmailId: customerEmail.data?.id,
    })
  } catch (error: any) {
    console.error('❌ Contact email sending failed:', error)
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to send message' },
      { status: 500 }
    )
  }
}
import { Resend } from 'resend'
import { NextResponse } from 'next/server'
import React from 'react'
import { AdminBookingEmail, CustomerConfirmationEmail } from '@/lib/email-templates'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const bookingData = await request.json()

    console.log('📧 Processing booking:', bookingData)

    // Send email to admin using React component directly
    const adminEmail = await resend.emails.send({
      from: 'MihithTaxi Bookings <noreply@notifications.mihithlankatours.com>',
      to: [process.env.ADMIN_EMAIL || 'janiduhwelarathna@gmail.com'],
      subject: `🚕 New Booking: ${bookingData.pickup} → ${bookingData.destination}`,
      react: React.createElement(AdminBookingEmail, { data: bookingData }),
    })

    console.log('✅ Admin email sent:', adminEmail)

    // Send confirmation email to customer
    const customerEmail = await resend.emails.send({
      from: 'MihithTaxi <noreply@notifications.mihithlankatours.com>',
      to: [bookingData.email],
      subject: '✅ Booking Confirmation - MihithTaxi',
      react: React.createElement(CustomerConfirmationEmail, { data: bookingData }),
    })

    console.log('✅ Customer email sent:', customerEmail)

    return NextResponse.json({
      success: true,
      adminEmailId: adminEmail.data?.id,
      customerEmailId: customerEmail.data?.id,
    })
  } catch (error: any) {
    console.error('❌ Email sending failed:', error)
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to send emails' },
      { status: 500 }
    )
  }
}
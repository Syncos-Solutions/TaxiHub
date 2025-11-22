import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Row,
  Column,
} from '@react-email/components'

interface BookingData {
  title: string
  firstName: string
  lastName: string
  email: string
  phone: string
  whatsapp: string
  pickup: string
  destination: string
  date: string
  time: string
  passengers: string
  vehicleType: string
  specialRequests: string
}

// Admin Email Template
export const AdminBookingEmail = ({ data }: { data: BookingData }) => (
  <Html>
    <Head />
    <Preview>New Booking: {data.pickup} → {data.destination}</Preview>
    <Body style={main}>
      <Container style={container}>
        {/* Header */}
        <Section style={header}>
          <Heading style={h1}>🚕 New Booking Request</Heading>
          <Text style={headerText}>MihithTaxi Booking System</Text>
        </Section>
        
        {/* Content */}
        <Section style={content}>
          {/* Customer Information */}
          <Section style={section}>
            <Heading style={sectionTitle}>👤 Customer Information</Heading>
            <Text style={infoRow}>
              <strong style={label}>Name:</strong> {data.title} {data.firstName} {data.lastName}
            </Text>
            <Text style={infoRow}>
              <strong style={label}>Email:</strong> {data.email}
            </Text>
            <Text style={infoRow}>
              <strong style={label}>Phone:</strong> {data.phone}
            </Text>
            {data.whatsapp && (
              <Text style={infoRow}>
                <strong style={label}>WhatsApp:</strong> {data.whatsapp}
              </Text>
            )}
          </Section>

          {/* Journey Details */}
          <Section style={section}>
            <Heading style={sectionTitle}>🗺️ Journey Details</Heading>
            <Text style={infoRow}>
              <strong style={label}>Pickup Location:</strong> {data.pickup}
            </Text>
            <Text style={infoRow}>
              <strong style={label}>Destination:</strong> {data.destination}
            </Text>
            <Text style={infoRow}>
              <strong style={label}>Date:</strong> {data.date}
            </Text>
            <Text style={infoRow}>
              <strong style={label}>Time:</strong> {data.time}
            </Text>
          </Section>

          {/* Vehicle Information */}
          <Section style={section}>
            <Heading style={sectionTitle}>🚗 Vehicle Information</Heading>
            <Text style={infoRow}>
              <strong style={label}>Number of Passengers:</strong> {data.passengers}
            </Text>
            <Text style={infoRow}>
              <strong style={label}>Vehicle Type:</strong> {data.vehicleType}
            </Text>
          </Section>

          {/* Special Requests */}
          {data.specialRequests && (
            <Section style={section}>
              <Heading style={sectionTitle}>📝 Special Requests</Heading>
              <Text style={infoRow}>{data.specialRequests}</Text>
            </Section>
          )}

          {/* Action Required */}
          <Section style={highlight}>
            <Text style={{ margin: 0 }}>
              <strong>⏰ Action Required:</strong> Please contact the customer as soon as possible to confirm the booking.
            </Text>
          </Section>
        </Section>
      </Container>
    </Body>
  </Html>
)

// Customer Confirmation Email
export const CustomerConfirmationEmail = ({ data }: { data: BookingData }) => (
  <Html>
    <Head />
    <Preview>Booking Confirmation - TaxiHub</Preview>
    <Body style={main}>
      <Container style={container}>
        {/* Header */}
        <Section style={customerHeader}>
          <Heading style={logo}>🚕 TaxiHub</Heading>
          <Heading style={h1}>Booking Confirmation</Heading>
          <Text style={headerText}>Your ride is being processed!</Text>
        </Section>

        {/* Content */}
        <Section style={content}>
          {/* Success Badge */}
          <Section style={{ textAlign: 'center' as const }}>
            <Text style={successBadge}>✓ Booking Received</Text>
          </Section>

          <Heading style={h2}>Dear {data.title} {data.firstName} {data.lastName},</Heading>
          
          <Text style={paragraph}>
            Thank you for choosing <strong style={{ color: '#ff9d00' }}>TaxiHub</strong>! 
            We've received your booking request and our team is reviewing it now.
          </Text>

          {/* Highlight Box */}
          <Section style={highlightBox}>
            <Heading style={h3}>📞 We'll Contact You Soon</Heading>
            <Text style={{ margin: 0 }}>
              Our team will reach out to you shortly at <strong>{data.phone}</strong> to confirm your booking details.
            </Text>
          </Section>

          {/* Booking Details */}
          <Section style={infoBox}>
            <Heading style={h3}>📋 Your Booking Details</Heading>
            
            <Text style={detailRow}>
              <strong>📍 Pickup:</strong> {data.pickup}
            </Text>
            <Text style={detailRow}>
              <strong>🎯 Destination:</strong> {data.destination}
            </Text>
            <Text style={detailRow}>
              <strong>📅 Date:</strong> {data.date}
            </Text>
            <Text style={detailRow}>
              <strong>🕐 Time:</strong> {data.time}
            </Text>
            <Text style={detailRow}>
              <strong>👥 Passengers:</strong> {data.passengers}
            </Text>
            <Text style={detailRow}>
              <strong>🚗 Vehicle Type:</strong> {data.vehicleType}
            </Text>
          </Section>

          {/* Special Requests */}
          {data.specialRequests && (
            <Section style={specialRequestsBox}>
              <Heading style={h4}>💬 Your Special Requests:</Heading>
              <Text style={{ margin: 0 }}>{data.specialRequests}</Text>
            </Section>
          )}

          {/* What's Next */}
          <Section>
            <Heading style={h3}>🎯 What Happens Next?</Heading>
            <Text style={listItem}>1. Our team reviews your booking details</Text>
            <Text style={listItem}>2. We'll call you at <strong>{data.phone}</strong> to confirm</Text>
            <Text style={listItem}>3. You'll receive final confirmation via email</Text>
            <Text style={listItem}>4. Enjoy your comfortable ride with TaxiHub!</Text>
          </Section>

          {/* Contact Info */}
          <Section style={contactBox}>
            <Heading style={h4}>Need to make changes?</Heading>
            <Text style={{ marginBottom: 10 }}>Contact our 24/7 support team</Text>
            <Text style={{ fontSize: 18, color: '#ff9d00', fontWeight: 'bold', margin: 0 }}>
              📞 +94 701234567 | ✉️ booking@taxihub.com
            </Text>
          </Section>
        </Section>

        {/* Footer */}
        <Section style={footer}>
          <Text style={footerText}>🚕 TaxiHub - Your Trusted Ride Partner</Text>
          <Text style={footerLinks}>
            Website | Terms | Privacy | Contact
          </Text>
          <Text style={footerSmall}>
            © 2024 TaxiHub. All rights reserved.<br/>
            This is an automated message, please do not reply to this email.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
)

// Styles
const main = {
  backgroundColor: '#f6f9fc',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
}

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0',
  maxWidth: '600px',
}

const header = {
  background: 'linear-gradient(135deg, #ff9d00 0%, #ffb347 100%)',
  padding: '30px',
  textAlign: 'center' as const,
  borderRadius: '10px 10px 0 0',
}

const customerHeader = {
  background: 'linear-gradient(135deg, #ff9d00 0%, #ffb347 100%)',
  padding: '40px 20px',
  textAlign: 'center' as const,
}

const logo = {
  fontSize: '32px',
  fontWeight: 'bold',
  color: '#ffffff',
  margin: '0 0 10px 0',
}

const h1 = {
  color: '#ffffff',
  fontSize: '28px',
  fontWeight: 'bold',
  margin: '10px 0',
}

const h2 = {
  color: '#333333',
  fontSize: '20px',
  marginTop: '30px',
}

const h3 = {
  color: '#ff9d00',
  fontSize: '18px',
  margin: '0 0 10px 0',
}

const h4 = {
  color: '#333333',
  fontSize: '16px',
  margin: '0 0 10px 0',
}

const headerText = {
  color: '#ffffff',
  margin: 0,
  opacity: 0.9,
}

const content = {
  padding: '30px',
}

const section = {
  backgroundColor: '#ffffff',
  padding: '20px',
  marginBottom: '20px',
  borderRadius: '8px',
  border: '1px solid #e0e0e0',
}

const sectionTitle = {
  color: '#ff9d00',
  fontSize: '18px',
  fontWeight: 'bold',
  marginBottom: '15px',
  borderBottom: '2px solid #ff9d00',
  paddingBottom: '10px',
}

const infoRow = {
  margin: '10px 0',
  color: '#333333',
}

const label = {
  fontWeight: 'bold',
  color: '#555555',
  width: '180px',
  display: 'inline-block',
}

const highlight = {
  backgroundColor: '#fff3e0',
  padding: '15px',
  borderLeft: '4px solid #ff9d00',
  margin: '20px 0',
}

const paragraph = {
  fontSize: '16px',
  lineHeight: '1.8',
  color: '#333333',
}

const successBadge = {
  backgroundColor: '#4CAF50',
  color: '#ffffff',
  display: 'inline-block',
  padding: '10px 20px',
  borderRadius: '25px',
  fontWeight: 'bold',
  margin: '20px 0',
}

const highlightBox = {
  background: 'linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%)',
  padding: '25px',
  borderRadius: '10px',
  margin: '25px 0',
  textAlign: 'center' as const,
}

const infoBox = {
  backgroundColor: '#f8f9fa',
  borderLeft: '4px solid #ff9d00',
  padding: '20px',
  margin: '20px 0',
  borderRadius: '5px',
}

const detailRow = {
  padding: '12px 0',
  borderBottom: '1px solid #eeeeee',
  margin: 0,
}

const specialRequestsBox = {
  backgroundColor: '#f8f9fa',
  padding: '20px',
  borderRadius: '8px',
  margin: '20px 0',
}

const listItem = {
  lineHeight: '2',
  color: '#666666',
  margin: '5px 0',
}

const contactBox = {
  background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
  padding: '25px',
  borderRadius: '10px',
  textAlign: 'center' as const,
  margin: '20px 0',
}

const footer = {
  backgroundColor: '#f8f9fa',
  padding: '30px',
  textAlign: 'center' as const,
}

const footerText = {
  fontWeight: 'bold',
  color: '#333333',
  margin: '0 0 15px 0',
}

const footerLinks = {
  margin: '15px 0',
  color: '#666666',
  fontSize: '14px',
}

const footerSmall = {
  margin: '15px 0 0 0',
  fontSize: '12px',
  color: '#666666',
}
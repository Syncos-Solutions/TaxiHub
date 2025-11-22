// lib/email-templates.tsx
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Hr,
} from '@react-email/components'

// ========================================
// INTERFACES
// ========================================

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

interface ContactData {
  name: string
  email: string
  phone: string
  message: string
  submittedAt: string
}

// ========================================
// BOOKING EMAIL TEMPLATES
// ========================================

// Admin Booking Email Template
export const AdminBookingEmail = ({ data }: { data: BookingData }) => (
  <Html>
    <Head />
    <Preview>New Booking: {data.pickup} → {data.destination}</Preview>
    <Body style={main}>
      <Container style={container}>
        
        {/* Header */}
        <Section style={header}>
          <Heading style={companyName}>MIHITH LANKA TAXI</Heading>
          <Text style={headerSubtitle}>New Booking Request</Text>
        </Section>

        {/* Content */}
        <Section style={content}>
          
          {/* Alert Box */}
          <Section style={alertBox}>
            <Text style={alertText}>
              Action Required: Please contact the customer to confirm this booking.
            </Text>
          </Section>

          {/* Customer Information */}
          <Section style={dataSection}>
            <Heading style={sectionHeading}>Customer Information</Heading>
            <Hr style={divider} />
            
            <table style={table}>
              <tr style={tableRow}>
                <td style={tableLabel}>Name</td>
                <td style={tableValue}>{data.title} {data.firstName} {data.lastName}</td>
              </tr>
              <tr style={tableRow}>
                <td style={tableLabel}>Email</td>
                <td style={tableValue}>{data.email}</td>
              </tr>
              <tr style={tableRow}>
                <td style={tableLabel}>Phone</td>
                <td style={tableValue}>{data.phone}</td>
              </tr>
              {data.whatsapp && (
                <tr style={tableRow}>
                  <td style={tableLabel}>WhatsApp</td>
                  <td style={tableValue}>{data.whatsapp}</td>
                </tr>
              )}
            </table>
          </Section>

          {/* Journey Details */}
          <Section style={dataSection}>
            <Heading style={sectionHeading}>Journey Details</Heading>
            <Hr style={divider} />
            
            <table style={table}>
              <tr style={tableRow}>
                <td style={tableLabel}>Pickup</td>
                <td style={tableValue}>{data.pickup}</td>
              </tr>
              <tr style={tableRow}>
                <td style={tableLabel}>Destination</td>
                <td style={tableValue}>{data.destination}</td>
              </tr>
              <tr style={tableRow}>
                <td style={tableLabel}>Date</td>
                <td style={tableValue}>{data.date}</td>
              </tr>
              <tr style={tableRow}>
                <td style={tableLabel}>Time</td>
                <td style={tableValue}>{data.time}</td>
              </tr>
            </table>
          </Section>

          {/* Special Requests */}
          {data.specialRequests && (
            <Section style={dataSection}>
              <Heading style={sectionHeading}>Special Requests</Heading>
              <Hr style={divider} />
              <Text style={messageContent}>{data.specialRequests}</Text>
            </Section>
          )}

        </Section>

        {/* Footer */}
        <Section style={footer}>
          <Text style={footerText}>
            Mihith Lanka Taxi<br />
            Colombo, Sri Lanka<br />
            +94 77 659 9542
          </Text>
        </Section>

      </Container>
    </Body>
  </Html>
)

// Customer Booking Confirmation Email
export const CustomerConfirmationEmail = ({ data }: { data: BookingData }) => (
  <Html>
    <Head />
    <Preview>Booking Confirmation - Mihith Lanka Taxi</Preview>
    <Body style={main}>
      <Container style={container}>
        
        {/* Header */}
        <Section style={header}>
          <Heading style={companyName}>MIHITH LANKA TAXI</Heading>
          <Text style={headerSubtitle}>Booking Confirmation</Text>
        </Section>

        {/* Content */}
        <Section style={content}>
          
          {/* Greeting */}
          <Text style={greeting}>
            Dear {data.title} {data.firstName} {data.lastName},
          </Text>

          <Text style={bodyText}>
            Thank you for choosing Mihith Lanka Taxi. We have received your booking request 
            and our team will contact you as soon as possible to confirm the details.
          </Text>

          {/* Confirmation Box */}
          <Section style={confirmationBox}>
            <Text style={confirmationText}>
              Booking Reference: #{Date.now().toString(36).toUpperCase()}
            </Text>
          </Section>

          {/* Booking Summary */}
          <Section style={dataSection}>
            <Heading style={sectionHeading}>Booking Summary</Heading>
            <Hr style={divider} />
            
            <table style={table}>
              <tr style={tableRow}>
                <td style={tableLabel}>From</td>
                <td style={tableValue}>{data.pickup}</td>
              </tr>
              <tr style={tableRow}>
                <td style={tableLabel}>To</td>
                <td style={tableValue}>{data.destination}</td>
              </tr>
              <tr style={tableRow}>
                <td style={tableLabel}>Date</td>
                <td style={tableValue}>{data.date}</td>
              </tr>
              <tr style={tableRow}>
                <td style={tableLabel}>Time</td>
                <td style={tableValue}>{data.time}</td>
              </tr>
            </table>
          </Section>

          {/* Special Requests */}
          {data.specialRequests && (
            <Section style={dataSection}>
              <Heading style={sectionHeading}>Your Special Requests</Heading>
              <Hr style={divider} />
              <Text style={messageContent}>{data.specialRequests}</Text>
            </Section>
          )}

          {/* Next Steps */}
          <Section style={dataSection}>
            <Heading style={sectionHeading}>What Happens Next</Heading>
            <Hr style={divider} />
            <Text style={listText}>1. Our team will review your booking</Text>
            <Text style={listText}>2. We will call you at {data.phone} to confirm</Text>
            <Text style={listText}>3. You will receive final confirmation</Text>
            <Text style={listText}>4. Enjoy your ride with us</Text>
          </Section>

          {/* Contact Info */}
          <Section style={contactSection}>
            <Text style={contactTitle}>Need to Make Changes?</Text>
            <Text style={contactDetails}>
              Contact us at +94 77 659 9542 or support@mihithlanka.com
            </Text>
          </Section>

        </Section>

        {/* Footer */}
        <Section style={footer}>
          <Text style={footerText}>
            Mihith Lanka Taxi<br />
            Colombo, Sri Lanka<br />
            +94 77 659 9542 | support@mihithlanka.com
          </Text>
          <Text style={footerSmall}>
            This is an automated confirmation. Please do not reply to this email.
          </Text>
        </Section>

      </Container>
    </Body>
  </Html>
)

// ========================================
// CONTACT FORM EMAIL TEMPLATES
// ========================================

// Admin Contact Email Template
export const AdminContactEmail = ({ data }: { data: ContactData }) => (
  <Html>
    <Head />
    <Preview>New Contact Message from {data.name}</Preview>
    <Body style={main}>
      <Container style={container}>
        
        {/* Header */}
        <Section style={header}>
          <Heading style={companyName}>MIHITH LANKA TAXI</Heading>
          <Text style={headerSubtitle}>New Contact Message</Text>
        </Section>

        {/* Content */}
        <Section style={content}>
          
          {/* Alert Box */}
          <Section style={alertBox}>
            <Text style={alertText}>
              Action Required: Please respond to this inquiry.
            </Text>
          </Section>

          {/* Contact Information */}
          <Section style={dataSection}>
            <Heading style={sectionHeading}>Contact Details</Heading>
            <Hr style={divider} />
            
            <table style={table}>
              <tr style={tableRow}>
                <td style={tableLabel}>Name</td>
                <td style={tableValue}>{data.name}</td>
              </tr>
              <tr style={tableRow}>
                <td style={tableLabel}>Email</td>
                <td style={tableValue}>
                  <a href={`mailto:${data.email}`} style={link}>{data.email}</a>
                </td>
              </tr>
              <tr style={tableRow}>
                <td style={tableLabel}>Phone</td>
                <td style={tableValue}>
                  <a href={`tel:${data.phone}`} style={link}>{data.phone}</a>
                </td>
              </tr>
              <tr style={tableRow}>
                <td style={tableLabel}>Received</td>
                <td style={tableValue}>{data.submittedAt}</td>
              </tr>
            </table>
          </Section>

          {/* Message */}
          <Section style={dataSection}>
            <Heading style={sectionHeading}>Message</Heading>
            <Hr style={divider} />
            <Text style={messageContent}>{data.message}</Text>
          </Section>

        </Section>

        {/* Footer */}
        <Section style={footer}>
          <Text style={footerText}>
            Mihith Lanka Taxi - Contact Form<br />
            This is an automated notification from your website.
          </Text>
        </Section>

      </Container>
    </Body>
  </Html>
)

// Customer Contact Auto-Reply Email Template
export const CustomerContactReplyEmail = ({ data }: { data: ContactData }) => (
  <Html>
    <Head />
    <Preview>Thank You for Contacting Mihith Lanka Taxi</Preview>
    <Body style={main}>
      <Container style={container}>
        
        {/* Header */}
        <Section style={header}>
          <Heading style={companyName}>MIHITH LANKA TAXI</Heading>
          <Text style={headerSubtitle}>Message Received</Text>
        </Section>

        {/* Content */}
        <Section style={content}>
          
          {/* Greeting */}
          <Text style={greeting}>
            Hello {data.name},
          </Text>

          <Text style={bodyText}>
            Thank you for contacting Mihith Lanka Taxi. We have received your message 
            and our team will get back to you soon.
          </Text>

          {/* Confirmation Box */}
          <Section style={confirmationBox}>
            <Text style={confirmationText}>
              Message received on {data.submittedAt}
            </Text>
          </Section>

          {/* Message Summary */}
          <Section style={dataSection}>
            <Heading style={sectionHeading}>Your Message</Heading>
            <Hr style={divider} />
            
            <table style={table}>
              <tr style={tableRow}>
                <td style={tableLabel}>Email</td>
                <td style={tableValue}>{data.email}</td>
              </tr>
              <tr style={tableRow}>
                <td style={tableLabel}>Phone</td>
                <td style={tableValue}>{data.phone}</td>
              </tr>
            </table>

            <Section style={{ marginTop: 20 }}>
              <Text style={messageContent}>{data.message}</Text>
            </Section>
          </Section>

          {/* What's Next */}
          <Section style={dataSection}>
            <Heading style={sectionHeading}>What Happens Next</Heading>
            <Hr style={divider} />
            <Text style={listText}>1. Our team reviews your inquiry</Text>
            <Text style={listText}>2. We will contact you at {data.phone}</Text>
            <Text style={listText}>3. You will receive a personalized response</Text>
          </Section>

          {/* Urgent Contact */}
          <Section style={contactSection}>
            <Text style={contactTitle}>Need Immediate Assistance?</Text>
            <Text style={contactDetails}>
              Call us at +94 77 659 9542 (Available 24/7)
            </Text>
          </Section>

          {/* Services */}
          <Section style={servicesSection}>
            <Heading style={sectionHeading}>Our Services</Heading>
            <Hr style={divider} />
            <Text style={serviceText}>Taxi Services - Airport Transfers - Custom Tours - Multi-day Tours</Text>
          </Section>

        </Section>

        {/* Footer */}
        <Section style={footer}>
          <Text style={footerText}>
            Mihith Lanka Taxi<br />
            Your Trusted Travel Partner in Sri Lanka<br />
            Colombo, Sri Lanka | +94 77 659 9542
          </Text>
          <Text style={footerSmall}>
            This is an automated confirmation. Please do not reply to this email.
          </Text>
        </Section>

      </Container>
    </Body>
  </Html>
)

// ========================================
// MINIMAL PROFESSIONAL STYLES
// ========================================

const main = {
  backgroundColor: '#f5f5f5',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  fontSize: '16px',
  lineHeight: '1.6',
  color: '#333333',
}

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  maxWidth: '600px',
  border: '1px solid #e0e0e0',
}

const header = {
  backgroundColor: '#000000',
  padding: '40px 30px',
  textAlign: 'center' as const,
}

const companyName = {
  color: '#ffffff',
  fontSize: '24px',
  fontWeight: '700',
  margin: '0 0 8px 0',
  letterSpacing: '2px',
}

const headerSubtitle = {
  color: '#ffffff',
  fontSize: '14px',
  fontWeight: '400',
  margin: '0',
  opacity: 0.9,
  textTransform: 'uppercase' as const,
  letterSpacing: '1px',
}

const content = {
  padding: '40px 30px',
}

const greeting = {
  fontSize: '16px',
  fontWeight: '600',
  color: '#000000',
  margin: '0 0 20px 0',
}

const bodyText = {
  fontSize: '15px',
  lineHeight: '1.7',
  color: '#333333',
  margin: '0 0 25px 0',
}

const alertBox = {
  backgroundColor: '#f8f8f8',
  border: '2px solid #000000',
  padding: '15px 20px',
  margin: '0 0 30px 0',
}

const alertText = {
  fontSize: '14px',
  fontWeight: '600',
  color: '#000000',
  margin: '0',
  textAlign: 'center' as const,
}

const confirmationBox = {
  backgroundColor: '#f8f8f8',
  padding: '15px 20px',
  margin: '0 0 30px 0',
  textAlign: 'center' as const,
}

const confirmationText = {
  fontSize: '13px',
  fontWeight: '600',
  color: '#000000',
  margin: '0',
  letterSpacing: '0.5px',
}

const dataSection = {
  marginBottom: '30px',
}

const sectionHeading = {
  fontSize: '16px',
  fontWeight: '700',
  color: '#000000',
  margin: '0 0 12px 0',
  textTransform: 'uppercase' as const,
  letterSpacing: '1px',
}

const divider = {
  borderColor: '#000000',
  borderWidth: '1px',
  margin: '0 0 20px 0',
}

const table = {
  width: '100%',
  borderCollapse: 'collapse' as const,
}

const tableRow = {
  borderBottom: '1px solid #e0e0e0',
}

const tableLabel = {
  fontSize: '14px',
  fontWeight: '600',
  color: '#666666',
  padding: '12px 0',
  width: '140px',
  verticalAlign: 'top' as const,
}

const tableValue = {
  fontSize: '14px',
  color: '#000000',
  padding: '12px 0',
  verticalAlign: 'top' as const,
}

const messageContent = {
  fontSize: '14px',
  lineHeight: '1.7',
  color: '#333333',
  margin: '0',
  padding: '15px',
  backgroundColor: '#f8f8f8',
  border: '1px solid #e0e0e0',
  whiteSpace: 'pre-wrap' as const,
}

const listText = {
  fontSize: '14px',
  lineHeight: '2',
  color: '#333333',
  margin: '0 0 8px 0',
}

const contactSection = {
  backgroundColor: '#f8f8f8',
  padding: '20px',
  margin: '30px 0 0 0',
  textAlign: 'center' as const,
  border: '1px solid #e0e0e0',
}

const contactTitle = {
  fontSize: '15px',
  fontWeight: '700',
  color: '#000000',
  margin: '0 0 10px 0',
}

const contactDetails = {
  fontSize: '14px',
  color: '#333333',
  margin: '0',
}

const servicesSection = {
  marginTop: '30px',
  paddingTop: '30px',
  borderTop: '1px solid #e0e0e0',
}

const serviceText = {
  fontSize: '13px',
  color: '#666666',
  margin: '0',
  textAlign: 'center' as const,
}

const link = {
  color: '#000000',
  textDecoration: 'underline',
}

const footer = {
  backgroundColor: '#f8f8f8',
  padding: '30px',
  textAlign: 'center' as const,
  borderTop: '1px solid #e0e0e0',
}

const footerText = {
  fontSize: '13px',
  lineHeight: '1.8',
  color: '#666666',
  margin: '0 0 15px 0',
}

const footerSmall = {
  fontSize: '11px',
  color: '#999999',
  margin: '0',
  fontStyle: 'italic' as const,
}
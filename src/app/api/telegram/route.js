
import { NextResponse } from 'next/server';

// Service name mapping for better readability
const SERVICE_NAMES = {
  mobileApp: 'Mobile App Development',
  webDev: 'Web Development',
  aiIntegration: 'AI Integration',
  digitalMarketing: 'Digital Marketing',
  uiuxDesign: 'UI/UX Design',
  performanceOptimization: 'Performance Optimization'
};

// Format selected services into readable text
function formatSelectedServices(services) {
  if (!services || Object.keys(services).length === 0) {
    return 'No services selected';
  }

  let formatted = '';
  let serviceCount = 1;

  Object.entries(services).forEach(([serviceId, serviceData]) => {
    const serviceName = SERVICE_NAMES[serviceId] || serviceId;
    formatted += `\n${serviceCount}. ${serviceName}`;
    
    if (serviceData.selectedSubServices && serviceData.selectedSubServices.length > 0) {
      formatted += '\n   Sub-services:';
      serviceData.selectedSubServices.forEach(subService => {
        formatted += `\n   • ${subService}`;
      });
    } else {
      formatted += '\n   (Base service only)';
    }
    
    formatted += '\n';
    serviceCount++;
  });

  return formatted.trim();
}

export async function POST(request) {
  const data = await request.json();

  // IMPORTANT: Replace with your actual Telegram Bot Token and Chat ID
  // It is highly recommended to use environment variables for these
  const botToken = process.env.TELEGRAM_BOT_TOKEN || 'YOUR_TELEGRAM_BOT_TOKEN';
  const chatId = process.env.TELEGRAM_CHAT_ID || 'YOUR_TELEGRAM_CHAT_ID';

  let message = '';

  if (data.source === 'contactForm') {
    message = `
      New Contact Form Submission:
      Name: ${data.name}
      Email: ${data.email || 'Not provided'}
      Phone: ${data.phone || 'Not provided'}
      Service: ${data.service}
      Message: ${data.message}
    `;
  } else if (data.source === 'onboarding') {
    const formattedServices = formatSelectedServices(data.onboardingProgress.selectedServices);
    
    message = `
      New Onboarding Submission:

      Contact Info:
      Name: ${data.contactInfo.name}
      Email: ${data.contactInfo.email || 'Not provided'}
      Phone: ${data.contactInfo.phone || 'Not provided'}
      Company: ${data.contactInfo.company || 'Not provided'}
      Project Description: ${data.contactInfo.projectDescription || 'Not provided'}

      Onboarding Details:
      Selected Track: ${data.onboardingProgress.selectedTrack}
      Selected Package: ${data.onboardingProgress.selectedPackage || 'Custom'}
      Total Price: UGX ${data.onboardingProgress.totalPrice.toLocaleString()}
      Estimated Timeline: ${data.onboardingProgress.estimatedTimeline}

      Selected Services:
      ${formattedServices}
    `;
  } else {
    message = `Unknown data source: ${JSON.stringify(data, null, 2)}`;
  }

  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'Markdown',
      }),
    });

    const result = await response.json();

    if (result.ok) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ success: false, error: result.description }, { status: 500 });
    }
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

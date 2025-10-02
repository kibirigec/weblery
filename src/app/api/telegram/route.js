
import { NextResponse } from 'next/server';

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
      Email: ${data.email}
      Company: ${data.company}
      Message: ${data.message}
    `;
  } else if (data.source === 'onboarding') {
    message = `
      New Onboarding Submission:

      Contact Info:
      Name: ${data.contactInfo.name}
      Email: ${data.contactInfo.email}
      Company: ${data.contactInfo.company}

      Onboarding Details:
      Selected Track: ${data.onboardingProgress.selectedTrack}
      Selected Package: ${data.onboardingProgress.selectedPackage}
      Total Price: ${data.onboardingProgress.totalPrice}
      Estimated Timeline: ${data.onboardingProgress.estimatedTimeline}

      Selected Services:
      ${JSON.stringify(data.onboardingProgress.selectedServices, null, 2)}
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

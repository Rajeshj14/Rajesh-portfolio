// pages/api/sendEmail.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import emailjs from '@emailjs/browser'; // Changed to browser version

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Handle OPTIONS request first for CORS
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(200).end();
  }


  try {
    const {
      name,
      email,
      password,
      phone,
      role,
      companyName,
      hireMe,
      additionalInfo
    } = req.body;

    // Validate required fields
    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required' });
    }

    // Initialize EmailJS (browser version)
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);

    // Send email
    const response = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      {
        name,
        email,
        password: password || 'Not provided',
        phone: phone || 'Not provided',
        role: role || 'Not provided',
        companyName: companyName || 'Not provided',
        hireMe: hireMe !== null ? (hireMe ? 'Yes' : 'No') : 'Not specified',
        additionalInfo: additionalInfo || 'Not provided'
      }
    );

    return res.status(200).json({ success: true, data: response });

  } catch (error) {
    console.error('Email sending error:', error);
    return res.status(500).json({ 
      error: 'Failed to send email',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
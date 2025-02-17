import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const POST = async (req: Request) => {
  try {
    const { firstName, lastName, email, mobile, course, country } = await req.json();

    if (!firstName || !lastName || !email || !mobile || !course) {
      return NextResponse.json({ error: 'All required fields must be filled' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'sinusoidalcyber@gmail.com',
      subject: 'New Course Booking',
      html: `<p><strong>New Booking Details:</strong></p>
             <p><strong>First Name:</strong> ${firstName}</p>
             <p><strong>Last Name:</strong> ${lastName}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Mobile:</strong> ${mobile}</p>
             <p><strong>Course:</strong> ${course}</p>
             <p><strong>Country:</strong> ${country || 'Not provided'}</p>`,
    });

    return NextResponse.json({ message: 'Booking email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json({ error: 'Failed to send booking email' }, { status: 500 });
  }
};

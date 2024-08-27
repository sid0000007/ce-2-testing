import { log } from "console";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .regex(/^\d+$/, "Phone number can only contain digits"),
  service: z.string().min(1, "Please select a service"),
  location: z.string().min(1, "Location is required"),
  availability: z.string().min(1, "Availability is required"),
  message: z.string().min(1, "Message is required"),
});

export async function POST(req: NextRequest) {
  try {
    console.log("we are in");

    const data = await req.json();
    const validatedData = contactFormSchema.parse(data);

    // Setup Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Define email options
    const mailOptions = {
      from: validatedData.email,
      to: "ashukr2218@gmail.com",
      subject: "New Contact Form Submission",
      text: `
        Name: ${validatedData.name}
        Email: ${validatedData.email}
        Phone: ${validatedData.phone}
        Service: ${validatedData.service}
        Location: ${validatedData.location}
        Availability: ${validatedData.availability}
        Message: ${validatedData.message}
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      { error: error.message || "Error sending email" },
      { status: 400 }
    );
  }
}

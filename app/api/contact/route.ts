import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Send internal notification email
    await resend.emails.send({
      from: "Portfolio Contact <hello@erwinjames.world>",
      to: [process.env.CONTACT_EMAIL || "egcaluag@gmail.com"],
      subject: `New Contact Form Message from ${name}`,
      html: `
        <div style="font-family: 'Archivo Black', Arial, sans-serif; line-height: 1.6; background-color: #f6f5f1; color: #1e1e1e; padding: 20px;">
          <div style="background-color: #1e1e1e; color: #f6f5f1; padding: 20px; margin-bottom: 20px;">
            <h2 style="margin: 0 0 10px 0; font-size: 18px; text-transform: uppercase; font-weight: 900;">NEW CONTACT FORM SUBMISSION</h2>
            <p style="margin: 0; opacity: 0.8;">You have received a new message from your portfolio website.</p>
          </div>

          <div style="background-color: #ffffff; border: 2px solid #1e1e1e; padding: 20px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 2px solid #f6f5f1; font-weight: 900; text-transform: uppercase; color: #1e1e1e;">From:</td>
                <td style="padding: 12px 0; border-bottom: 2px solid #f6f5f1; color: #1e1e1e;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 2px solid #f6f5f1; font-weight: 900; text-transform: uppercase; color: #1e1e1e;">Email:</td>
                <td style="padding: 12px 0; border-bottom: 2px solid #f6f5f1; color: #1e1e1e;">
                  <a href="mailto:${email}" style="color: #1e1e1e; text-decoration: underline;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; vertical-align: top; font-weight: 900; text-transform: uppercase; color: #1e1e1e;">Message:</td>
                <td style="padding: 12px 0; color: #1e1e1e;">
                  <div style="background-color: #f6f5f1; padding: 15px; border: 2px solid #1e1e1e;">
                    ${message.replace(/\n/g, "<br>")}
                  </div>
                </td>
              </tr>
            </table>
          </div>
        </div>
      `,
      replyTo: email,
    });

    // Send confirmation email to user
    await resend.emails.send({
      from: "Erwin James <hello@erwinjames.world>",
      to: [email],
      subject: "Thanks for reaching out!",
      html: `
               <div style="font-family: 'Archivo Black', Arial, sans-serif; line-height: 1.6; color: #1e1e1e; padding: 20px;">
          <!-- Header -->
          <div style="background-color: #1e1e1e; color: #f6f5f1; padding: 30px; margin-bottom: 30px; text-align: left;">
            <h1 style="margin: 0; font-size: 24px;  font-weight: 900; color: #f6f5f1;">Hi ${name}, thanks for reaching out!</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.8; font-size: 16px; color: #f6f5f1;">I've received your message and will get back to you shortly.</p>
          </div>

         

          <!-- Projects Showcase -->
          <div style="background-color: #ffffff; padding: 25px; margin-bottom: 20px;">
            <h2 style="margin: 0 0 30px 0; font-size: 20px; text-transform: uppercase; font-weight: 900; text-align: left; color: #1e1e1e;">FOR THE MEANTIME, CHECK OUT MY LATEST PROJECTS</h2>
            
            <!-- Claudipedia Project -->
            <div style="margin-bottom: 30px; padding-bottom: 30px; border-bottom: 2px solid #f6f5f1;">
              <!-- Tags -->
              <div style="margin-bottom: 15px;">
                <span style="background-color: #1e1e1e; color: #f6f5f1; padding: 6px 12px; margin-right: 8px; font-size: 12px; text-transform: lowercase; font-weight: 900;">nextjs</span>
                <span style="background-color: #1e1e1e; color: #f6f5f1; padding: 6px 12px; margin-right: 8px; font-size: 12px; text-transform: lowercase; font-weight: 900;">n8n</span>
                <span style="background-color: #1e1e1e; color: #f6f5f1; padding: 6px 12px; font-size: 12px; text-transform: lowercase; font-weight: 900;">supabase</span>
              </div>
              <!-- Title -->
              <h3 style="margin: 0 0 20px 0; font-size: 18px; text-transform: uppercase; font-weight: 900; color: #1e1e1e; line-height: 1.2;">FROM BOOK TO APP: AUTOMATING A 1,100-QUESTION STUDY SYSTEM</h3>
              <!-- Overview -->
              <p style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.6; color: #1e1e1e;">What started as a thick, paper-based counseling exam book is now a fully interactive study platform. Using automation, AI parsing, and a modern full-stack app, I turned 1,100 questions into a gamified 'Arcade Mode' experience.</p>
              <!-- Button -->
              <a href="https://erwinjames.world/projects/claudipedia" style="border: 2px solid #1e1e1e; color: #1e1e1e; padding: 12px 16px; text-decoration: none; text-transform: uppercase; font-weight: 900; display: inline-block; font-size: 14px; transition: all 0.2s;">READ MORE</a>
            </div>

            <!-- EasySpend Project -->
            <div style="margin-bottom: 0;">
              <!-- Tags -->
              <div style="margin-bottom: 15px;">
                <span style="background-color: #1e1e1e; color: #f6f5f1; padding: 6px 12px; margin-right: 8px; font-size: 12px; text-transform: lowercase; font-weight: 900;">nextjs</span>
                <span style="background-color: #1e1e1e; color: #f6f5f1; padding: 6px 12px; margin-right: 8px; font-size: 12px; text-transform: lowercase; font-weight: 900;">n8n</span>
                <span style="background-color: #1e1e1e; color: #f6f5f1; padding: 6px 12px; font-size: 12px; text-transform: lowercase; font-weight: 900;">supabase</span>
              </div>
              <!-- Title -->
              <h3 style="margin: 0 0 20px 0; font-size: 18px; text-transform: uppercase; font-weight: 900; color: #1e1e1e; line-height: 1.2;">EASYSPEND: A MOBILE-FIRST EXPENSE TRACKER WITH NEXT.JS + SUPABASE</h3>
              <!-- Overview -->
              <p style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.6; color: #1e1e1e;">EasySpend is a personal expense tracking platform built with Next.js 14 and Supabase. Beyond quick manual entry and clear analytics, it also supports automated expense ingestion: send a receipt photo via Telegram and an n8n + AI pipeline parses it, formats it, and adds it to your Supabase account.</p>
              <!-- Button -->
              <a href="https://erwinjames.world/projects/easyspend" style="border: 2px solid #1e1e1e; color: #1e1e1e; padding: 12px 16px; text-decoration: none; text-transform: uppercase; font-weight: 900; display: inline-block; font-size: 14px; transition: all 0.2s;">READ MORE</a>
            </div>
          </div>

          <!-- Footer -->
          <div style="text-align: center; padding: 20px; background-color: #1e1e1e; color: #f6f5f1; ">
            <p style="margin: 0 0 10px 0; font-size: 14px; text-transform: uppercase; font-weight: 900; color: #f6f5f1;">ERWINJAMES</p>
            <p style="margin: 0; font-size: 12px; opacity: 0.7; color: #f6f5f1;">Software Developer & AI Automation Specialist</p>
            <p style="margin: 10px 0 0 0; font-size: 12px; opacity: 0.7; color: #f6f5f1;">
              <a href="https://erwinjames.world" style="color: #f6f5f1; text-decoration: underline;">erwinjames.world</a> | 
              <a href="https://linkedin.com/in/erwinjamescaluag" style="color: #f6f5f1;text-decoration: underline;">LinkedIn</a>
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}

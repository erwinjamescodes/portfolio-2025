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

    // Send email using Resend
    await resend.emails.send({
      from: "Portfolio Contact <hello@erwinjames.world>",
      to: [process.env.CONTACT_EMAIL || "egcaluag@gmail.com"],
      subject: `New Contact Form Message from ${name}`,
      html: `
        <div style="font-family: system-ui, sans-serif; line-height: 1.6; color: #333;">
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h2 style="margin: 0 0 10px 0; color: #2c3e50; font-size: 18px;">📧 New Contact Form Submission</h2>
            <p style="margin: 0; color: #7f8c8d;">You have received a new message from your portfolio website.</p>
          </div>

          <div style="background-color: #fff; border: 1px solid #e9ecef; border-radius: 8px; padding: 20px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #f1f3f4; font-weight: bold; color: #495057;">From:</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #f1f3f4; color: #2c3e50;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #f1f3f4; font-weight: bold; color: #495057;">Email:</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #f1f3f4; color: #2c3e50;">
                  <a href="mailto:${email}" style="color: #007bff; text-decoration: none;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 8px 0; vertical-align: top; font-weight: bold; color: #495057;">Message:</td>
                <td style="padding: 8px 0; color: #2c3e50;">
                  <div style="background-color: #f8f9fa; padding: 15px; border-radius: 6px; border-left: 4px solid #007bff;">
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

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}

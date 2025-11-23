import { EmailTemplate } from "@/components/EmailTemplate";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["cresctelli@gmail.com"],
      subject: "Portfolio Contact Form",
      react: EmailTemplate({
        fullName: body.fullName,
        message: body.message,
        email: body.email,
        phone: body.phone,
      }),
    });
    if (error) throw error;

    return NextResponse.json({ success: true });
  } catch (e) {
    return NextResponse.json(
      { error: `Error during email sending. ${e}` },
      { status: 500 }
    );
  }
}

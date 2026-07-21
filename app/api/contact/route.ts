import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation";
import { sendEmail } from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the input using Zod
    const validationResult = contactSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          errors: validationResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { name, email, message } = validationResult.data;

    // Send the email
    const emailResult = await sendEmail({ name, email, message });

    return NextResponse.json(
      {
        success: true,
        message: "Message sent successfully!",
        provider: emailResult.provider,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Contact API encountered an error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An internal server error occurred while processing your message.",
      },
      { status: 500 }
    );
  }
}

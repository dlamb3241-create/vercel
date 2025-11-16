import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const company = body.company;
    const name = body.name;
    const email = body.email;
    const description = body.description;

    if (!company || !name || !email || !description) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Save submission to Supabase
    const { error } = await supabase.from("rfp_submissions").insert({
      company,
      name,
      email,
      description
    });

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json(
        { error: "Database error" },
        { status: 500 }
      );
    }

    // Trigger n8n workflow
    const webhookUrl = process.env.N8N_RFP_WEBHOOK_URL;

    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: "POST",
        body: JSON.stringify({
          company,
          name,
          email,
          description
        }),
        headers: { "Content-Type": "application/json" }
      });
    }

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}

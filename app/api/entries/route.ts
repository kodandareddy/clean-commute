import { sql } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { office_location, travel_mode, kilometers } = body;

    // Validate required fields
    if (!office_location || !travel_mode || !kilometers) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate kilometers
    const km = parseFloat(kilometers);
    if (isNaN(km) || km <= 0 || km > 999.99) {
      return NextResponse.json(
        { error: "Invalid kilometers value" },
        { status: 400 }
      );
    }

    // Insert entry into database
    const result = await sql`
      INSERT INTO commute_entries (office_location, travel_mode, kilometers)
      VALUES (${office_location}, ${travel_mode}, ${km})
      RETURNING id, logged_at, office_location, travel_mode, kilometers;
    `;

    return NextResponse.json(
      {
        message: "Entry logged successfully",
        entry: result.rows[0],
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Entry creation error:", error);
    return NextResponse.json(
      { error: "Failed to log entry" },
      { status: 500 }
    );
  }
}

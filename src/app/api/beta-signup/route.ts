import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, industry } = body;

    if (!firstName || !lastName || !email || !industry) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const signup = {
      firstName,
      lastName,
      email,
      industry,
      timestamp: new Date().toISOString(),
    };

    console.log("Beta signup:", signup);

    // Append to local JSON file
    const dataDir = path.join(process.cwd(), "data");
    const filePath = path.join(dataDir, "signups.json");

    let signups: typeof signup[] = [];
    try {
      const existing = await fs.readFile(filePath, "utf-8");
      signups = JSON.parse(existing);
    } catch {
      // File doesn't exist yet
    }

    signups.push(signup);

    try {
      await fs.mkdir(dataDir, { recursive: true });
      await fs.writeFile(filePath, JSON.stringify(signups, null, 2));
    } catch (writeErr) {
      // On read-only filesystems (Vercel), just log — data is in console
      console.log("Could not write to file (expected on Vercel):", writeErr);
    }

    return NextResponse.json({ success: true, message: "Signup recorded" });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

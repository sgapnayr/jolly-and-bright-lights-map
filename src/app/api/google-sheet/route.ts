import { google } from "googleapis";
import { NextRequest, NextResponse } from "next/server";
import path from "path";

// Replace this with your Google Sheet ID
const SHEET_ID = "14TImVz6e3xS_YFlbWkonIJCLHEtmVQdTt0BnAQzb6zk";
const RANGE = "Sheet1!A:F"; // Adjust based on your sheet name and columns

// Load the service account key file
const KEY_PATH = path.join(process.cwd(), "google-service-account.json");

const auth = new google.auth.GoogleAuth({
  keyFile: KEY_PATH,
  scopes: [
    "https://www.googleapis.com/auth/spreadsheets",
    "https://www.googleapis.com/auth/drive",
  ],
});

export async function GET() {
  try {
    const sheets = google.sheets({ version: "v4", auth });
    const result = await sheets.spreadsheets.values.get({
      spreadsheetId: SHEET_ID,
      range: RANGE,
    });

    const rows = result.data.values || [];
    const markers = rows.slice(1).map((row, index) => ({
      id: index + 1,
      name: row[1],
      lat: parseFloat(row[2]),
      lng: parseFloat(row[3]),
      photo: row[4],
      description: row[5],
    }));

    return NextResponse.json({ markers });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch data from Google Sheets" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const { name, lat, lng, photo, description } = await request.json();

    const sheets = google.sheets({ version: "v4", auth });
    await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: RANGE,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[Date.now(), name, lat, lng, photo, description]],
      },
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to update Google Sheets" },
      { status: 500 }
    );
  }
}

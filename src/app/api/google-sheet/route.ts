import { google } from "googleapis";
import type { NextApiRequest, NextApiResponse } from "next";

const sheets = google.sheets({
  version: "v4",
  auth: new google.auth.GoogleAuth({
    credentials: {
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  }),
});

// Replace with your actual Google Sheet ID from environment variables
const SPREADSHEET_ID = process.env.SPREADSHEET_ID;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const { name, lat, lng, photo, description } = req.body;

      // Validate input
      if (!name || !lat || !lng || !photo || !description) {
        return res.status(400).json({
          message:
            "All fields (name, lat, lng, photo, description) are required.",
        });
      }

      await sheets.spreadsheets.values.append({
        spreadsheetId: SPREADSHEET_ID,
        range: "Sheet1!A:E",
        valueInputOption: "USER_ENTERED",
        requestBody: {
          values: [[name, lat, lng, photo, description]],
        },
      });

      res.status(200).json({ message: "Data added successfully" });
    } catch (error) {
      console.error("Error appending data to Google Sheet:", error);
      res.status(500).json({ message: "Failed to add data" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}

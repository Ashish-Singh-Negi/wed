import { NextResponse } from "next/server";

export async function GET() {
  const icsContent = `
BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:Ria & Vivek's Wedding
DTSTART:20260306T063000Z
DTEND:20260306T120000Z
DESCRIPTION:Join us in celebrating the wedding of Ria & Vivek!
LOCATION:Hotel Fairmont, Udaipur, India
END:VEVENT
END:VCALENDAR
`;

  return new NextResponse(icsContent, {
    headers: {
      "Content-Type": "text/calendar",
      "Content-Disposition": "attachment; filename=ria-vivek-wedding.ics",
    },
  });
}

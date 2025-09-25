"use client";

import { motion } from "framer-motion";

export default function SmartCalendarButton() {
  const handleClick = () => {
    const userAgent = navigator.userAgent.toLowerCase();

    // Apple Devices → Use ICS (Apple Calendar)
    if (/iphone|ipad|macintosh/.test(userAgent)) {
      window.location.href = "/api/calendar";
      return;
    }

    // Google Calendar
    if (/android|chrome/.test(userAgent)) {
      window.open(
        "https://www.google.com/calendar/render?action=TEMPLATE&text=Ria+%26+Vivek's+Wedding&dates=20260306T063000Z/20260306T120000Z&details=Join+us+in+celebrating+the+wedding+of+Ria+%26+Vivek!&location=Hotel+Fairmont,+Udaipur,+India",
        "_blank"
      );
      return;
    }

    // Outlook
    if (/windows|edge|outlook/.test(userAgent)) {
      window.open(
        "https://outlook.live.com/calendar/0/deeplink/compose?subject=Ria%20%26%20Vivek's%20Wedding&body=Join%20us%20in%20celebrating%20the%20wedding%20of%20Ria%20%26%20Vivek!&startdt=2026-03-06T06:30:00Z&enddt=2026-03-06T12:00:00Z&location=Hotel%20Fairmont%2C%20Udaipur%2C%20India",
        "_blank"
      );
      return;
    }

    // Fallback → .ics
    window.location.href = "/api/calendar";
  };

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      className="font-calibri text-xs sm:text-sm uppercase tracking-[0.15em] px-8 py-3 bg-white text-[#d6c7a1] hover:scale-105 active:scale-95 rounded-sm transition-all duration-300 backdrop- shadow-lg"
    >
      Add To My Calendar
    </motion.button>
  );
}

"use client";

import axios from "axios";
import { useEffect, useState } from "react";

interface RSVP {
  name: string;
  contact: number;
  email: string;
  attending: "Yes" | "No" | "Maybe";
}

const HorizonAdminPage = () => {
  const [rsvps, setRsvps] = useState<RSVP[]>([]);

  const getAllRSVPs = async () => {
    try {
      const { data } = await axios.get("/api/rsvps");
      console.log(data);

      setRsvps(data.data);

      return data;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllRSVPs();
  }, []);

  return (
    <div className="min-h-screen bg-[#bba582]/90 relative overflow-hidden p-4">
      <main className="h-full w-full text-white font-alice">
        <div className="grid grid-cols-4 wrap-break-word">
          <p className="border-[1px] text-left px-2 py-1 font-semibold">Name</p>
          <p className="border-[1px] text-left px-2 py-1 font-semibold">
            Contact
          </p>
          <p className="border-[1px] text-left px-2 py-1 font-semibold">
            email
          </p>
          <p className="border-[1px] text-left px-2 py-1 font-semibold">
            Attending
          </p>
        </div>
        {rsvps.map((rsvp) => (
          <div key={rsvp.email} className="grid grid-cols-4 wrap-break-word">
            <p className="border-[1px] px-2 py-1">{rsvp.name}</p>
            <p className="border-[1px] px-2 py-1">{rsvp.contact}</p>
            <p className="border-[1px] px-2 py-1">{rsvp.email}</p>
            <p className="border-[1px] px-2 py-1">{rsvp.attending}</p>
          </div>
        ))}
      </main>
    </div>
  );
};
export default HorizonAdminPage;

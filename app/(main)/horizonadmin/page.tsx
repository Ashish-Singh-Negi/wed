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
  const [rsvps, setRsvps] = useState<RSVP[]>();

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
    <div className="min-h-screen bg-[#bba582]/80 relative overflow-hidden p-4">
      {rsvps &&
        rsvps.map((rsvp) => (
          <div
            key={rsvp.email}
            className="h-fit w-full bg-[#bba582] font-alice px-2 py-1 rounded-md text-white"
          >
            <p className="text-2xl">Name : {rsvp.name}</p>
            <p className="text-2xl">Contact : {rsvp.contact}</p>
            <p className="text-2xl">Email : {rsvp.email}</p>
            <p className="text-2xl">Attending : {rsvp.attending}</p>
          </div>
        ))}
    </div>
  );
};
export default HorizonAdminPage;

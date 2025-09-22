/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navigation from "@/app/components/Navigation";

export default function RSVPPage2() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    attending: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("RSVP Submitted:", formData);
    alert("Thank you for your RSVP!");
  };

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const fields = [
    { name: "name", type: "text", placeholder: "Full Name" },
    { name: "contact", type: "tel", placeholder: "Contact No" },
    { name: "email", type: "email", placeholder: "Email ID" },
  ];

  return (
    <div className="relative bg-white min-h-screen overflow-x-hidden">
      <Navigation />

      {/* Side Decorations */}
      <div className="absolute top-0 left-[-10px] h-full w-16 sm:w-24 md:w-48 bg-[url('/theme-left.svg')] bg-contain bg-no-repeat pointer-events-none"></div>
      <div className="absolute top-0 right-[-10px] h-full w-16 sm:w-24 md:w-48 bg-[url('/theme-right.svg')] bg-contain bg-no-repeat pointer-events-none"></div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative max-w-2xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-10 md:py-16"
      >
        {/* Title */}
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          className="text-[#5a4b2d] text-center mb-6 sm:mb-8 md:mb-10 text-2xl sm:text-4xl md:text-5xl font-trajanpro"
          style={{ marginTop: "5rem" }}
        >
          RSVP
        </motion.h1>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          variants={containerVariants}
          className="space-y-5 sm:space-y-6 md:space-y-8"
        >
          {/* Input Fields */}
          {fields.map((field, idx) => {
            const direction = idx % 2 === 0 ? -100 : 100;
            const variants = {
              hidden: { opacity: 0, x: direction },
              visible: { opacity: 1, x: 0 },
            };

            return (
              <motion.div key={field.name} variants={variants}>
                <input
                  type={field.type}
                  name={field.name}
                  value={(formData as any)[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  required
                  className="w-full bg-transparent border-0 border-b border-[#d6c7a1] focus:ring-0 focus:border-[#5a4b2d] placeholder-gray-500 py-2 sm:py-3 text-[#5a4b2d] font-alice"
                />
              </motion.div>
            );
          })}

          {/* Attendance */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
            className="mt-4 sm:mt-6"
          >
            <p className="text-sm font-medium text-[#5a4b2d] mb-2 sm:mb-3 font-alice">
              Attending the wedding
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              {["Yes", "No", "Maybe"].map((option) => (
                <label
                  key={option}
                  className="flex items-center cursor-pointer"
                >
                  <input
                    type="radio"
                    name="attending"
                    value={option}
                    checked={formData.attending === option}
                    onChange={handleChange}
                    className="text-[#5a4b2d] focus:ring-[#d6c7a1]"
                    required
                  />
                  <span className="ml-2 text-[#5a4b2d] font-alice">
                    {option}
                  </span>
                </label>
              ))}
            </div>
          </motion.div>

          {/* Submit */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 100 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-[#5a4b2d] text-white py-2 sm:py-3 rounded-lg font-medium font-trajanpro hover:bg-[#d6c7a1] hover:text-[#5a4b2d] transition"
            >
              Submit RSVP
            </motion.button>
          </motion.div>
        </motion.form>
      </motion.div>
    </div>
  );
}

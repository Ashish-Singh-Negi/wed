"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navigationItems = [
  { name: "WELCOME", href: "/welcome" },
  { name: "OUR STORY", href: "/our-story" },
  { name: "EVENTS", href: "/events" },
  { name: "RSVP", href: "/rsvp2" },
  { name: "FAQs", href: "/faqs" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Logic to determine the next page for navigation
  const currentPageIndex = navigationItems.findIndex(
    (item) => item.href === pathname
  );
  const nextPage =
    navigationItems[(currentPageIndex + 1) % navigationItems.length];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:block fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-amber-50/95 to-white/95 backdrop-blur-sm h-[20vh]">
        <div className="h-full flex flex-col justify-center items-center px-6">
          <div className="text-center mb-4">
            <h1 className="title text-3xl lg:text-4xl xl:text-5xl text-amber-900 mb-2">
              Ria & Vivek - Wedding Celebrations
            </h1>
            <p className="text-amber-800 text-sm lg:text-base tracking-widest uppercase">
              March 6<sup>Th</sup>, 2026
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-8 xl:gap-10">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`${
                  pathname === item.href && "border-b-2"
                } text-xs lg:text-sm tracking-wider transition-colors hover:text-amber-900 ${
                  pathname === item.href
                    ? "text-amber-900 font-medium"
                    : "text-amber-800"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* <div className="absolute top-4 right-4">
          <Link
            href="/rsvp"
            className="bg-amber-700 text-white px-4 py-2 text-xs tracking-wider hover:bg-amber-800 transition-colors"
          >
            RSVP
          </Link>
        </div> */}
      </nav>

      {/* Tablet Navigation (mobile-style) */}
      <div className="hidden md:flex lg:hidden fixed inset-0 z-50 flex-col">
        <header className="fixed top-0 left-0 right-0 z-40 bg-gradient-to-b from-amber-50/95 to-white/95 backdrop-blur-sm h-[10vh] flex items-center justify-center">
          <h1 className="title text-2xl text-amber-900">Ria & Vivek</h1>
        </header>
        <div className="h-[12vh]"></div>

        {/* Toggle Menu Button (Hamburger ↔ X) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          className="fixed bottom-4 left-4 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg text-amber-700 transition-all"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={isOpen ? "close" : "menu"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </AnimatePresence>
        </button>

        {/* Next Page Button */}
        <Link
          href={nextPage.href}
          aria-label="Go to next page"
          className="fixed bottom-4 right-4 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-[#F5D2D2] shadow-lg text-amber-700"
        >
          <ChevronRight size={24} />
        </Link>

        {/* Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/20"
              onClick={() => setIsOpen(false)}
            />
          )}
        </AnimatePresence>

        {/* Slide-up Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-[10vh] left-0 right-0 bottom-0 z-40 bg-white overflow-y-auto"
            >
              <div className="p-6">
                <nav className="flex flex-col divide-y divide-gray-200">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`block py-4 text-center tracking-wider text-sm ${
                        pathname === item.href
                          ? "text-amber-700 font-medium"
                          : "text-gray-800 hover:text-amber-600"
                      }`}
                    >
                      <span
                        className={`${
                          pathname === item.href &&
                          "border-b-2 border-amber-700"
                        }`}
                      >
                        {item.name}
                      </span>
                    </Link>
                  ))}
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <header className="fixed top-0 left-0 right-0 z-40 bg-gradient-to-b from-amber-50/95 to-white/95 backdrop-blur-sm h-[10vh] flex items-center justify-center">
          <h1 className="title text-2xl text-amber-900">Ria & Vivek</h1>
        </header>

        {/* Toggle Menu Button (Hamburger ↔ X) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          className="fixed bottom-4 left-4 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg text-amber-700 transition-all"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={isOpen ? "close" : "menu"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </AnimatePresence>
        </button>

        {/* Next Page Button */}
        <Link
          href={nextPage.href}
          aria-label="Go to next page"
          className="fixed bottom-4 right-4 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-[#F5D2D2] shadow-lg text-amber-700"
        >
          <ChevronRight size={24} />
        </Link>

        {/* Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/20"
              onClick={() => setIsOpen(false)}
            />
          )}
        </AnimatePresence>

        {/* Slide-in Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-[10vh] left-0 right-0 bottom-0 z-40 bg-white overflow-y-auto"
            >
              <div className="p-6">
                <nav className="flex flex-col divide-y divide-gray-200">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`block py-4 text-center tracking-wider text-sm ${
                        pathname === item.href
                          ? "text-amber-700 font-medium border-b-2"
                          : "text-gray-800 hover:text-amber-600"
                      }`}
                    >
                      <span
                        className={`${
                          pathname === item.href &&
                          "border-b-2 border-amber-700"
                        }`}
                      >
                        {item.name}
                      </span>
                    </Link>
                  ))}
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navLinks = [
  {
    url: "/",
    label: "Home",
  },
  {
    url: "#about",
    label: "About",
  },
  {
    url: "#pricing",
    label: "Pricing",
  },
  {
    url: "#services",
    label: "Services",
  },
  {
    url: "#testimonials",
    label: "Testimonials",
  },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="font-imperial from-primary to-custom-blue bg-gradient-to-r bg-clip-text text-[42px] font-bold text-transparent"
            >
              Bookkeepers at Work
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map(({ label, url }, i) => (
                <Link
                  key={i}
                  href={url}
                  className="hover:text-custom-blue text-primary transition-all duration-200 ease-linear"
                >
                  {label}
                </Link>
              ))}

              <a
                href="#contact"
                className="bg-primary hover:bg-primary-hover rounded-full px-6 py-2 text-white transition-all duration-200 active:scale-95"
              >
                Let&apos;s Connect
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-900 hover:text-blue-600"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="flex min-h-screen flex-col space-y-1 border-t border-gray-100 bg-white px-2 pt-2 pb-3 sm:px-3">
            {navLinks.map(({ label, url }, i) => (
              <Link
                key={i}
                href={url}
                className="px-3 py-2 text-[#122842] hover:text-[#8bbee7]"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

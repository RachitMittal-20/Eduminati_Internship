"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      setIsOpen(false);
      const id = href.slice(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm dark:bg-slate-900 dark:border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button 
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center space-x-2 hover:opacity-80 transition"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">EB</span>
            </div>
            <span className="hidden sm:inline font-bold text-purple-600 dark:text-purple-400 text-lg">
              Eduminati Boarding Guide
            </span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="text-slate-600 hover:text-purple-600 dark:text-slate-300 dark:hover:text-purple-400 transition"
            >
              Home
            </button>
            <Link
              href="#schools"
              onClick={(e) => handleAnchorClick(e, "#schools")}
              className="text-slate-600 hover:text-purple-600 dark:text-slate-300 dark:hover:text-purple-400 transition"
            >
              Schools
            </Link>
            <Link
              href="#comparison"
              onClick={(e) => handleAnchorClick(e, "#comparison")}
              className="text-slate-600 hover:text-purple-600 dark:text-slate-300 dark:hover:text-purple-400 transition"
            >
              Comparison
            </Link>
            <Link
              href="#contact"
              onClick={(e) => handleAnchorClick(e, "#contact")}
              className="text-slate-600 hover:text-purple-600 dark:text-slate-300 dark:hover:text-purple-400 transition"
            >
              Contact
            </Link>
            <Button 
              size="sm" 
              className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white"
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Enquire
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative w-8 h-8"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span
              className={`absolute w-full h-0.5 bg-slate-600 transition-all duration-300 ${
                isOpen ? "-rotate-45 top-3.5" : "top-2"
              }`}
            ></span>
            <span
              className={`absolute w-full h-0.5 bg-slate-600 top-3.5 transition-all duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`absolute w-full h-0.5 bg-slate-600 transition-all duration-300 ${
                isOpen ? "rotate-45 top-3.5" : "bottom-2"
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <button 
              onClick={() => {
                setIsOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="block w-full text-left py-2 text-slate-600 hover:text-purple-600 dark:text-slate-300 dark:hover:text-purple-400"
            >
              Home
            </button>
            <Link 
              href="#schools" 
              onClick={(e) => handleAnchorClick(e, "#schools")}
              className="block py-2 text-slate-600 hover:text-purple-600 dark:text-slate-300 dark:hover:text-purple-400"
            >
              Schools
            </Link>
            <Link 
              href="#comparison" 
              onClick={(e) => handleAnchorClick(e, "#comparison")}
              className="block py-2 text-slate-600 hover:text-purple-600 dark:text-slate-300 dark:hover:text-purple-400"
            >
              Comparison
            </Link>
            <Link 
              href="#contact" 
              onClick={(e) => handleAnchorClick(e, "#contact")}
              className="block py-2 text-slate-600 hover:text-purple-600 dark:text-slate-300 dark:hover:text-purple-400"
            >
              Contact
            </Link>
            <Button 
              size="sm" 
              className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white"
              onClick={() => {
                setIsOpen(false);
                const element = document.getElementById("contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Enquire
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}

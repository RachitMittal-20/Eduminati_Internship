"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, TrendingUp, Award, Users } from "lucide-react";
import { useState } from "react";

interface HeroSectionProps {
  onSearch?: (query: string) => void;
}

export function HeroSection({ onSearch }: HeroSectionProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchQuery);
      // Scroll to schools section
      setTimeout(() => {
        const schoolsSection = document.getElementById("schools");
        if (schoolsSection) {
          schoolsSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-purple-50 to-purple-100 dark:from-slate-900 dark:to-slate-800 py-16 md:py-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full opacity-10 -mr-32 -mt-32 dark:bg-purple-900"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 rounded-full opacity-10 -ml-32 -mb-32 dark:bg-purple-900"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-purple-900 dark:text-purple-100 leading-tight">
                Find Your Perfect Boarding School
              </h1>
              <p className="text-lg text-slate-700 dark:text-slate-300">
                Discover India's top 21 boarding schools with comprehensive information on fees, facilities, curriculum, and more.
              </p>
            </div>

            {/* Search Bar */}
            <div className="flex gap-2">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <Input
                  placeholder="Search by school name or city..."
                  className="pl-10 h-12 bg-white dark:bg-slate-800"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={handleKeyPress}
                />
              </div>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 px-8"
                onClick={handleSearch}
              >
                Search
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-sm">
                <div className="text-2xl font-bold text-purple-600">21</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Top Schools</div>
              </div>
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-sm">
                <div className="text-2xl font-bold text-purple-600">4.4★</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Avg Rating</div>
              </div>
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-sm">
                <div className="text-2xl font-bold text-purple-600">2026</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Latest Data</div>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Award className="w-5 h-5 text-purple-600" />
                <span className="text-slate-700 dark:text-slate-300">Verified & Updated Information</span>
              </div>
              <div className="flex items-center gap-3">
                <TrendingUp className="w-5 h-5 text-purple-600" />
                <span className="text-slate-700 dark:text-slate-300">Compare Schools Side-by-Side</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-purple-600" />
                <span className="text-slate-700 dark:text-slate-300">Student Reviews & Ratings</span>
              </div>
            </div>
          </div>

          {/* Right Side - Feature Box */}
          <div className="hidden md:block">
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 space-y-6">
              <div className="bg-gradient-to-br from-purple-100 to-purple-50 dark:from-purple-900 dark:to-slate-900 rounded-xl p-6 h-64 flex items-center justify-center">
                <div className="text-center space-y-2">
                  <div className="text-5xl">🎓</div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Compare schools on fees, facilities, and more
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-slate-900 dark:text-white">Key Features</h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                  <li>✓ Interactive comparison tool</li>
                  <li>✓ Detailed school profiles</li>
                  <li>✓ Fee calculator</li>
                  <li>✓ Student testimonials</li>
                  <li>✓ Virtual tours</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

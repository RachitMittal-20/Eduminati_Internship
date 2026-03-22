"use client";

import { useState, useMemo } from "react";
import { HeroSection } from "@/components/hero-section";
import { SchoolCard } from "@/components/school-card";
import FilterSidebar, { FilterState } from "@/components/filter-sidebar";
import ComparisonModal from "@/components/comparison-modal";
import SchoolDetailsModal from "@/components/school-details-modal";
import TestimonialsCarousel from "@/components/testimonials-carousel";
import PricingCalculator from "@/components/pricing-calculator";
import VirtualTours from "@/components/virtual-tours";
import BlogSection from "@/components/blog-section";
import ContactForm from "@/components/contact-form";
import { BoardingSchool, boardingSchools } from "@/lib/schools-data";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [filterExpanded, setFilterExpanded] = useState(false);
  const [showComparisonTab, setShowComparisonTab] = useState(false);
  const [selectedSchools, setSelectedSchools] = useState<BoardingSchool[]>([]);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [selectedSchoolForDetails, setSelectedSchoolForDetails] = useState<BoardingSchool | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState<FilterState>({
    location: [],
    curriculum: [],
    minFee: null,
    maxFee: null,
    grades: [],
    sports: [],
  });

  const handleCompare = (school: BoardingSchool) => {
    setSelectedSchools((prev) => {
      const isSelected = prev.some((s) => s.id === school.id);
      if (isSelected) {
        return prev.filter((s) => s.id !== school.id);
      } else {
        if (prev.length >= 4) {
          alert("You can compare up to 4 schools at a time");
          return prev;
        }
        return [...prev, school];
      }
    });
  };

  const handleDetails = (school: BoardingSchool) => {
    setSelectedSchoolForDetails(school);
    setShowDetailsModal(true);
  };

  // Filter logic
  const filteredSchools = useMemo(() => {
    return boardingSchools.filter((school) => {
      // Search filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesSearch = 
          school.name.toLowerCase().includes(query) ||
          school.city.toLowerCase().includes(query) ||
          school.state.toLowerCase().includes(query) ||
          school.location.toLowerCase().includes(query);
        if (!matchesSearch) return false;
      }

      // Location filter
      if (filters.location.length > 0 && !filters.location.includes(school.city)) {
        return false;
      }

      // Curriculum filter
      if (filters.curriculum.length > 0) {
        const hasCirculum = filters.curriculum.some((c) =>
          school.curriculum.includes(c)
        );
        if (!hasCirculum) return false;
      }

      // Fee range filter
      if (filters.minFee !== null && school.annualFees.min < filters.minFee) {
        return false;
      }
      if (filters.maxFee !== null && school.annualFees.max > filters.maxFee) {
        return false;
      }

      // Grades filter
      if (filters.grades.length > 0 && !filters.grades.includes(school.grades)) {
        return false;
      }

      // Sports filter
      if (filters.sports.length > 0) {
        const hasSports = filters.sports.some((sport) =>
          school.indoorSports.includes(sport) ||
          school.outdoorSports.includes(sport)
        );
        if (!hasSports) return false;
      }

      return true;
    });
  }, [filters, searchQuery]);

  return (
    <div className="w-full">
      <SchoolDetailsModal
        school={selectedSchoolForDetails}
        isOpen={showDetailsModal}
        onClose={() => {
          setShowDetailsModal(false);
          setSelectedSchoolForDetails(null);
        }}
      />

      {/* Hero Section */}
      <HeroSection onSearch={setSearchQuery} />

      {/* Comparison Tab Section */}
      {showComparisonTab && selectedSchools.length > 0 && (
        <section id="comparison-section" className="bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-950/30 dark:to-purple-900/30 border-b-2 border-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-purple-900 dark:text-purple-100 mb-2">
                  School Comparison
                </h2>
                <p className="text-purple-700 dark:text-purple-300">
                  Detailed comparison of {selectedSchools.length} selected schools
                </p>
              </div>
              <button
                onClick={() => setShowComparisonTab(false)}
                className="text-purple-600 hover:text-purple-900 dark:text-purple-400 dark:hover:text-purple-200 text-xl font-bold"
              >
                ✕
              </button>
            </div>

            {/* Comparison Table */}
            <div className="overflow-x-auto bg-white dark:bg-slate-900 rounded-lg border border-purple-200 dark:border-purple-800">
              <table className="w-full">
                <thead className="bg-purple-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Attribute</th>
                    {selectedSchools.map((school) => (
                      <th key={school.id} className="px-6 py-4 text-center font-semibold">
                        {school.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-purple-200 dark:divide-purple-800">
                  <tr className="hover:bg-purple-50 dark:hover:bg-purple-900/20">
                    <td className="px-6 py-4 font-semibold text-purple-900 dark:text-purple-100">Location</td>
                    {selectedSchools.map((school) => (
                      <td key={school.id} className="px-6 py-4 text-center text-slate-700 dark:text-slate-300">
                        {school.city}, {school.state}
                      </td>
                    ))}
                  </tr>
                  <tr className="hover:bg-purple-50 dark:hover:bg-purple-900/20">
                    <td className="px-6 py-4 font-semibold text-purple-900 dark:text-purple-100">Established</td>
                    {selectedSchools.map((school) => (
                      <td key={school.id} className="px-6 py-4 text-center text-slate-700 dark:text-slate-300">
                        {school.yearEstablished}
                      </td>
                    ))}
                  </tr>
                  <tr className="hover:bg-purple-50 dark:hover:bg-purple-900/20">
                    <td className="px-6 py-4 font-semibold text-purple-900 dark:text-purple-100">Type</td>
                    {selectedSchools.map((school) => (
                      <td key={school.id} className="px-6 py-4 text-center text-slate-700 dark:text-slate-300">
                        {school.type}
                      </td>
                    ))}
                  </tr>
                  <tr className="hover:bg-purple-50 dark:hover:bg-purple-900/20">
                    <td className="px-6 py-4 font-semibold text-purple-900 dark:text-purple-100">Grades</td>
                    {selectedSchools.map((school) => (
                      <td key={school.id} className="px-6 py-4 text-center text-slate-700 dark:text-slate-300">
                        {school.grades}
                      </td>
                    ))}
                  </tr>
                  <tr className="hover:bg-purple-50 dark:hover:bg-purple-900/20">
                    <td className="px-6 py-4 font-semibold text-purple-900 dark:text-purple-100">Curriculum</td>
                    {selectedSchools.map((school) => (
                      <td key={school.id} className="px-6 py-4 text-center text-slate-700 dark:text-slate-300">
                        {school.curriculum.join(", ")}
                      </td>
                    ))}
                  </tr>
                  <tr className="hover:bg-purple-50 dark:hover:bg-purple-900/20 bg-amber-50 dark:bg-amber-900/10">
                    <td className="px-6 py-4 font-semibold text-purple-900 dark:text-purple-100">Annual Fees</td>
                    {selectedSchools.map((school) => (
                      <td key={school.id} className="px-6 py-4 text-center font-semibold text-amber-700 dark:text-amber-400">
                        Rs. {(school.annualFees.min / 100000).toFixed(1)}L - Rs. {(school.annualFees.max / 100000).toFixed(1)}L
                      </td>
                    ))}
                  </tr>
                  <tr className="hover:bg-purple-50 dark:hover:bg-purple-900/20">
                    <td className="px-6 py-4 font-semibold text-purple-900 dark:text-purple-100">Rating</td>
                    {selectedSchools.map((school) => (
                      <td key={school.id} className="px-6 py-4 text-center text-slate-700 dark:text-slate-300">
                        <span className="inline-flex items-center gap-1">
                          ⭐ {school.rating} <span className="text-sm">({school.reviews} reviews)</span>
                        </span>
                      </td>
                    ))}
                  </tr>
                  <tr className="hover:bg-purple-50 dark:hover:bg-purple-900/20">
                    <td className="px-6 py-4 font-semibold text-purple-900 dark:text-purple-100">Student Capacity</td>
                    {selectedSchools.map((school) => (
                      <td key={school.id} className="px-6 py-4 text-center text-slate-700 dark:text-slate-300">
                        {school.studentCapacity || "N/A"}
                      </td>
                    ))}
                  </tr>
                  <tr className="hover:bg-purple-50 dark:hover:bg-purple-900/20">
                    <td className="px-6 py-4 font-semibold text-purple-900 dark:text-purple-100">Teacher:Student Ratio</td>
                    {selectedSchools.map((school) => (
                      <td key={school.id} className="px-6 py-4 text-center text-slate-700 dark:text-slate-300">
                        {school.teacherStudentRatio || "N/A"}
                      </td>
                    ))}
                  </tr>
                  <tr className="hover:bg-purple-50 dark:hover:bg-purple-900/20">
                    <td className="px-6 py-4 font-semibold text-purple-900 dark:text-purple-100">Indoor Sports</td>
                    {selectedSchools.map((school) => (
                      <td key={school.id} className="px-6 py-4 text-center text-slate-700 dark:text-slate-300 text-sm">
                        {school.indoorSports.join(", ")}
                      </td>
                    ))}
                  </tr>
                  <tr className="hover:bg-purple-50 dark:hover:bg-purple-900/20">
                    <td className="px-6 py-4 font-semibold text-purple-900 dark:text-purple-100">Outdoor Sports</td>
                    {selectedSchools.map((school) => (
                      <td key={school.id} className="px-6 py-4 text-center text-slate-700 dark:text-slate-300 text-sm">
                        {school.outdoorSports.join(", ")}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* Schools Section */}
      <section id="schools" className="py-16 md:py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-900 dark:text-purple-100 mb-4">
              India's Top 21 Boarding Schools
            </h2>
            <p className="text-lg text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
              Explore comprehensive information about the best boarding schools in India. Compare facilities, fees, and find the perfect match for your child.
            </p>
          </div>

          {/* Top Filter Bar */}
          <div className="mb-8">
            <button
              onClick={() => setFilterExpanded(!filterExpanded)}
              className="w-full flex items-center justify-between p-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all font-semibold text-lg"
            >
              <span>🔍 {filterExpanded ? "Hide Filters" : "Show Filters"}</span>
              <span>{filterExpanded ? "▼" : "▶"}</span>
            </button>

            {/* Expanded Filter Panel */}
            {filterExpanded && (
              <div className="mt-4 p-6 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                <FilterSidebar
                  schools={boardingSchools}
                  onFilterChange={setFilters}
                />
              </div>
            )}
          </div>

          {/* Compare Info Banner */}
          {selectedSchools.length > 0 && (
            <div className="mb-8 p-4 bg-gradient-to-r from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/20 border border-amber-300 dark:border-amber-700 rounded-lg flex items-center justify-between">
              <p className="text-amber-900 dark:text-amber-100">
                <strong>{selectedSchools.length} schools selected for comparison</strong>
              </p>
              <Button
                onClick={() => {
                  setShowComparisonTab(true);
                  setTimeout(() => {
                    const comparisonSection = document.getElementById("comparison-section");
                    if (comparisonSection) {
                      comparisonSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }, 100);
                }}
                className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold"
              >
                View Comparison Table
              </Button>
            </div>
          )}

          {/* Results Count */}
          <div className="mb-6 text-sm text-slate-600 dark:text-slate-400 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-purple-600"></span>
            Showing {filteredSchools.length} of {boardingSchools.length} schools
          </div>

          {/* Schools Grid - Full Width */}
          {filteredSchools.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSchools.map((school) => (
                <SchoolCard
                  key={school.id}
                  school={school}
                  onCompare={handleCompare}
                  onDetails={handleDetails}
                  isSelected={selectedSchools.some((s) => s.id === school.id)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                No schools match your filters. Try adjusting your search criteria.
              </p>
              <Button
                onClick={() => setFilters({
                  location: [],
                  curriculum: [],
                  minFee: null,
                  maxFee: null,
                  grades: [],
                  sports: [],
                })}
                variant="outline"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-slate-900 dark:to-purple-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-900 dark:text-purple-100 mb-4">
              Powerful Tools for School Selection
            </h2>
            <p className="text-lg text-purple-700 dark:text-purple-300">
              Use our interactive tools to find and compare boarding schools
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-purple-200 dark:border-purple-800">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-bold text-purple-900 dark:text-purple-100 mb-2">Advanced Search</h3>
              <p className="text-slate-700 dark:text-slate-300">
                Find schools by location, curriculum, fees, facilities, and sports programs
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-purple-200 dark:border-purple-800">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">⚖️</span>
              </div>
              <h3 className="text-xl font-bold text-purple-900 dark:text-purple-100 mb-2">Easy Comparison</h3>
              <p className="text-slate-700 dark:text-slate-300">
                Compare multiple schools side-by-side with detailed information in tabular format
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-purple-200 dark:border-purple-800">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-bold text-purple-900 dark:text-purple-100 mb-2">Detailed Analytics</h3>
              <p className="text-slate-700 dark:text-slate-300">
                In-depth insights into fees, facilities, academic performance, and student reviews
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <TestimonialsCarousel />

      {/* Pricing Calculator */}
      <div id="comparison">
        <PricingCalculator />
      </div>

      {/* Virtual Tours */}
      <VirtualTours />

      {/* Blog Section */}
      <BlogSection />

      {/* Contact Form */}
      <div id="contact">
        <ContactForm />
      </div>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-purple-600 to-purple-800 dark:from-purple-900 dark:to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Choose the Perfect School?
          </h2>
          <p className="text-lg text-purple-100 mb-8">
            Get personalized recommendations and speak with our education counselors
          </p>
          <button className="bg-white text-purple-600 hover:bg-purple-50 font-bold py-3 px-8 rounded-lg transition inline-block">
            Schedule Free Consultation
          </button>
        </div>
      </section>
    </div>
  );
}

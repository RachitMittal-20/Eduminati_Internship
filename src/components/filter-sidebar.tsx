"use client"

import React, { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"
import { BoardingSchool } from "@/lib/schools-data"

interface FilterSidebarProps {
  onFilterChange: (filters: FilterState) => void
  schools: BoardingSchool[]
}

export interface FilterState {
  location: string[]
  curriculum: string[]
  minFee: number | null
  maxFee: number | null
  grades: string[]
  sports: string[]
}

const FILTER_OPTIONS = {
  locations: ["Dehradun", "Shimla", "Ajmer", "Pune", "Bangalore"],
  curriculums: ["CBSE", "ICSE", "IB", "State Board"],
  grades: ["6-12", "9-12", "1-12", "6-8"],
  sports: ["Cricket", "Football", "Basketball", "Tennis", "Volleyball", "Swimming"],
}

export default function FilterSidebar({ onFilterChange, schools }: FilterSidebarProps) {
  const [filters, setFilters] = useState<FilterState>({
    location: [],
    curriculum: [],
    minFee: null,
    maxFee: null,
    grades: [],
    sports: [],
  })

  // Notify parent when filters change
  useEffect(() => {
    onFilterChange(filters)
  }, [filters, onFilterChange])

  const handleLocationToggle = (location: string) => {
    setFilters((prev) => ({
      ...prev,
      location: prev.location.includes(location)
        ? prev.location.filter((l) => l !== location)
        : [...prev.location, location],
    }))
  }

  const handleCurriculumToggle = (curriculum: string) => {
    setFilters((prev) => ({
      ...prev,
      curriculum: prev.curriculum.includes(curriculum)
        ? prev.curriculum.filter((c) => c !== curriculum)
        : [...prev.curriculum, curriculum],
    }))
  }

  const handleGradeToggle = (grade: string) => {
    setFilters((prev) => ({
      ...prev,
      grades: prev.grades.includes(grade)
        ? prev.grades.filter((g) => g !== grade)
        : [...prev.grades, grade],
    }))
  }

  const handleSportToggle = (sport: string) => {
    setFilters((prev) => ({
      ...prev,
      sports: prev.sports.includes(sport)
        ? prev.sports.filter((s) => s !== sport)
        : [...prev.sports, sport],
    }))
  }

  const handleMinFeeChange = (value: string) => {
    const minFee = value ? parseInt(value) : null
    setFilters((prev) => ({
      ...prev,
      minFee,
    }))
  }

  const handleMaxFeeChange = (value: string) => {
    const maxFee = value ? parseInt(value) : null
    setFilters((prev) => ({
      ...prev,
      maxFee,
    }))
  }

  const clearFilters = () => {
    const emptyFilters: FilterState = {
      location: [],
      curriculum: [],
      minFee: null,
      maxFee: null,
      grades: [],
      sports: [],
    }
    setFilters(emptyFilters)
  }

  const activeFilterCount = [
    filters.location.length,
    filters.curriculum.length,
    filters.minFee ? 1 : 0,
    filters.maxFee ? 1 : 0,
    filters.grades.length,
    filters.sports.length,
  ].reduce((a, b) => a + b, 0)

  return (
    <Card className="sticky top-24 h-fit">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg">Filters</CardTitle>
            <CardDescription>Refine your search</CardDescription>
          </div>
          {activeFilterCount > 0 && (
            <Badge variant="secondary" className="rounded-full">
              {activeFilterCount}
            </Badge>
          )}
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Location Filter */}
        <div>
          <h3 className="mb-3 font-semibold text-sm">Location</h3>
          <div className="space-y-2">
            {FILTER_OPTIONS.locations.map((location) => (
              <label key={location} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.location.includes(location)}
                  onChange={() => handleLocationToggle(location)}
                  className="w-4 h-4 rounded border-gray-300"
                />
                <span className="text-sm">{location}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Curriculum Filter */}
        <div>
          <h3 className="mb-3 font-semibold text-sm">Curriculum</h3>
          <div className="space-y-2">
            {FILTER_OPTIONS.curriculums.map((curriculum) => (
              <label key={curriculum} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.curriculum.includes(curriculum)}
                  onChange={() => handleCurriculumToggle(curriculum)}
                  className="w-4 h-4 rounded border-gray-300"
                />
                <span className="text-sm">{curriculum}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Fee Range Filter */}
        <div>
          <h3 className="mb-3 font-semibold text-sm">Annual Fees (₹ Lakhs)</h3>
          <div className="space-y-2">
            <div>
              <label className="text-xs text-gray-600">Min</label>
              <Input
                type="number"
                placeholder="Min fee"
                value={filters.minFee || ""}
                onChange={(e) => handleMinFeeChange(e.target.value)}
                className="mt-1"
              />
            </div>
            <div>
              <label className="text-xs text-gray-600">Max</label>
              <Input
                type="number"
                placeholder="Max fee"
                value={filters.maxFee || ""}
                onChange={(e) => handleMaxFeeChange(e.target.value)}
                className="mt-1"
              />
            </div>
          </div>
        </div>

        {/* Grades Filter */}
        <div>
          <h3 className="mb-3 font-semibold text-sm">Grades Offered</h3>
          <div className="space-y-2">
            {FILTER_OPTIONS.grades.map((grade) => (
              <label key={grade} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.grades.includes(grade)}
                  onChange={() => handleGradeToggle(grade)}
                  className="w-4 h-4 rounded border-gray-300"
                />
                <span className="text-sm">{grade}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Sports Filter */}
        <div>
          <h3 className="mb-3 font-semibold text-sm">Sports Facilities</h3>
          <div className="space-y-2">
            {FILTER_OPTIONS.sports.map((sport) => (
              <label key={sport} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.sports.includes(sport)}
                  onChange={() => handleSportToggle(sport)}
                  className="w-4 h-4 rounded border-gray-300"
                />
                <span className="text-sm">{sport}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Clear Filters Button */}
        {activeFilterCount > 0 && (
          <Button
            onClick={clearFilters}
            variant="outline"
            size="sm"
            className="w-full"
          >
            Clear All Filters
          </Button>
        )}
      </CardContent>
    </Card>
  )
}

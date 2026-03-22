"use client"

import React from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { X, Download } from "lucide-react"
import { BoardingSchool } from "@/lib/schools-data"
import { formatCurrency, formatFeeRange } from "@/lib/utils"

interface ComparisonModalProps {
  selectedSchools: BoardingSchool[]
  onClose: () => void
}

export default function ComparisonModal({
  selectedSchools,
  onClose,
}: ComparisonModalProps) {
  if (selectedSchools.length === 0) {
    return null
  }

  const handleDownloadPDF = () => {
    // Placeholder for PDF export functionality
    alert("PDF export coming soon! You can take a screenshot for now.")
  }

  const comparisonRows = [
    { label: "Location", key: "location" },
    { label: "Type", key: "type" },
    { label: "Established", key: "yearEstablished" },
    { label: "Annual Fees (Lakhs)", key: "annualFees" },
    { label: "Curriculum", key: "curriculum" },
    { label: "Grades", key: "grades" },
    { label: "Rating", key: "rating" },
    { label: "Reviews", key: "reviews" },
    { label: "Indoor Sports", key: "indoorSports" },
    { label: "Outdoor Sports", key: "outdoorSports" },
  ]

  const renderValue = (school: BoardingSchool, key: string): React.ReactNode => {
    const value = school[key as keyof BoardingSchool]

    if (key === "annualFees") {
      const fees = value as { min: number; max: number }
      return formatFeeRange(fees.min, fees.max)
    }

    if (key === "curriculum") {
      const arr = value as string[]
      return arr.join(", ")
    }

    if (key === "indoorSports" || key === "outdoorSports") {
      const arr = value as string[]
      return (
        <div className="flex flex-wrap gap-1">
          {arr.slice(0, 3).map((sport, idx) => (
            <Badge key={idx} variant="secondary" className="text-xs">
              {sport}
            </Badge>
          ))}
          {arr.length > 3 && (
            <Badge variant="secondary" className="text-xs">
              +{arr.length - 3}
            </Badge>
          )}
        </div>
      )
    }

    if (key === "rating") {
      return `${value} ⭐`
    }

    if (key === "reviews") {
      return `${value} reviews`
    }

    if (key === "grades") {
      return String(value)
    }

    return String(value || "N/A")
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
      <Card className="w-full max-w-6xl max-h-[90vh] overflow-hidden flex flex-col">
        <CardHeader className="flex flex-row items-center justify-between border-b pb-4">
          <div>
            <CardTitle>School Comparison</CardTitle>
            <CardDescription>
              Comparing {selectedSchools.length} school{selectedSchools.length !== 1 ? "s" : ""}
            </CardDescription>
          </div>
          <div className="flex gap-2">
            <Button
              onClick={handleDownloadPDF}
              variant="outline"
              size="sm"
              className="gap-2"
            >
              <Download className="w-4 h-4" />
              Export PDF
            </Button>
            <Button
              onClick={onClose}
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </CardHeader>

        <CardContent className="flex-1 overflow-auto p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader className="sticky top-0 bg-slate-50">
                <TableRow>
                  <TableHead className="min-w-[150px] bg-slate-50 font-semibold">
                    School Features
                  </TableHead>
                  {selectedSchools.map((school) => (
                    <TableHead key={school.id} className="min-w-[200px] text-center">
                      <div className="font-semibold text-sm">{school.name}</div>
                      <div className="text-xs text-gray-500">{school.city}</div>
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>

              <TableBody>
                {comparisonRows.map((row) => (
                  <TableRow key={row.key}>
                    <TableCell className="font-medium text-sm bg-slate-50">
                      {row.label}
                    </TableCell>
                    {selectedSchools.map((school) => (
                      <TableCell key={school.id} className="text-sm text-center">
                        {renderValue(school, row.key)}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}

                {/* Description Row */}
                <TableRow>
                  <TableCell className="font-medium text-sm bg-slate-50">
                    Description
                  </TableCell>
                  {selectedSchools.map((school) => (
                    <TableCell key={school.id} className="text-sm">
                      <p className="line-clamp-3 text-gray-600">
                        {school.description}
                      </p>
                    </TableCell>
                  ))}
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </CardContent>

        <div className="border-t p-4 flex justify-end gap-2 bg-slate-50">
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
          <Button onClick={handleDownloadPDF}>
            Download Comparison
          </Button>
        </div>
      </Card>
    </div>
  )
}

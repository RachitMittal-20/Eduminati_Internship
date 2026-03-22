"use client";

import Image from "next/image";
import { Star, MapPin, Users, BookOpen } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BoardingSchool } from "@/lib/schools-data";
import { formatCurrency } from "@/lib/utils";

interface SchoolCardProps {
  school: BoardingSchool;
  onCompare?: (school: BoardingSchool) => void;
  onDetails?: (school: BoardingSchool) => void;
  isSelected?: boolean;
}

export function SchoolCard({ school, onCompare, onDetails, isSelected }: SchoolCardProps) {
  return (
    <Card className={`overflow-hidden hover:shadow-lg transition-shadow ${isSelected ? "ring-2 ring-purple-500" : ""}`}>
      {/* Image Container */}
      <div className="relative h-48 w-full overflow-hidden bg-slate-200">
        <Image
          src={school.imageUrl}
          alt={school.name}
          width={400}
          height={300}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
          unoptimized={school.imageUrl.startsWith("/")}
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all" />
      </div>

      {/* Content */}
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1">
            <h3 className="font-bold text-lg leading-tight text-slate-900 line-clamp-2">
              {school.name}
            </h3>
            <div className="flex items-center gap-1 mt-2 text-sm text-slate-600">
              <MapPin className="w-4 h-4" />
              <span className="line-clamp-1">{school.city}, {school.state}</span>
            </div>
          </div>
          <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-semibold text-slate-900">{school.rating}</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col">
            <span className="text-xs text-slate-500">Annual Fees</span>
            <span className="text-sm font-semibold text-slate-900">
              Rs. {(school.annualFees.min / 100000).toFixed(1)}L
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-slate-500">Curriculum</span>
            <span className="text-xs font-semibold text-slate-900 line-clamp-1">
              {school.curriculum.join(", ")}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-slate-500">Type</span>
            <span className="text-sm font-semibold text-slate-900">{school.type}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-slate-500">Grades</span>
            <span className="text-sm font-semibold text-slate-900">{school.grades}</span>
          </div>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">{school.yearEstablished}</Badge>
          <Badge className="bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:from-purple-700 hover:to-purple-800">{school.reviews} Reviews</Badge>
        </div>

        {/* Description Preview */}
        <p className="text-xs text-slate-600 line-clamp-2">
          {school.description}
        </p>

        {/* Sports Overview */}
        <div className="bg-purple-50 dark:bg-purple-950/30 rounded-lg p-2">
          <div className="text-xs font-semibold text-purple-900 dark:text-purple-100 mb-1">Sports Facilities</div>
          <div className="text-xs text-purple-700 dark:text-purple-300 line-clamp-2">
            {[...school.indoorSports, ...school.outdoorSports].slice(0, 3).join(", ")}...
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2 pt-2">
          <Button
            variant="outline"
            size="sm"
            className="flex-1"
            onClick={() => onCompare?.(school)}
          >
            Compare
          </Button>
          <Button 
            size="sm" 
            className="flex-1 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white"
            onClick={() => onDetails?.(school)}
          >
            Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

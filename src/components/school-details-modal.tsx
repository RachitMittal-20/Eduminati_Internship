"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { BoardingSchool } from "@/lib/schools-data";
import { MapPin, Phone, Globe, Users, BookOpen } from "lucide-react";

interface SchoolDetailsModalProps {
  school: BoardingSchool | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function SchoolDetailsModal({ school, isOpen, onClose }: SchoolDetailsModalProps) {
  const [currentTourIndex, setCurrentTourIndex] = useState(0);

  if (!school) return null;

  const tourImages = school.tourImages || [school.imageUrl];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{school.name}</DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="facilities">Facilities</TabsTrigger>
            <TabsTrigger value="tour">Virtual Tour</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-4">
            <div className="relative w-full h-64">
              <Image
                src={school.imageUrl}
                alt={school.name}
                width={600}
                height={400}
                className="w-full h-full object-cover rounded-lg"
                unoptimized={school.imageUrl.startsWith("/")}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-600">Location</p>
                  <p className="font-medium">{school.location}</p>
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-600">Year Established</p>
                <p className="font-medium">{school.yearEstablished}</p>
              </div>

              <div>
                <p className="text-sm text-gray-600">Grades</p>
                <p className="font-medium">{school.grades}</p>
              </div>

              <div>
                <p className="text-sm text-gray-600">Type</p>
                <Badge variant="outline">{school.type}</Badge>
              </div>
            </div>

            <div>
              <p className="text-sm text-gray-600 mb-2">Curriculum</p>
              <div className="flex gap-2 flex-wrap">
                {school.curriculum.map((curr) => (
                  <Badge key={curr}>{curr}</Badge>
                ))}
              </div>
            </div>

            <div>
              <p className="font-semibold text-lg mb-2">About</p>
              <p className="text-gray-700">{school.detailedDescription || school.aboutSchool}</p>
            </div>

            <div>
              <p className="font-semibold text-lg mb-2">Annual Fees</p>
              <p className="text-gray-700">
                ₹{(school.annualFees.min / 100000).toFixed(1)}L - ₹{(school.annualFees.max / 100000).toFixed(1)}L
              </p>
            </div>

            {school.studentCapacity && (
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start gap-2">
                    <Users className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-600">Student Capacity</p>
                    <p className="font-medium">{school.studentCapacity}</p>
                  </div>
                </div>

                {school.teacherStudentRatio && (
                  <div className="flex items-start gap-2">
                    <BookOpen className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-600">Teacher:Student Ratio</p>
                      <p className="font-medium">{school.teacherStudentRatio}</p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </TabsContent>

          {/* Facilities Tab */}
          <TabsContent value="facilities" className="space-y-4">
            <div>
              <p className="font-semibold text-lg text-gray-900 mb-3">School Facilities</p>
              <div className="grid grid-cols-2 gap-3">
                {school.facilities.map((facility) => (
                  <div
                    key={facility}
                    className="flex items-center gap-2 p-3 bg-purple-100 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800"
                  >
                    <div className="w-2 h-2 bg-purple-600 rounded-full flex-shrink-0" />
                    <span className="text-gray-900 dark:text-gray-100 font-medium text-sm">{facility}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <p className="font-semibold text-lg text-gray-900 mb-3">Sports</p>
              <div>
                <p className="text-sm font-semibold text-gray-800 mb-2">Indoor Sports</p>
                <div className="flex gap-2 flex-wrap mb-4">
                  {school.indoorSports.map((sport) => (
                    <Badge key={sport} className="bg-purple-100 dark:bg-purple-900 text-purple-900 dark:text-purple-100">
                      {sport}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-800 mb-2">Outdoor Sports</p>
                <div className="flex gap-2 flex-wrap">
                  {school.outdoorSports.map((sport) => (
                    <Badge key={sport} className="bg-purple-100 dark:bg-purple-900 text-purple-900 dark:text-purple-100">
                      {sport}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Virtual Tour Tab */}
          <TabsContent value="tour" className="space-y-4">
            <div className="relative w-full h-96 bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src={tourImages[currentTourIndex]}
                alt={`${school.name} tour ${currentTourIndex + 1}`}
                width={800}
                height={600}
                className="w-full h-full object-cover"
                unoptimized={tourImages[currentTourIndex].startsWith("/")}
              />
            </div>

            <div className="flex justify-between items-center gap-2">
              <Button
                variant="outline"
                onClick={() => setCurrentTourIndex((i) => (i === 0 ? tourImages.length - 1 : i - 1))}
              >
                Previous
              </Button>

              <div className="flex gap-1">
                {tourImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTourIndex(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentTourIndex ? "bg-purple-600 w-8" : "bg-gray-300 w-2"
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                onClick={() => setCurrentTourIndex((i) => (i === tourImages.length - 1 ? 0 : i + 1))}
              >
                Next
              </Button>
            </div>

            <p className="text-center text-sm text-gray-600">
              View {currentTourIndex + 1} of {tourImages.length}
            </p>
          </TabsContent>

          {/* Contact Tab */}
          <TabsContent value="contact" className="space-y-4">
            {school.website && (
              <div className="flex items-start gap-3 p-4 bg-purple-100 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
                <Globe className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">Website</p>
                  <a
                    href={school.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-purple-600 dark:text-purple-400 hover:underline"
                  >
                    {school.website}
                  </a>
                </div>
              </div>
            )}

            {school.contact && (
              <div className="flex items-start gap-3 p-4 bg-purple-100 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
                <Phone className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">Phone</p>
                  <p className="font-medium text-gray-900 dark:text-gray-100">{school.contact}</p>
                </div>
              </div>
            )}

            <div className="pt-4">
              <Button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white">
                Request Admission
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}

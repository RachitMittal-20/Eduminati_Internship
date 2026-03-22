"use client"

import React, { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { boardingSchools } from "@/lib/schools-data"

interface GalleryImage {
  id: string
  title: string
  url: string
  caption: string
}

// Sample gallery images for each school
const schoolGalleries: Record<string, GalleryImage[]> = {
  ecole_globale: [
    {
      id: "1",
      title: "Main Campus",
      url: "https://images.unsplash.com/photo-1427504494829-991c6402078e?w=800&h=600&fit=crop",
      caption: "Beautiful main campus building with modern architecture",
    },
    {
      id: "2",
      title: "Classroom",
      url: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&h=600&fit=crop",
      caption: "State-of-the-art classrooms with interactive learning",
    },
    {
      id: "3",
      title: "Sports Ground",
      url: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=600&fit=crop",
      caption: "Well-maintained sports fields and facilities",
    },
    {
      id: "4",
      title: "Library",
      url: "https://images.unsplash.com/photo-150784272343-583f20270319?w=800&h=600&fit=crop",
      caption: "Comprehensive library with extensive book collection",
    },
    {
      id: "5",
      title: "Hostel",
      url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
      caption: "Comfortable and safe hostel accommodations",
    },
    {
      id: "6",
      title: "Dining Hall",
      url: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
      caption: "Modern dining facility with nutritious meals",
    },
  ],
  doon_school: [
    {
      id: "1",
      title: "Heritage Campus",
      url: "https://images.unsplash.com/photo-1427504494829-991c6402078e?w=800&h=600&fit=crop",
      caption: "Historic buildings with modern amenities",
    },
    {
      id: "2",
      title: "Academic Block",
      url: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&h=600&fit=crop",
      caption: "Advanced academic facilities",
    },
    {
      id: "3",
      title: "Cricket Ground",
      url: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=600&fit=crop",
      caption: "Professional cricket ground",
    },
    {
      id: "4",
      title: "Swimming Pool",
      url: "https://images.unsplash.com/photo-1576610616656-570756a42d26?w=800&h=600&fit=crop",
      caption: "Olympic-size swimming pool",
    },
    {
      id: "5",
      title: "Dormitory",
      url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
      caption: "Spacious student dormitories",
    },
    {
      id: "6",
      title: "Auditorium",
      url: "https://images.unsplash.com/photo-1567427205491-668c87f661ba?w=800&h=600&fit=crop",
      caption: "Multi-purpose auditorium",
    },
  ],
}

export default function VirtualTours() {
  const [selectedSchoolId, setSelectedSchoolId] = useState(boardingSchools[0].id)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [showLightbox, setShowLightbox] = useState(false)

  const school = boardingSchools.find((s) => s.id === selectedSchoolId)
  const gallery = schoolGalleries[selectedSchoolId.toLowerCase().replace(/ /g, "_")] || schoolGalleries["ecole_globale"]

  const currentImage = gallery[selectedImageIndex]

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % gallery.length)
  }

  const prevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + gallery.length) % gallery.length)
  }

  return (
    <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Virtual School Tours
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
            Explore our boarding schools through immersive photo galleries of campus facilities, classrooms, and student life
          </p>
        </div>

        {/* School Selection */}
        <div className="mb-8 flex flex-wrap gap-2 justify-center">
          {boardingSchools.slice(0, 5).map((s) => (
            <Button
              key={s.id}
              onClick={() => {
                setSelectedSchoolId(s.id)
                setSelectedImageIndex(0)
              }}
              variant={selectedSchoolId === s.id ? "default" : "outline"}
              className={selectedSchoolId === s.id ? "bg-blue-600" : ""}
            >
              {s.name.split(",")[0]}
            </Button>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Image */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden">
              <div className="relative bg-slate-200 dark:bg-slate-800 h-96 md:h-[500px] flex items-center justify-center">
                <img
                  src={currentImage.url}
                  alt={currentImage.title}
                  className="w-full h-full object-cover cursor-pointer hover:opacity-90 transition"
                  onClick={() => setShowLightbox(true)}
                />

                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white dark:bg-slate-800/80 p-2 rounded-full transition"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white dark:bg-slate-800/80 p-2 rounded-full transition"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                  {selectedImageIndex + 1} / {gallery.length}
                </div>
              </div>

              {/* Image Info */}
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {currentImage.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  {currentImage.caption}
                </p>
                <Button
                  onClick={() => setShowLightbox(true)}
                  variant="outline"
                  className="w-full"
                >
                  View Full Size
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Thumbnail Grid */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Gallery</CardTitle>
                <CardDescription>{school?.name}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {gallery.map((image, index) => (
                    <div
                      key={image.id}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`relative cursor-pointer rounded-lg overflow-hidden h-24 flex items-center justify-center border-2 transition ${
                        index === selectedImageIndex
                          ? "border-blue-600 ring-2 ring-blue-400 dark:ring-blue-500"
                          : "border-slate-200 dark:border-slate-700 hover:border-blue-400"
                      }`}
                    >
                      <img
                        src={image.url}
                        alt={image.title}
                        className="w-full h-full object-cover"
                      />
                      {index === selectedImageIndex && (
                        <div className="absolute inset-0 bg-blue-600/20"></div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Lightbox Modal */}
        {showLightbox && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
            <button
              onClick={() => setShowLightbox(false)}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 p-2 rounded-full transition"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-3 rounded-full transition"
            >
              <ChevronLeft className="w-8 h-8 text-white" />
            </button>

            <div className="max-w-4xl w-full">
              <img
                src={currentImage.url}
                alt={currentImage.title}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              <div className="text-center text-white mt-4">
                <p className="text-lg font-semibold">{currentImage.title}</p>
                <p className="text-sm text-gray-300">{currentImage.caption}</p>
              </div>
            </div>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-3 rounded-full transition"
            >
              <ChevronRight className="w-8 h-8 text-white" />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

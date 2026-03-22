"use client"

import React, { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { testimonials } from "@/lib/testimonials-data"
import { Button } from "@/components/ui/button"

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [autoplay])

  const goToSlide = (index: number) => {
    setCurrentIndex(index % testimonials.length)
    setAutoplay(false)
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setAutoplay(false)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setAutoplay(false)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-slate-900 dark:to-blue-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Stories from Parents & Students
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
            Hear from families who have experienced transformative education at India's top boarding schools
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden">
          {/* Testimonial Content */}
          <div className="grid md:grid-cols-3 gap-8 p-8 md:p-12">
            {/* Left - Image */}
            <div className="flex items-center justify-center">
              <div className="relative w-48 h-48 rounded-lg overflow-hidden shadow-md">
                <img
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right - Testimonial Text */}
            <div className="md:col-span-2 flex flex-col justify-center">
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-lg md:text-xl font-medium text-slate-800 dark:text-slate-100 mb-6 italic">
                "{currentTestimonial.text}"
              </blockquote>

              {/* Author Info */}
              <div className="border-t border-slate-200 dark:border-slate-700 pt-4">
                <p className="font-bold text-slate-900 dark:text-white">
                  {currentTestimonial.name}
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {currentTestimonial.role} • {currentTestimonial.schoolName}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
            <Button
              onClick={prevSlide}
              variant="ghost"
              size="icon"
              className="bg-white/80 hover:bg-white dark:bg-slate-800/80"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
          </div>

          <div className="absolute right-4 top-1/2 -translate-y-1/2 z-10">
            <Button
              onClick={nextSlide}
              variant="ghost"
              size="icon"
              className="bg-white/80 hover:bg-white dark:bg-slate-800/80"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 pb-6 pt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-blue-600 w-8"
                    : "bg-slate-300 dark:bg-slate-600"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Autoplay Toggle */}
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setAutoplay(!autoplay)}
            className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
          >
            {autoplay ? "⏸ Pause" : "▶ Play"} Autoplay
          </button>
        </div>
      </div>
    </section>
  )
}

"use client"

import React, { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin } from "lucide-react"

interface FormData {
  name: string
  email: string
  phone: string
  school: string
  subject: string
  message: string
  childGrade: string
  parentType: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    school: "",
    subject: "School Inquiry",
    message: "",
    childGrade: "9",
    parentType: "parent",
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate form submission
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      setTimeout(() => {
        setSubmitted(false)
        setFormData({
          name: "",
          email: "",
          phone: "",
          school: "",
          subject: "School Inquiry",
          message: "",
          childGrade: "9",
          parentType: "parent",
        })
      }, 3000)
    }, 1000)
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-blue-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Get in Touch With Us
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
            Have questions about boarding schools? Our education counselors are here to help. Reach out to us today.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="md:col-span-1 space-y-6">
            {/* Email Card */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white">Email</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      info@eduminati.com
                    </p>
                    <p className="text-xs text-slate-500 mt-1">Response within 24 hours</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Phone Card */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white">Phone</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      +91 90000 00000
                    </p>
                    <p className="text-xs text-slate-500 mt-1">Mon-Fri, 9AM-6PM IST</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Address Card */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white">Location</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Dehradun, Uttarakhand, India
                    </p>
                    <p className="text-xs text-slate-500 mt-1">Headquarters</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you shortly
                </CardDescription>
              </CardHeader>
              <CardContent>
                {submitted ? (
                  <div className="p-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-center">
                    <p className="font-bold text-green-900 dark:text-green-100 mb-2">
                      ✓ Thank you for reaching out!
                    </p>
                    <p className="text-sm text-green-800 dark:text-green-200">
                      We've received your message and will respond within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-medium text-slate-900 dark:text-white mb-1">
                        Full Name *
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-slate-900 dark:text-white mb-1">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-medium text-slate-900 dark:text-white mb-1">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                      />
                    </div>

                    {/* Parent Type */}
                    <div>
                      <label className="block text-sm font-medium text-slate-900 dark:text-white mb-1">
                        I am a *
                      </label>
                      <select
                        name="parentType"
                        value={formData.parentType}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                        required
                      >
                        <option value="parent">Parent</option>
                        <option value="student">Student</option>
                        <option value="educator">Educator</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* Child Grade */}
                    <div>
                      <label className="block text-sm font-medium text-slate-900 dark:text-white mb-1">
                        Current Grade of Student
                      </label>
                      <Input
                        type="number"
                        name="childGrade"
                        min="1"
                        max="12"
                        value={formData.childGrade}
                        onChange={handleChange}
                        placeholder="e.g., 9"
                      />
                    </div>

                    {/* School Interest */}
                    <div>
                      <label className="block text-sm font-medium text-slate-900 dark:text-white mb-1">
                        Which schools are you interested in?
                      </label>
                      <Input
                        type="text"
                        name="school"
                        value={formData.school}
                        onChange={handleChange}
                        placeholder="e.g., Doon School, Bishop Cotton"
                      />
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-sm font-medium text-slate-900 dark:text-white mb-1">
                        Subject *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                        required
                      >
                        <option value="School Inquiry">School Inquiry</option>
                        <option value="Admission Question">Admission Question</option>
                        <option value="Fee Information">Fee Information</option>
                        <option value="Facilities Question">Facilities Question</option>
                        <option value="Schedule Consultation">Schedule Consultation</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium text-slate-900 dark:text-white mb-1">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us more about your inquiry..."
                        rows={5}
                        required
                        className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-white resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-blue-600 hover:bg-blue-700"
                    >
                      {loading ? "Sending..." : "Send Message"}
                    </Button>

                    <p className="text-xs text-slate-500 dark:text-slate-400 text-center">
                      We respect your privacy. Your information is secure with us.
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

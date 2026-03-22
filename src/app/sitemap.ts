import { MetadataRoute } from "next"
import { boardingSchools } from "@/lib/schools-data"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://eduminati-boarding-guide.com"

  // Main pages
  const mainPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/schools`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/comparison`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/calculator`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
  ]

  // Individual school pages (for future implementation)
  const schoolPages = boardingSchools.map((school) => ({
    url: `${baseUrl}/schools/${school.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  return [...mainPages, ...schoolPages]
}

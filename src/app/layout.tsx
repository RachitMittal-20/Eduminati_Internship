import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eduminati Boarding Guide - Find Your Perfect Boarding School in India",
  description: "Discover India's top 21 boarding schools with comprehensive information on fees, facilities, curriculum, and more. Compare schools, read reviews, and make informed decisions.",
  keywords: "boarding schools India, best boarding schools, school comparison, CBSE schools, IB schools",
  authors: [{ name: "Eduminati" }],
  creator: "Eduminati",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://eduminati-boarding-guide.vercel.app",
    siteName: "Eduminati Boarding Guide",
    title: "Find Your Perfect Boarding School in India",
    description: "Discover and compare India's top 21 boarding schools with detailed information and ratings.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <head>
        <meta name="theme-color" content="#003DA5" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* JSON-LD Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Eduminati",
              "description": "India's leading educational platform for boarding school information and comparison",
              "url": "https://eduminati-boarding-guide.vercel.app",
              "logo": "https://eduminati-boarding-guide.vercel.app/logo.png",
              "sameAs": [
                "https://twitter.com/eduminati",
                "https://linkedin.com/company/eduminati",
                "https://facebook.com/eduminati"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Support",
                "email": "info@eduminati.com",
                "telephone": "+91-XXXXXXXXXX"
              }
            })
          }}
        />
        
        {/* JSON-LD for Educational Service */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalService",
              "name": "Eduminati Boarding School Guide",
              "description": "Comprehensive information about India's top 21 boarding schools with comparison tools, cost calculator, and virtual tours",
              "url": "https://eduminati-boarding-guide.vercel.app",
              "areaServed": "IN",
              "educationalLevel": "Secondary",
              "offers": [
                {
                  "@type": "Service",
                  "name": "School Comparison Tool",
                  "description": "Compare up to 4 schools side-by-side"
                },
                {
                  "@type": "Service",
                  "name": "Fee Calculator",
                  "description": "Calculate total cost of boarding school education"
                },
                {
                  "@type": "Service",
                  "name": "Virtual Tours",
                  "description": "Explore school campuses through photo galleries"
                }
              ]
            })
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white dark:bg-slate-950">
        <Navigation />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-4">About</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Eduminati provides reliable educational information to help students and parents make informed decisions about boarding schools in India.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-4">Quick Links</h3>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  <li><a href="#" className="hover:text-blue-600">Home</a></li>
                  <li><a href="#" className="hover:text-blue-600">Schools</a></li>
                  <li><a href="#" className="hover:text-blue-600">FAQ</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-4">Contact</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Email: info@eduminati.com<br/>
                  Phone: +91 (0) XXX-XXX-XXXX
                </p>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-4">Follow Us</h3>
                <div className="flex space-x-4 text-sm text-slate-600 dark:text-slate-400">
                  <a href="#" className="hover:text-blue-600">Twitter</a>
                  <a href="#" className="hover:text-blue-600">LinkedIn</a>
                  <a href="#" className="hover:text-blue-600">Facebook</a>
                </div>
              </div>
            </div>
            <div className="border-t border-slate-200 dark:border-slate-700 pt-8 text-center text-sm text-slate-600 dark:text-slate-400">
              <p>&copy; 2026 Eduminati. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

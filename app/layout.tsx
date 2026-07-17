import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { AnnouncementBar } from "@/components/announcement-bar";

export const metadata: Metadata = {
  title: 'LaptopStore - Premium Laptops & Accessories',
  description:
    'Discover premium laptops and accessories for gaming, business, students, and creators. Shop the latest tech with expert recommendations.',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#141414' },
    { media: '(prefers-color-scheme: dark)', color: '#141414' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className="antialiased bg-background text-foreground min-h-screen flex flex-col"
      >
        <AnnouncementBar />

        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />

        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
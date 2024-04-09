import type { Metadata } from 'next'
import './globals.css'
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: 'Pokit Code — Fast & Intuitive Code Editor for Developers',
  description: `Pokit Code is the ultimate code editor, providing a seamless coding experience. Perfect for both seasoned developers and beginners, Pokit Code streamlines your coding journey with its intuitive design. Enhance your efficiency and create, edit, and debug code effortlessly. Try our HTML editor for a versatile coding experience.`,
  keywords: ['Pokit Code', 'code editor', 'fast code editor', 'intuitive code editor', 'developer tools', 'coding experience', 'efficient code editing', 'code debugging', 'coding platform', 'HTML editor'],
  icons: ['favicon.png'],
  manifest: "/manifest.json", 
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <meta name="google-site-verification" content="CHS0IHVP7qT3o8Zww_AK-zApaf0hvduZGBY9xAQQVZk" />
      <body className='font-space'>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

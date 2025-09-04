import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata = {
  title: {
    default: 'Himalayan Milk Unit - Pure & Fresh Dairy Products',
    template: '%s | Himalayan Milk Unit'
  },
  description: 'Premium quality dairy products from the pristine Himalayas. Fresh milk, organic dairy products from Sikkim.',
  keywords: ['dairy', 'milk', 'organic', 'himalayan', 'sikkim', 'fresh', 'natural'],
  authors: [{ name: 'Himalayan Milk Unit' }],
  creator: 'Himalayan Milk Unit',
  metadataBase: new URL('https://himalayanmilkunit.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://himalayanmilkunit.com',
    title: 'Himalayan Milk Unit - Pure & Fresh Dairy Products',
    description: 'Premium quality dairy products from the pristine Himalayas',
    siteName: 'Himalayan Milk Unit',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Himalayan Milk Unit - Pure & Fresh Dairy Products',
    description: 'Premium quality dairy products from the pristine Himalayas',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
import Link from 'next/link'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="mb-4">
                <img 
                  src="/images/logo.jpg" 
                  alt="Himalayan - Sikkim Supreme Cow Milk" 
                  className="h-20 w-auto object-contain mb-4"
                />
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Providing premium quality dairy products from the pristine Himalayas. 
                Our commitment to quality and freshness makes us your trusted dairy partner.
              </p>
              
              {/* Licenses & Certifications */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-400">Trade License</p>
                  <p className="font-semibold">E04/SDL/0118</p>
                </div>
                <div>
                  <p className="text-gray-400">FSSAI No</p>
                  <p className="font-semibold">22324002000438</p>
                </div>
                <div>
                  <p className="text-gray-400">Firm Registration</p>
                  <p className="font-semibold">FR-SK/2025/A00699/SDM/RON</p>
                </div>
                <div>
                  <p className="text-gray-400">GST IN</p>
                  <p className="font-semibold">11BNDPS4973B3Z5</p>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-300 hover:text-white transition-colors duration-200">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-300 hover:text-white transition-colors duration-200">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="text-gray-300 hover:text-white transition-colors duration-200">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/processing" className="text-gray-300 hover:text-white transition-colors duration-200">
                    Processing
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-[color:var(--color-primary-600)] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">
                      MULUKEY, RONGALI-RORATHANG ROAD,<br />
                      SODHUNGLAKHA GPU<br />
                      PAKYONG DISTRICT,<br />
                      EAST SIKKIM - 737133
                    </p>
                  </div>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-[color:var(--color-primary-600)]" />
                  <span className="text-gray-300">+91 98765 43210</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-[color:var(--color-primary-600)]" />
                  <span className="text-gray-300">hmilkunit123@gmail.com</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-[color:var(--color-primary-600)]" />
                  <span className="text-gray-300">Mon - Sat: 6:00 AM - 8:00 PM</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="container-max">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Himalayan Milk Unit. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Terms of Service
              </Link>
              <p className="text-gray-400">
                Made with ❤️ for quality dairy
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
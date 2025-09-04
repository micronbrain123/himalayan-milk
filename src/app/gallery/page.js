'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'milk', name: 'Fresh Milk' },
    { id: 'dairy', name: 'Dairy Products' },
    { id: 'facility', name: 'Our Facility' },
    { id: 'process', name: 'Production Process' }
  ]

  const galleryItems = [
    {
      id: 1,
      category: 'milk',
      title: 'Fresh Cow Milk',
      description: 'Pure, fresh cow milk collected daily from healthy, grass-fed cows',
      image: '/images/gallery/img1.jpg', 
      price: '₹60/L'
    },
    {
      id: 2,
      category: 'dairy',
      title: 'Himalayan Butter',
      description: 'Creamy, rich butter made from premium quality cream',
      image: '/images/gallery/img2.webp',
      price: '₹400/kg'
    },
    {
      id: 3,
      category: 'dairy',
      title: 'Fresh Paneer',
      description: 'Soft, fresh paneer made daily with traditional methods',
      image: '/images/gallery/img3.webp',
      price: '₹300/kg'
    },
    {
      id: 4,
      category: 'dairy',
      title: 'Artisan Cheese',
      description: 'Handcrafted cheese varieties with authentic taste',
      image: '/images/gallery/img4.jpg',
      price: '₹350/kg'
    },
    {
      id: 5,
      category: 'facility',
      title: 'Modern Processing Unit',
      description: 'State-of-the-art facility ensuring hygiene and quality',
      image: '/images/gallery/img5.webp'
    },
    {
      id: 6,
      category: 'facility',
      title: 'Quality Control Lab',
      description: 'Advanced testing equipment for quality assurance',
      image: '/images/gallery/img6.png'
    },
    {
      id: 7,
      category: 'process',
      title: 'Milk Collection',
      description: 'Fresh milk collection from local farms',
      image: '/images/gallery/img7.png'
    },
    {
      id: 8,
      category: 'process',
      title: 'Packaging Process',
      description: 'Hygienic packaging ensuring freshness',
      image: '/images/gallery/img8.jpg'
    }
  ]

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory)

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[color:var(--color-primary-50)] to-white section-padding">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Product <span className="text-gradient">Gallery</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Explore our premium collection of dairy products and get a glimpse into our 
            modern processing facility and quality standards.
          </p>
          
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <Image 
              src="/images/logo.jpg" 
              alt="Himalayan - Sikkim Supreme Cow Milk" 
              width={96}
              height={96}
              className="h-24 w-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white py-8 sticky top-20 z-40 shadow-sm">
        <div className="container-max">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-[color:var(--color-primary-600)] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredItems.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover">
                {/* Image */}
                <div className="h-48 relative overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  
                  {/* Category Tag */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-[color:var(--color-primary-600)] text-white px-3 py-1 rounded-full text-xs font-medium">
                      {categories.find(cat => cat.id === item.category)?.name}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{item.description}</p>
                  
                  <div className="flex items-center justify-between">
                    {item.price && (
                      <span className="text-2xl font-bold text-[color:var(--color-primary-600)]">{item.price}</span>
                    )}
                    {item.price ? (
                      <button className="btn-primary text-sm px-4 py-2">
                        Order Now
                      </button>
                    ) : (
                      <a href="/processing" className="btn-primary text-sm px-4 py-2 inline-block text-center no-underline">
                        Learn More
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl text-gray-400">📷</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No items found</h3>
              <p className="text-gray-500">Try selecting a different category</p>
            </div>
          )}
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured <span className="text-gradient">Products</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our most popular products loved by families across Sikkim
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Featured Product 1 */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
              <div className="h-48 relative">
                <Image
                  src="/images/dairy/milk.jpg"
                  alt="Fresh Cow Milk"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white text-gray-800 px-3 py-1 rounded-full text-sm font-medium shadow-md">
                    Fresh Milk
                  </span>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Fresh Cow Milk</h3>
                <p className="text-gray-600 mb-4">Our flagship product - pure, fresh milk collected daily</p>
                <div className="text-3xl font-bold text-[color:var(--color-primary-600)] mb-4">₹60/L</div>
                <button className="btn-primary w-full">Order Now</button>
              </div>
            </div>

            {/* Featured Product 2 */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
              <div className="h-48 relative">
                <Image
                  src="/images/dairy/butter.jpg"
                  alt="Himalayan Butter"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white text-gray-800 px-3 py-1 rounded-full text-sm font-medium shadow-md">
                    Butter
                  </span>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Himalayan Butter</h3>
                <p className="text-gray-600 mb-4">Rich, creamy butter made from premium cream</p>
                <div className="text-3xl font-bold text-[color:var(--color-primary-600)] mb-4">₹400/kg</div>
                <button className="btn-primary w-full">Order Now</button>
              </div>
            </div>

            {/* Featured Product 3 */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
              <div className="h-48 relative">
                <Image
                  src="/images/dairy/paneer.webp"
                  alt="Fresh Paneer"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white text-gray-800 px-3 py-1 rounded-full text-sm font-medium shadow-md">
                    Paneer
                  </span>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Fresh Paneer</h3>
                <p className="text-gray-600 mb-4">Soft, fresh paneer made with traditional methods</p>
                <div className="text-3xl font-bold text-[color:var(--color-primary-600)] mb-4">₹300/kg</div>
                <button className="btn-primary w-full">Order Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-gradient-to-r from-[color:var(--color-primary-600)] to-[color:var(--color-primary-800)] text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Want to Place an Order?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contact us directly to place your order and experience the pure taste of Himalayan dairy products.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="tel:+919876543210" className="btn-outline">
              Call: +91 98765 43210
            </a>
            <a href="mailto:hmilkunit123@gmail.com" className="btn-outline">
              Email: hmilkunit123@gmail.com
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
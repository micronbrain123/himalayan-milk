import Hero from '@/components/ui/Hero'
import Image from 'next/image'
import { Award, Users, Truck, Shield, Star, MapPin } from 'lucide-react'

export const metadata = {
  title: 'Himalayan Milk Unit - Pure & Fresh Dairy Products from Sikkim',
  description: 'Premium quality dairy products from the pristine Himalayas. Fresh milk, organic dairy products delivered from our farm in Sikkim to your table.',
}

export default function Home() {
  const features = [
    {
      icon: Shield,
      title: "100% Pure & Natural",
      description: "No artificial additives or preservatives. Just pure, natural goodness from our Himalayan farms."
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "FSSAI certified and GST registered. We maintain the highest standards in dairy production and processing."
    },
    {
      icon: Truck,
      title: "Fresh Delivery",
      description: "Daily collection and prompt delivery ensures you get the freshest dairy products at your doorstep."
    },
    {
      icon: Users,
      title: "Trusted by Families",
      description: "Serving the local community with dedication and building trust through consistent quality since 2025."
    }
  ]

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Gangtok",
      rating: 5,
      comment: "The milk quality is exceptional! You can really taste the difference. My family loves it."
    },
    {
      name: "Raj Kumar",
      location: "Pakyong",
      rating: 5,
      comment: "Fresh, pure, and delivered on time every day. Highly recommended for quality dairy products."
    },
    {
      name: "Sunita Rai",
      location: "Ranipool",
      rating: 5,
      comment: "Finally found a local dairy that delivers premium quality. The taste is amazing!"
    }
  ]

  const products = [
    {
      name: "Pure Fresh Milk",
      description: "Daily fresh collection from healthy, grass-fed cows in the Himalayan foothills.",
      price: "₹60/L",
      image: "/images/dairy/milk.jpg",
      alt: "Fresh Himalayan Milk"
    },
    {
      name: "Himalayan Butter",
      description: "Creamy, rich butter churned from our premium quality cream using traditional methods.",
      price: "₹400/kg",
      image: "/images/dairy/butter.jpg",
      alt: "Fresh Himalayan Butter"
    },
    {
      name: "Artisan Cheese",
      description: "Handcrafted cheese varieties made with traditional techniques and pure milk.",
      price: "₹350/kg",
      image: "/images/dairy/cheese.webp",
      alt: "Fresh Himalayan Cheese"
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-gradient">Himalayan Milk Unit</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference with our premium dairy products, sourced from the pristine Himalayas 
              and delivered with care to ensure maximum freshness and quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group card-hover bg-white p-6 rounded-2xl border border-gray-100 shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-br from-[color:var(--color-primary-500)] to-[color:var(--color-primary-700)] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview Section */}
      <section className="section-padding bg-[color:var(--color-dairy-cream)]">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Premium <span className="text-gradient">Dairy Products</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From fresh milk to artisanal dairy products, we offer a complete range 
              of premium quality items for your daily needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-xl card-hover group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                  />
                  {/* Overlay for better readability */}
                  <div className="absolute inset-0 bg-black/10"></div>
                  
                  {/* Product label overlay */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <p className="text-sm font-medium text-gray-800">{product.name.split(' ')[1]} {product.name.split(' ')[2] || ''}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-[color:var(--color-primary-600)]">{product.price}</span>
                    <button className="btn-primary text-sm px-4 py-2 hover:shadow-lg transition-shadow">
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a href="/gallery" className="btn-primary inline-flex items-center">
              View All Products
              <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our <span className="text-gradient">Customers Say</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what families across Sikkim say about our dairy products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 card-hover">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.comment}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-[color:var(--color-primary-100)] rounded-full flex items-center justify-center mr-3">
                    <span className="font-semibold text-[color:var(--color-primary-600)]">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500 flex items-center">
                      <MapPin className="h-3 w-3 mr-1" />
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="section-padding bg-gradient-to-r from-[color:var(--color-primary-600)] to-[color:var(--color-primary-800)] text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Experience Pure Himalayan Dairy?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join hundreds of satisfied customers who trust us for their daily dairy needs. 
            Fresh, pure, and delivered to your doorstep.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="tel:+919933889291" className="btn-outline">
              Call: +91 99338 89291
            </a>
            <a href="mailto:dhebendrasubba@gmail.com" className="btn-outline">
              Email Us Today
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
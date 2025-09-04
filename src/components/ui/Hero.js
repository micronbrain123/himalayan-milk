import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Award, Shield, Heart } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-[color:var(--color-primary-50)] to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-30"></div>
      
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent z-10"></div>
      
      <div className="container-max relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <div className="animate-slide-up">
            <div className="flex items-center space-x-2 mb-4">
              <Award className="h-6 w-6 text-[color:var(--color-primary-600)]" />
              <span className="text-[color:var(--color-primary-600)] font-semibold uppercase tracking-wide text-sm">
                Premium Quality Since 2025
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Pure <span className="text-gradient">Himalayan</span><br />
              Dairy Products
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
              Experience the pristine taste of the Himalayas with our premium quality 
              dairy products. Fresh, natural, and delivered with care from our farm to your table.
            </p>
            
            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[color:var(--color-dairy-green)] rounded-full flex items-center justify-center">
                  <Shield className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">100% Natural</h3>
                  <p className="text-sm text-gray-600">No artificial additives</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[color:var(--color-primary-600)] rounded-full flex items-center justify-center">
                  <Heart className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Farm Fresh</h3>
                  <p className="text-sm text-gray-600">Daily fresh collection</p>
                </div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/gallery" className="btn-primary inline-flex items-center justify-center group">
                Explore Products
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/about" className="btn-secondary inline-flex items-center justify-center">
                Learn More About Us
              </Link>
            </div>
          </div>
          
          {/* Image/Illustration */}
          <div className="relative animate-fade-in">
            <div className="relative">
              {/* Main Image */}
              <div className="w-full h-96 lg:h-[500px] bg-gradient-to-br from-[color:var(--color-dairy-cream)] to-[color:var(--color-dairy-milk)] rounded-3xl shadow-2xl flex items-center justify-center relative overflow-hidden">
                {/* Actual Product Image */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src="/images/dairy/img1.png"
                    alt="Premium Himalayan Dairy Products"
                    fill
                    className="object-cover rounded-3xl"
                    priority
                  />
                  {/* Optional overlay for better text readability if needed */}
                  <div className="absolute inset-0 bg-black/10 rounded-3xl"></div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute top-8 right-8 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center animate-bounce-gentle">
                  <Award className="h-8 w-8 text-[color:var(--color-dairy-butter)]" />
                </div>
                
                <div className="absolute bottom-8 left-8 w-12 h-12 bg-[color:var(--color-dairy-green)] rounded-full shadow-lg flex items-center justify-center">
                  <Shield className="h-6 w-6 text-white" />
                </div>
              </div>
              
              {/* Stats Cards */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                <div className="text-center">
                  <p className="text-2xl font-bold text-[color:var(--color-primary-600)]">100%</p>
                  <p className="text-sm text-gray-600">Pure & Natural</p>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                <div className="text-center">
                  <p className="text-2xl font-bold text-[color:var(--color-dairy-green)]">Fresh</p>
                  <p className="text-sm text-gray-600">Daily Collection</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg className="w-full h-20" viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" 
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}

export default Hero
import { Shield, Droplets, Thermometer, Package, Truck, Award, Clock, CheckCircle } from 'lucide-react'
import Image from 'next/image'

export const metadata = {
  title: 'Processing & Quality - Himalayan Milk Unit',
  description: 'Learn about our state-of-the-art processing methods, quality control measures, and commitment to delivering the freshest dairy products.',
}

export default function Processing() {
  const processSteps = [
    {
      step: '01',
      icon: Droplets,
      title: 'Fresh Milk Collection',
      description: 'Daily collection of fresh milk from healthy, grass-fed cows in the early morning hours to ensure maximum freshness and quality.',
      time: '5:00 AM - 7:00 AM',
      image: '/images/gallery/img7.png'
    },
    {
      step: '02',
      icon: Shield,
      title: 'Quality Testing',
      description: 'Comprehensive testing for fat content, protein levels, bacterial count, and other quality parameters using advanced laboratory equipment.',
      time: '7:00 AM - 8:00 AM',
      image: '/images/gallery/img6.png'
    },
    {
      step: '03',
      icon: Thermometer,
      title: 'Pasteurization',
      description: 'Scientific pasteurization process to eliminate harmful bacteria while preserving nutritional value and natural taste.',
      time: '8:00 AM - 9:00 AM',
      image: '/images/process/img2.jpg'
    },
    {
      step: '04',
      icon: Package,
      title: 'Hygienic Packaging',
      description: 'Automated packaging in sterile environment using food-grade materials to maintain freshness and prevent contamination.',
      time: '9:00 AM - 10:00 AM',
      image: '/images/gallery/img8.jpg'
    },
    {
      step: '05',
      icon: Truck,
      title: 'Cold Chain Delivery',
      description: 'Temperature-controlled transportation and delivery to ensure products reach customers in perfect condition.',
      time: '10:00 AM - 6:00 PM',
      image: '/images/process/img4.jpg'
    }
  ]

  const qualityMeasures = [
    {
      icon: Award,
      title: 'FSSAI Certified',
      description: 'All our processes comply with FSSAI standards for food safety and quality assurance.',
      standard: 'License: 22324002000438'
    },
    {
      icon: Shield,
      title: 'Regular Testing',
      description: 'Daily quality checks and monthly third-party laboratory testing for comprehensive quality assurance.',
      standard: 'ISO Standards'
    },
    {
      icon: Thermometer,
      title: 'Temperature Control',
      description: 'Maintained cold chain from collection to delivery ensuring optimal temperature throughout the process.',
      standard: '4°C ± 2°C'
    },
    {
      icon: Clock,
      title: 'Freshness Guarantee',
      description: 'Products are processed and delivered within 24 hours of milk collection for maximum freshness.',
      standard: '< 24 Hours'
    }
  ]

  const facilityFeatures = [
    'Stainless steel processing equipment',
    'Automated pasteurization system',
    'Advanced quality testing laboratory',
    'Hygienic packaging machinery',
    'Cold storage facilities',
    'Temperature monitoring systems',
    'Waste management system',
    'Power backup generators'
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[color:var(--color-primary-50)] to-white section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Processing & <span className="text-gradient">Quality Standards</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Discover our state-of-the-art processing methods and stringent quality control measures 
                that ensure every product meets the highest standards of purity, freshness, and safety.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white rounded-2xl shadow-lg">
                  <div className="text-2xl font-bold text-[color:var(--color-primary-600)]">100%</div>
                  <div className="text-sm text-gray-600">Quality Assured</div>
                </div>
                <div className="text-center p-4 bg-white rounded-2xl shadow-lg">
                  <div className="text-2xl font-bold text-[color:var(--color-primary-600)]">24hrs</div>
                  <div className="text-sm text-gray-600">Fresh Delivery</div>
                </div>
              </div>
            </div>
            
            <div className="relative animate-fade-in">
              <div className="w-full h-96 rounded-3xl shadow-2xl overflow-hidden">
                <Image
                  src="/images/process/img1.jpg"
                  alt="Modern Processing Facility - Himalayan Milk Unit"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Processing Steps */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-gradient">Processing Steps</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From farm to your table - every step is carefully monitored to ensure 
              the highest quality and freshness in every product.
            </p>
          </div>

          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                <div className="lg:w-1/2">
                  <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-br from-[color:var(--color-primary-500)] to-[color:var(--color-primary-700)] rounded-2xl flex items-center justify-center">
                          <step.icon className="h-8 w-8 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          <span className="text-3xl font-bold text-[color:var(--color-primary-600)]">
                            {step.step}
                          </span>
                          <h3 className="text-2xl font-semibold text-gray-900">{step.title}</h3>
                        </div>
                        <p className="text-gray-600 mb-4 leading-relaxed">{step.description}</p>
                        <div className="flex items-center space-x-2 text-[color:var(--color-primary-600)]">
                          <Clock className="h-4 w-4" />
                          <span className="text-sm font-semibold">{step.time}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="lg:w-1/2">
                  <div className="h-64 rounded-3xl overflow-hidden shadow-lg">
                    <Image
                      src={step.image}
                      alt={`${step.title} - Himalayan Milk Unit Processing`}
                      width={500}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Measures */}
      <section className="section-padding bg-[color:var(--color-dairy-cream)]">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quality <span className="text-gradient">Assurance</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We implement rigorous quality control measures at every stage to ensure 
              our products meet and exceed industry standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityMeasures.map((measure, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg text-center card-hover">
                <div className="w-16 h-16 bg-gradient-to-br from-[color:var(--color-primary-500)] to-[color:var(--color-primary-700)] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <measure.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{measure.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{measure.description}</p>
                <div className="bg-[color:var(--color-primary-50)] text-[color:var(--color-primary-600)] px-3 py-2 rounded-full text-xs font-semibold">
                  {measure.standard}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Features */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                State-of-the-Art <span className="text-gradient">Facility</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Our modern processing facility is equipped with the latest technology 
                and follows international standards for hygiene and quality control.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {facilityFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-[color:var(--color-dairy-green)] flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-32 bg-gradient-to-br from-[color:var(--color-primary-100)] to-[color:var(--color-primary-200)] rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <Shield className="h-8 w-8 text-[color:var(--color-primary-600)] mx-auto mb-1" />
                    <p className="text-xs text-gray-600">Lab Testing</p>
                  </div>
                </div>
                <div className="h-40 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <Package className="h-10 w-10 text-green-600 mx-auto mb-1" />
                    <p className="text-xs text-gray-600">Packaging</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="h-40 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <Thermometer className="h-10 w-10 text-yellow-600 mx-auto mb-1" />
                    <p className="text-xs text-gray-600">Temperature Control</p>
                  </div>
                </div>
                <div className="h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <Truck className="h-8 w-8 text-blue-600 mx-auto mb-1" />
                    <p className="text-xs text-gray-600">Delivery</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-gradient">Certifications</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We maintain all necessary certifications and follow strict compliance standards 
              to ensure the safety and quality of our products.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[color:var(--color-primary-100)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-[color:var(--color-primary-600)]" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">FSSAI License</h3>
                <p className="text-sm text-gray-600 mb-2">Food Safety & Standards</p>
                <p className="text-xs font-mono bg-[color:var(--color-primary-50)] text-[color:var(--color-primary-600)] px-2 py-1 rounded">
                  22324002000438
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Trade License</h3>
                <p className="text-sm text-gray-600 mb-2">Business Authorization</p>
                <p className="text-xs font-mono bg-green-50 text-green-600 px-2 py-1 rounded">
                  E04/SDL/0118
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">GST Registration</h3>
                <p className="text-sm text-gray-600 mb-2">Tax Compliance</p>
                <p className="text-xs font-mono bg-blue-50 text-blue-600 px-2 py-1 rounded">
                  11BNDPS4973B3Z5
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Firm Registration</h3>
                <p className="text-sm text-gray-600 mb-2">Legal Entity</p>
                <p className="text-xs font-mono bg-yellow-50 text-yellow-600 px-2 py-1 rounded">
                  FR-SK/2025/A00699
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-gradient-to-r from-[color:var(--color-primary-600)] to-[color:var(--color-primary-800)] text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience Our Quality Process
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Visit our facility or contact us to learn more about our processing methods 
            and quality standards. Transparency is our commitment.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="tel:+919876543210" className="btn-outline">
              Schedule Visit: +91 98765 43210
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
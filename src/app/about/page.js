import { Award, Shield, Users, MapPin, Calendar, CheckCircle } from 'lucide-react'

export const metadata = {
  title: 'About Us - Himalayan Milk Unit',
  description: 'Learn about Himalayan Milk Unit, your trusted dairy partner in Sikkim. Discover our story, mission, and commitment to quality dairy products.',
}

export default function About() {
  const milestones = [
    {
      year: "2025",
      title: "Company Established",
      description: "Himalayan Milk Unit was founded with a vision to provide premium quality dairy products to Sikkim."
    },
    {
      year: "2025",
      title: "FSSAI Certification",
      description: "Obtained FSSAI license (22324002000438) ensuring food safety and quality standards."
    },
    {
      year: "2025",
      title: "Trade License",
      description: "Secured trade license (E04/SDL/0118) and GST registration for legal business operations."
    }
  ]

  const values = [
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "We maintain the highest standards in dairy production, from farm to your table."
    },
    {
      icon: Users,
      title: "Community First",
      description: "Supporting local farmers and serving our community with dedication and care."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering excellence in every product and service we provide."
    }
  ]

  const certifications = [
    { name: "FSSAI License", number: "22324002000438", type: "Food Safety" },
    { name: "Trade License", number: "E04/SDL/0118", type: "Business License" },
    { name: "GST Registration", number: "11BNDPS4973B3Z5", type: "Tax Registration" },
    { name: "Firm Registration", number: "FR-SK/2025/A00699/SDM/RON", type: "Legal Entity" }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[color:var(--color-primary-50)] to-white section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About <span className="text-gradient">Himalayan Milk Unit</span>
              </h1>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Located in the pristine valleys of Sikkim, Himalayan Milk Unit is your trusted partner 
                for premium quality dairy products. We bring you the pure taste of the Himalayas with 
                every sip and bite.
              </p>
              <div className="flex items-center space-x-2 text-[color:var(--color-primary-600)] mb-4">
                <MapPin className="h-5 w-5" />
                <span className="font-semibold">Mulukey, Pakyong District, East Sikkim</span>
              </div>
              <div className="flex items-center space-x-2 text-[color:var(--color-primary-600)]">
                <Calendar className="h-5 w-5" />
                <span className="font-semibold">Established 2025</span>
              </div>
            </div>
            
            <div className="relative animate-fade-in">
              <div className="relative w-full h-96 bg-gradient-to-br from-[color:var(--color-dairy-cream)] to-[color:var(--color-dairy-milk)] rounded-3xl shadow-2xl overflow-hidden">
                <img 
                  src="/images/farm/farm.jpg" 
                  alt="Himalayan Milk Unit Farm" 
                  className="w-full h-full object-cover"
                />
                {/* Optional overlay for better text readability */}
                <div className="absolute inset-0 bg-black/20 rounded-3xl"></div>\
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-[color:var(--color-primary-50)] to-white p-8 rounded-3xl shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                To provide the finest quality dairy products sourced from the pristine Himalayan region, 
                ensuring freshness, purity, and nutritional excellence for families across Sikkim and beyond. 
                We are committed to supporting local farmers and maintaining sustainable practices.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-[color:var(--color-dairy-green)] to-green-400 p-8 rounded-3xl shadow-lg text-white">
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-lg leading-relaxed opacity-95">
                To become the most trusted dairy brand in the Himalayan region, known for our unwavering 
                commitment to quality, sustainability, and community welfare. We envision a future where 
                every household enjoys the pure goodness of Himalayan dairy products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-[color:var(--color-dairy-cream)]">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core <span className="text-gradient">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These values guide everything we do, from sourcing milk to delivering products to your doorstep.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg text-center card-hover">
                <div className="w-16 h-16 bg-gradient-to-br from-[color:var(--color-primary-500)] to-[color:var(--color-primary-700)] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-gradient">Journey</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to becoming a trusted name in Sikkim's dairy industry.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start mb-8 last:mb-0">
                <div className="flex-shrink-0 w-16 h-16 bg-[color:var(--color-primary-600)] rounded-full flex items-center justify-center text-white font-bold text-lg mr-6">
                  {milestone.year}
                </div>
                <div className="flex-1 bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Licenses */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Certifications & <span className="text-gradient">Licenses</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We maintain all necessary certifications and licenses to ensure quality and legal compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="flex items-center justify-center w-12 h-12 bg-[color:var(--color-primary-100)] rounded-full mb-4">
                  <CheckCircle className="h-6 w-6 text-[color:var(--color-primary-600)]" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{cert.name}</h3>
                <p className="text-sm text-gray-500 mb-2">{cert.type}</p>
                <p className="text-sm font-mono text-[color:var(--color-primary-600)] bg-[color:var(--color-primary-50)] px-2 py-1 rounded">
                  {cert.number}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-gradient-to-r from-[color:var(--color-primary-600)] to-[color:var(--color-primary-800)] text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contact us today to learn more about our products and services. We're here to serve you with the finest dairy products.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="tel:+919876543210" className="btn-outline">
              Call: +91 98765 43210
            </a>
            <a href="mailto:hmilkunit123@gmail.com" className="btn-outline">
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
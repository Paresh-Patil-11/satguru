import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const Clients = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "ABC Construction Ltd",
      role: "Project Manager",
      text: "Sadguru Staffing has been instrumental in providing skilled labor for our projects. Their team is professional, reliable, and always delivers on time.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      company: "Grand Plaza Hotel",
      role: "General Manager",
      text: "The housekeeping staff maintains impeccable standards. Our guests consistently praise the cleanliness and professionalism.",
      rating: 5
    },
    {
      name: "Amit Patel",
      company: "TechCorp Solutions",
      role: "Facility Manager",
      text: "We've partnered with Sadguru for over two years. Their facility management services have significantly improved our efficiency.",
      rating: 5
    }
  ]

  return (
    <>
      <SEO
        title="Our Clients & Testimonials - Sadguru Staffing Solutions"
        description="Trusted by leading companies across industries. Read testimonials from satisfied clients who have experienced our professional staffing and facility management services."
        keywords="client testimonials, customer reviews, trusted staffing company"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-700 to-blue-600 text-white pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
        }}></div>
        
        <div className="container-custom relative z-10 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
              Our Valued <span className="text-blue-200">Clients</span>
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 leading-relaxed">
              Building long-term partnerships through trust, quality, and exceptional service
            </p>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-white">
        <div className="container-custom px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-20">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
              <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
              <div className="text-gray-700 font-medium">Active Clients</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
              <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-gray-700 font-medium">Retention Rate</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-700 font-medium">Staff Deployed</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
              <div className="text-4xl font-bold text-blue-600 mb-2">5+</div>
              <div className="text-gray-700 font-medium">Industries</div>
            </div>
          </div>

          {/* Industries */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Trusted Across Industries</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We serve leading organizations across multiple sectors
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: '🏗️', name: 'Construction', desc: 'Major projects' },
              { icon: '🏨', name: 'Hospitality', desc: 'Premium hotels' },
              { icon: '🏢', name: 'Corporate', desc: 'Business parks' },
              { icon: '🛍️', name: 'Retail', desc: 'Shopping centers' },
              { icon: '🏥', name: 'Healthcare', desc: 'Medical facilities' },
              { icon: '🏭', name: 'Industrial', desc: 'Manufacturing' },
              { icon: '🎓', name: 'Education', desc: 'Institutions' },
              { icon: '🏛️', name: 'Government', desc: 'Public sector' }
            ].map((industry, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-blue-600 hover:text-white transition duration-300 group">
                <div className="text-4xl mb-3">{industry.icon}</div>
                <div className="font-bold text-gray-900 group-hover:text-white mb-1">{industry.name}</div>
                <div className="text-sm text-gray-600 group-hover:text-blue-100">{industry.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition duration-300">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-blue-600 font-medium">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container-custom px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Why Clients Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: '✅', title: 'Proven Track Record', desc: '95% client retention rate' },
              { icon: '⚡', title: 'Quick Response', desc: 'Rapid deployment & support' },
              { icon: '🛡️', title: 'Full Compliance', desc: 'All statutory requirements' },
              { icon: '💼', title: 'Cost-Effective', desc: 'Competitive pricing' },
              { icon: '🎯', title: 'Customized Solutions', desc: 'Tailored to your needs' },
              { icon: '🤝', title: '24/7 Support', desc: 'Always available' }
            ].map((item, index) => (
              <div key={index} className="flex items-start p-6 bg-gray-50 rounded-xl hover:bg-blue-50 transition duration-300">
                <div className="text-4xl mr-4">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container-custom px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Join Our Growing Family of Satisfied Clients</h2>
            <p className="text-xl mb-8 text-blue-100">
              Experience the difference that professional staffing can make
            </p>
            <Link to="/contact" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition duration-300 shadow-lg">
              Partner With Us Today
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Clients
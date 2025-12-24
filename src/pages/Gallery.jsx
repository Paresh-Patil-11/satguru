import { useState } from 'react'
import SEO from '../components/SEO'

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'staffing', name: 'Staffing Workforce' },
    { id: 'housekeeping', name: 'Housekeeping Operations' },
    { id: 'cleaning', name: 'Cleaning Services' },
    { id: 'training', name: 'Training Sessions' },
    { id: 'corporate', name: 'Corporate Offices' }
  ]

  const galleryItems = [
    {
      id: 1,
      category: 'staffing',
      title: 'Professional Workforce Team',
      description: 'Skilled staff ready for deployment across industries',
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=400&fit=crop'
    },
    {
      id: 2,
      category: 'housekeeping',
      title: 'Hotel Housekeeping Services',
      description: 'Maintaining high standards in hospitality',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&h=400&fit=crop'
    },
    {
      id: 3,
      category: 'cleaning',
      title: 'Industrial Cleaning Operations',
      description: 'Professional cleaning for industrial facilities',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=400&fit=crop'
    },
    {
      id: 4,
      category: 'training',
      title: 'Skills Training Program',
      description: 'Regular training sessions for workforce development',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop'
    },
    {
      id: 5,
      category: 'corporate',
      title: 'Corporate Office Facility Management',
      description: 'Comprehensive facility management solutions',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop'
    },
    {
      id: 6,
      category: 'staffing',
      title: 'Construction Workforce',
      description: 'Skilled labor for construction projects',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop'
    },
    {
      id: 7,
      category: 'housekeeping',
      title: 'Commercial Housekeeping',
      description: 'Daily cleaning and maintenance services',
      image: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?w=600&h=400&fit=crop'
    },
    {
      id: 8,
      category: 'cleaning',
      title: 'Deep Cleaning Services',
      description: 'Thorough cleaning for commercial spaces',
      image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=600&h=400&fit=crop'
    },
    {
      id: 9,
      category: 'training',
      title: 'Safety Training Session',
      description: 'Comprehensive safety and protocol training',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop'
    },
    {
      id: 10,
      category: 'corporate',
      title: 'Business Park Management',
      description: 'Integrated facility management services',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop'
    },
    {
      id: 11,
      category: 'staffing',
      title: 'Retail Staff Deployment',
      description: 'Professional staff for retail operations',
      image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=600&h=400&fit=crop'
    },
    {
      id: 12,
      category: 'housekeeping',
      title: 'Healthcare Facility Cleaning',
      description: 'Specialized cleaning for medical facilities',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop'
    }
  ]

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory)

  return (
    <>
      <SEO
        title="Gallery - Sadguru Staffing Solutions Work Portfolio"
        description="View our professional gallery showcasing staffing workforce, housekeeping operations, cleaning services, training sessions, and corporate facility management projects."
        keywords="staffing gallery, housekeeping photos, facility management portfolio, training programs, corporate services"
      />

      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-1 text-white mb-4">Our Work Gallery</h1>
            <p className="text-xl text-blue-100">
              A visual showcase of our professional staffing and facility management services in action
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition duration-300 ${
                  activeCategory === category.id
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-primary shadow-md'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map(item => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition duration-300"
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-200">{item.description}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-600 text-lg">No items found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-2 mb-6">Experience Quality in Action</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Our gallery represents just a fraction of the work we do every day. Each project 
              showcases our commitment to excellence, professionalism, and the high standards 
              we maintain across all our services. From small businesses to large corporations, 
              we bring the same level of dedication and expertise to every client relationship.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Want to see how we can transform your workforce and facility management? 
              Contact us today to discuss your specific requirements.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Gallery
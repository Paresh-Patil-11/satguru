import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const Careers = () => {
  const openPositions = [
    {
      id: 1,
      title: 'Housekeeping Supervisor',
      location: 'Mumbai, Maharashtra',
      type: 'Full-time',
      experience: '2-4 years',
      description: 'Supervise housekeeping operations and ensure quality standards are maintained'
    },
    {
      id: 2,
      title: 'Facility Manager',
      location: 'Mumbai, Maharashtra',
      type: 'Full-time',
      experience: '5-7 years',
      description: 'Manage overall facility operations including maintenance, security, and housekeeping'
    },
    {
      id: 3,
      title: 'HR Recruiter',
      location: 'Mumbai, Maharashtra',
      type: 'Full-time',
      experience: '1-3 years',
      description: 'Source, screen, and recruit candidates for various client requirements'
    },
    {
      id: 4,
      title: 'Safety Officer',
      location: 'Mumbai, Maharashtra',
      type: 'Full-time',
      experience: '3-5 years',
      description: 'Implement and monitor safety protocols across all operational sites'
    },
    {
      id: 5,
      title: 'Housekeeping Staff',
      location: 'Multiple Locations',
      type: 'Full-time',
      experience: '0-2 years',
      description: 'Perform daily cleaning and housekeeping duties at client locations'
    },
    {
      id: 6,
      title: 'Operations Coordinator',
      location: 'Mumbai, Maharashtra',
      type: 'Full-time',
      experience: '2-4 years',
      description: 'Coordinate workforce deployment and manage client relationships'
    }
  ]

  const benefits = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Competitive Salary',
      description: 'Industry-standard compensation packages with regular reviews'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: 'Training & Development',
      description: 'Regular training programs and skill enhancement opportunities'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Health Benefits',
      description: 'ESIC coverage and health insurance for employee welfare'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: 'Career Growth',
      description: 'Clear career progression paths and promotion opportunities'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Supportive Culture',
      description: 'Positive work environment with emphasis on teamwork'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Work-Life Balance',
      description: 'Reasonable working hours and leave policies'
    }
  ]

  return (
    <>
      <SEO
        title="Careers at Sadguru Staffing Solutions - Join Our Team"
        description="Explore career opportunities at Sadguru Staffing Solutions. Join a growing team offering competitive benefits, training, and career growth in the staffing industry."
        keywords="staffing jobs, facility management careers, housekeeping jobs, HR recruiter jobs, careers Mumbai, job opportunities"
      />

      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-1 text-white mb-4">Join Our Team</h1>
            <p className="text-xl text-blue-100">
              Build your career with a growing leader in staffing and facility management solutions
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="heading-2">Why Work With Us?</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              At Sadguru Staffing Solutions, we believe our greatest asset is our people. We are 
              committed to creating a work environment that fosters growth, values dedication, and 
              rewards excellence. Join us and be part of a team that is transforming the staffing 
              industry in India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="card text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2">Current Openings</h2>
            <p className="text-gray-600 text-lg">Explore opportunities to grow your career with us</p>
          </div>

          <div className="max-w-5xl mx-auto space-y-6">
            {openPositions.map(position => (
              <div key={position.id} className="card">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1 mb-4 md:mb-0">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{position.title}</h3>
                    <p className="text-gray-600 mb-3">{position.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {position.location}
                      </span>
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        {position.type}
                      </span>
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {position.experience}
                      </span>
                    </div>
                  </div>
                  <div className="md:ml-6">
                    <Link
                      to="/contact"
                      className="btn-primary block text-center whitespace-nowrap"
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-2 text-center mb-12">Our Hiring Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Application</h3>
                <p className="text-gray-600 text-sm">Submit your resume and application through our contact form</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Screening</h3>
                <p className="text-gray-600 text-sm">Initial screening and review of qualifications</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Interview</h3>
                <p className="text-gray-600 text-sm">Face-to-face or virtual interview with our team</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-primary">4</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Onboarding</h3>
                <p className="text-gray-600 text-sm">Welcome aboard with comprehensive training</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Start Your Journey With Us?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              We are always looking for talented, motivated individuals to join our growing team. 
              Even if you don't see a position that matches your profile, feel free to send us 
              your resume – we'll keep it on file for future opportunities.
            </p>
            <Link to="/contact" className="btn-primary bg-white text-primary hover:bg-gray-100">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Careers
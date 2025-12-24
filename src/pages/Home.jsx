import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import headerVideo from "../assets/Header.mp4";

const Home = () => {
  return (
    <>
      <SEO
        title="Sadguru Staffing Solutions - Professional Staffing & Facility Management Services"
        description="Leading staffing company in India providing manpower outsourcing, housekeeping services, and facility management solutions for civil, hospitality, retail, corporate, and healthcare industries."
        keywords="staffing company India, manpower outsourcing services, housekeeping services provider, facility management company, corporate staffing solutions, workforce management"
      />

      <section className="relative min-h-screen flex items-end">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        >
          <source src={headerVideo} type="video/mp4" />
        </video>
        {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-700/80"></div> */}

        <div className="container-custom section-padding relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-10 mt-10 leading-tight">
              Smart Staffing <br></br> Solutions Tailored
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-gray-200">
              Reliable housekeeping, civil work, and maintenance for your
              business needs
            </p>
            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services" className="btn-primary">
                Explore Our Services
              </Link>
              <Link to="/contact" className="btn-secondary bg-white">
                Get in Touch
              </Link>
            </div> */}

            {/* <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm text-blue-100">Employees</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold">100+</div>
                <div className="text-sm text-blue-100">Clients</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold">5+</div>
                <div className="text-sm text-blue-100">Industries</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold">95%</div>
                <div className="text-sm text-blue-100">Retention</div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2">Why Choose Sadguru Staffing?</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              We provide comprehensive workforce solutions that drive efficiency
              and excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Skilled Workforce</h3>
              <p className="text-gray-600">
                Trained and verified professionals ready to meet your
                industry-specific requirements
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">100% Compliance</h3>
              <p className="text-gray-600">
                Full statutory compliance with GST, PF, ESIC, MLWF, and PT
                regulations
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Quick Deployment</h3>
              <p className="text-gray-600">
                Rapid workforce mobilization to meet your urgent staffing
                requirements
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2">Our Core Services</h2>
            <p className="text-gray-600 text-lg">
              Comprehensive solutions for all your workforce needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Staffing Solutions</h3>
              <p className="text-gray-600 mb-4">
                Flexible staffing solutions for temporary, permanent, and
                contract-based requirements across all industries
              </p>
              <Link
                to="/services"
                className="text-primary font-semibold hover:underline"
              >
                Learn More →
              </Link>
            </div>

            <div className="card hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Housekeeping Services
              </h3>
              <p className="text-gray-600 mb-4">
                Professional cleaning and housekeeping for offices, hotels,
                hospitals, and residential complexes
              </p>
              <Link
                to="/services"
                className="text-primary font-semibold hover:underline"
              >
                Learn More →
              </Link>
            </div>

            <div className="card hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Facility Management
              </h3>
              <p className="text-gray-600 mb-4">
                Complete facility management including maintenance, security,
                HVAC, and operational support
              </p>
              <Link
                to="/services"
                className="text-primary font-semibold hover:underline"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-2">Industries We Serve</h2>
              <p className="text-gray-600 text-lg mb-6">
                Our comprehensive staffing solutions cater to diverse sectors
                across India
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Civil and Construction Projects
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">Hospitality and Hotels</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Retail and Shopping Centers
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">Corporate Offices</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">Healthcare Facilities</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-xl">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Ready to Get Started?
              </h3>
              <p className="text-gray-600 mb-6">
                Let us help you build a skilled, reliable workforce tailored to
                your business needs
              </p>
              <Link to="/contact" className="btn-primary block text-center">
                Request a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2">Our Commitment to Quality</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              "Quality is never an accident; it is always the result of
              intelligent effort"
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-3xl font-bold mb-4 text-primary text-center">
                Our Mission
              </h3>
              <p className="text-gray-700 leading-relaxed text-justify">
                To empower businesses with skilled, reliable workforce solutions
                that drive operational excellence. We are committed to creating
                value through customized staffing services while fostering a
                culture of safety, quality, and professional development.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-3xl font-bold mb-4 text-primary text-center">
                Our Vision
              </h3>
              <p className="text-gray-700 leading-relaxed text-justify">
                To be recognized as India's most trusted and innovative staffing
                solutions provider, setting industry benchmarks for quality,
                compliance, and customer satisfaction through long-term
                partnerships built on mutual growth and transparency.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Trusted by Leading Companies Across Industries
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Our commitment to quality and reliability has earned us long-term
            partnerships with businesses of all sizes
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-200">Employees Deployed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-blue-200">Active Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">5+</div>
              <div className="text-blue-200">Industries Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-blue-200">Client Retention</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-2 mb-6">What Sets Us Apart</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div>
                <div className="text-5xl font-bold text-primary mb-4">5+</div>
                <h3 className="text-xl font-semibold mb-2">
                  Years of Excellence
                </h3>
                <p className="text-gray-600">
                  Delivering quality services since 2021
                </p>
              </div>
              <div>
                <div className="text-5xl font-bold text-primary mb-4">24/7</div>
                <h3 className="text-xl font-semibold mb-2">
                  Support Available
                </h3>
                <p className="text-gray-600">
                  Round-the-clock customer assistance
                </p>
              </div>
              <div>
                <div className="text-5xl font-bold text-primary mb-4">100%</div>
                <h3 className="text-xl font-semibold mb-2">Compliance</h3>
                <p className="text-gray-600">
                  Full statutory compliance guaranteed
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

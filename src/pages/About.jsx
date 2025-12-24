import { useState } from "react";
import SEO from "../components/SEO";
import { useEffect } from "react";

const useCounter = (end, duration = 1000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return count;
};



const About = () => {
  const employees = useCounter(500);
const clients = useCounter(100);
const industries = useCounter(5);
const retention = useCounter(95);
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All" },
    { id: "staffing", name: "Staffing" },
    { id: "housekeeping", name: "Housekeeping" },
    { id: "training", name: "Training" },
    { id: "corporate", name: "Corporate" },
  ];

  const galleryItems = [
    {
      id: 1,
      category: "staffing",
      title: "Professional Workforce Team",
      description: "Skilled staff ready for deployment across industries",
      image:
        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=400&fit=crop",
    },
    {
      id: 2,
      category: "housekeeping",
      title: "Hotel Housekeeping Services",
      description: "Maintaining high standards in hospitality",
      image:
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&h=400&fit=crop",
    },
    {
      id: 3,
      category: "cleaning",
      title: "Industrial Cleaning Operations",
      description: "Professional cleaning for industrial facilities",
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=400&fit=crop",
    },
    // {
    //   id: 4,
    //   category: "training",
    //   title: "Skills Training Program",
    //   description: "Regular training sessions for workforce development",
    //   image:
    //     "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    // },
    {
      id: 5,
      category: "corporate",
      title: "Corporate Office Facility Management",
      description: "Comprehensive facility management solutions",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
    },
    {
      id: 6,
      category: "staffing",
      title: "Construction Workforce",
      description: "Skilled labor for construction projects",
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop",
    },
    {
      id: 7,
      category: "housekeeping",
      title: "Commercial Housekeeping",
      description: "Daily cleaning and maintenance services",
      image:
        "https://images.unsplash.com/photo-1585421514738-01798e348b17?w=600&h=400&fit=crop",
    },
    {
      id: 8,
      category: "cleaning",
      title: "Deep Cleaning Services",
      description: "Thorough cleaning for commercial spaces",
      image:
        "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=600&h=400&fit=crop",
    },
    // {
    //   id: 9,
    //   category: "training",
    //   title: "Safety Training Session",
    //   description: "Comprehensive safety and protocol training",
    //   image:
    //     "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
    // },
    {
      id: 10,
      category: "corporate",
      title: "Business Park Management",
      description: "Integrated facility management services",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
    },
    // {
    //   id: 11,
    //   category: "staffing",
    //   title: "Retail Staff Deployment",
    //   description: "Professional staff for retail operations",
    //   image:
    //     "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=600&h=400&fit=crop",
    // },
    {
      id: 12,
      category: "housekeeping",
      title: "Healthcare Facility Cleaning",
      description: "Specialized cleaning for medical facilities",
      image:
        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop",
    },
  ];

  const filteredItems =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <>
      <SEO
        title="About Us - Sadguru Staffing Solutions | Professional Workforce Management"
        description="Learn about Sadguru Staffing Solutions. View our portfolio and commitment to excellence in staffing and facility management services across India since 2021."
        keywords="about sadguru staffing, company profile, staffing portfolio, workforce management company"
      />

      {/* Hero Section with Enhanced Design */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-700 to-blue-600 text-white pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}
        ></div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
              About <span className="text-blue-200">Sadguru Staffing</span>
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 leading-relaxed">
              Building workforce excellence through trust, quality, and
              dedication since 2021
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview with Modern Cards */}
      <section className="py-20 bg-white">
        <div className="container-custom px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Who We Are
              </h2>
              <p className="text-gray-700 text-lg mb-4 leading-relaxed text-justify">
                Sadguru Staffing Solutions was established in 2021 with a clear
                mission to deliver professional staffing and facility management
                services that exceed industry standards.
              </p>
              <p className="text-gray-700 text-lg mb-4 leading-relaxed text-justify">
                We specialize in providing customized workforce solutions that
                help organizations focus on their core business while we handle
                their staffing needs with precision.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed text-justify">
                Our team brings together industry expertise and operational
                excellence to deliver services that create lasting value.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-8 rounded-xl shadow-lg text-white text-center transform hover:scale-105 transition duration-300">
<div className="text-5xl font-bold mb-2">{employees}+</div>
                <div className="text-blue-100">Employees</div>
              </div>
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-8 rounded-xl shadow-lg text-white text-center transform hover:scale-105 transition duration-300">
<div className="text-5xl font-bold mb-2">{clients}+</div>
                <div className="text-blue-100">Clients</div>
              </div>
              <div className="bg-gradient-to-br from-blue-700 to-blue-800 p-8 rounded-xl shadow-lg text-white text-center transform hover:scale-105 transition duration-300">
<div className="text-5xl font-bold mb-2">{industries}+</div>
                <div className="text-blue-100">Industries</div>
              </div>
              <div className="bg-gradient-to-br from-blue-800 to-blue-900 p-8 rounded-xl shadow-lg text-white text-center transform hover:scale-105 transition duration-300">
<div className="text-5xl font-bold mb-2">{retention}%</div>
                <div className="text-blue-100">Retention</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision with Split Design */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-10 rounded-2xl shadow-xl border-t-4 border-blue-600 hover:shadow-2xl transition duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
              <h3 className="text-3xl font-bold mb-4 text-gray-900">
                Our Mission
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                To empower businesses with skilled, reliable workforce solutions
                that drive operational excellence while fostering a culture of
                safety, quality, and professional development.
              </p>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-xl border-t-4 border-blue-600 hover:shadow-2xl transition duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="text-3xl font-bold mb-4 text-gray-900">
                Our Vision
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                To be recognized as India's most trusted and innovative staffing
                solutions provider, setting industry benchmarks through
                long-term partnerships built on mutual growth and transparency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container-custom px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: "🎯",
                title: "Integrity",
                desc: "Honest and ethical practices",
              },
              {
                icon: "⭐",
                title: "Excellence",
                desc: "Superior quality services",
              },
              {
                icon: "🤝",
                title: "Reliability",
                desc: "Consistent service delivery",
              },
              {
                icon: "💡",
                title: "Innovation",
                desc: "Continuous improvement",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="text-center p-8 bg-gray-50 rounded-xl hover:bg-blue-50 transition duration-300"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Our Work in Action
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              A visual showcase of our professional services and satisfied
              partnerships
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition duration-300 ${
                  activeCategory === category.id
                    ? "bg-blue-600 text-white shadow-lg transform scale-105"
                    : "bg-white text-gray-700 hover:bg-blue-50 shadow-md"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end">
                    <div className="p-6 text-white w-full">
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-200">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-white">
        <div className="container-custom px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Industries We Serve
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
            {[
              { icon: "🏗️", name: "Construction" },
              { icon: "🏨", name: "Hospitality" },
              { icon: "🛍️", name: "Retail" },
              { icon: "🏢", name: "Corporate" },
              { icon: "🏥", name: "Healthcare" },
              { icon: "🏭", name: "Industrial" },
            ].map((industry, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-xl hover:bg-blue-600 hover:text-white transition duration-300 group"
              >
                <div className="text-4xl mb-3">{industry.icon}</div>
                <div className="font-semibold text-gray-900 group-hover:text-white">
                  {industry.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

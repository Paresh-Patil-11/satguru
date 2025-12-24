import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Strengths', path: '/strengths' },
    { name: 'Clients', path: '/clients' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-blue-700 shadow-xl py-1' // Reduced padding when scrolled
          : 'bg-transparent py-2'        // Reduced padding at top
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Changed h-16 to h-14 to reduce height */}
        <div className="flex justify-between items-center h-16">
          
          {/* LOGO AREA */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              {/* Increased font size to text-3xl */}
              <span className={`text-3xl font-bold tracking-tight transition-colors duration-300 ${
                scrolled ? 'text-white' : 'text-black'
              }`}>
                Sadguru Staffing
              </span>
            </Link>
          </div>

          {/* DESKTOP LINKS */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  // Increased font size to text-base (16px)
                  className={`px-3 py-2 rounded-md text-base font-semibold transition-all duration-300 ${
                    isActive(item.path)
                      ? scrolled ? 'bg-white text-blue-700' : 'bg-black text-white'
                      : scrolled 
                        ? 'text-white hover:text-blue-200' 
                        : 'text-black hover:opacity-70'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* MOBILE BUTTON */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md transition duration-300 focus:outline-none ${
                scrolled ? 'text-white' : 'text-black'
              }`}
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU PANEL */}
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        } bg-white`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2 border-t border-gray-100 shadow-2xl">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-lg text-lg font-medium ${
                isActive(item.path)
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-800 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
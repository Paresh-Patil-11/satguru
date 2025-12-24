import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Strengths from './pages/Strengths'
import Clients from './pages/Clients'
import Gallery from './pages/Gallery'
import Careers from './pages/Careers'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/strengths" element={<Strengths />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/gallery" element={<Gallery />} />
            {/* <Route path="/careers" element={<Careers />} /> */}
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
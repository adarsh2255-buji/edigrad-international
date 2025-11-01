import React from 'react'
import {
  Menu,
  X,
  GraduationCap,
  BookOpen,
  CheckCircle,
  Award,
  Computer,
  Target,
  Users,
  Star,
  MessageSquare,
  ArrowRight,
  Send, // Using Send for the demo button, can be ArrowRight too
  Phone, // Placeholder, but we'll use WhatsApp
  Instagram,
  Facebook,
  Linkedin,
  Twitter,
  Mail,
  MapPin,} from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <>
     <footer id="contact" className="bg-gray-900 text-gray-300 py-16">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
                {/* Column 1: Brand */}
                <div>
                  <div className="flex items-center space-x-2 mb-4">
                     <img 
                          src={logo}
                          alt="Edigrad International Logo" 
                          className="w-10 h-auto rounded-full" 
                          onError={(e) => { 
                          e.target.src = 'https://placehold.co/40x40/FEE2E2/DC2626?text=Logo'; 
                          e.target.onerror = null; 
                          }}
                              />
                    <span className="font-bold text-xl text-white font-cent">Edigrad International</span>
                  </div>
                  <p className="text-xl italic mb-4 font-commercial">unlock your potential</p>
                  <p className="text-gray-400">Your personalized partner in online commerce education.</p>
                </div>

                {/* Column 2: Quick Links */}
                <div>
                  <h5 className="text-lg font-semibold text-white mb-4">Quick Links</h5>
                  <ul className="space-y-2">
                    <li><a href="#courses" className="hover:text-white transition-colors">Courses</a></li>
                    <li><a href="#why-us" className="hover:text-white transition-colors">Why Edigrad</a></li>
                    <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                    <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
                  </ul>
                </div>

                {/* Column 3: Contact Info */}
                <div>
                  <h5 className="text-lg font-semibold text-white mb-4">Contact Info</h5>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <MapPin size={18} className="mr-3 mt-1 shrink-0 text-gray-400" />
                      <span className="text-gray-400">
                        123 Education Street,<br />
                        Knowledge City, KL 54321,<br />
                        India
                      </span>
                    </li>
                    <li className="flex items-center">
                      <Phone size={18} className="mr-3 text-gray-400" />
                      <a href="tel:+918281255562" className="text-gray-400 hover:text-white transition-colors">+91 82812 55562</a>
                    </li>
                    <li className="flex items-center">
                      <Mail size={18} className="mr-3 text-gray-400" />
                      <a href="mailto:info@edigrad.com" className="text-gray-400 hover:text-white transition-colors">info@edigrad.com</a>
                    </li>
                  </ul>
                </div>

                {/* Column 4: Follow Us */}
                <div>
                  <h5 className="text-lg font-semibold text-white mb-4">Follow Us</h5>
                  <div className="flex space-x-4 mb-6">
                    <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                      <Facebook size={24} />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                      <Instagram size={24} />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                      <Twitter size={24} />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                      <Linkedin size={24} />
                    </a>
                  </div>
                  <h5 className="text-lg font-semibold text-white mb-4">WhatsApp</h5>
                  <a
                    href="https://wa.me/918281255562" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:bg-green-600 transition-all transform hover:scale-105 inline-flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="mr-2"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.0-6.556 5.338-11.891 11.893-11.891 3.181.0 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.0 6.557-5.338 11.892-11.893 11.892-1.99-.0-3.903-.52-5.607-1.474l-6.177 1.688zm5.431-1.618.397.233c1.523.896 3.238 1.374 5.021 1.374 5.454.0 9.917-4.463 9.917-9.917.0-2.652-1.04-5.147-2.9-7.004-1.859-1.858-4.352-2.898-7.003-2.898-5.455 0-9.918 4.463-9.918 9.917.0 1.839.51 3.593 1.429 5.093l.266.42-.903 3.313 3.328-.912z"/></svg>
                    Chat on WhatsApp
                  </a>
                </div>
              </div>

              {/* Bottom Bar */}
              <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
                <p>&copy; {new Date().getFullYear()} Edigrad International. All rights reserved.</p>
              </div>
            </div>
          </footer>
    </>
  )
}

export default Footer
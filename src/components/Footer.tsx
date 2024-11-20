import React from 'react';
import { Building2, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Building2 className="h-8 w-8 text-yellow-500" />
              <span className="text-xl font-bold">ETHABITAT</span>
            </Link>
            <p className="text-white">
              Revolutionizing African real estate through blockchain technology
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/properties" className="text-white hover:text-yellow-500">Properties</Link></li>
              <li><Link to="/trade" className="text-white hover:text-yellow-500">Trade</Link></li>
              <li><Link to="/list-property" className="text-white hover:text-yellow-500">List Property</Link></li>
              <li><Link to="/about" className="text-white hover:text-yellow-500">About Us</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-white hover:text-yellow-500">Contact Us</Link></li>
              <li><a href="#" className="text-white hover:text-yellow-500">Help Center</a></li>
              <li><a href="#" className="text-white hover:text-yellow-500">Privacy Policy</a></li>
              <li><a href="/terms" className="text-white hover:text-yellow-500">Terms of Service</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-yellow-500">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-white hover:text-yellow-500">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-white hover:text-yellow-500">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-white hover:text-yellow-500">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white pt-8">
          <p className="text-center text-white">
            © {new Date().getFullYear()} ETHABITAT. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
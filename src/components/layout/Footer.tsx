import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Sajour Agencies Limited</h3>
            <p className="text-gray-600 mb-6">
              Building tomorrow's spaces with innovative solutions and
              sustainable practices.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-black">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-black">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-black">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-black">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-black">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-black">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-black">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-600 hover:text-black">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-black">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-gray-600 mt-0.5" />
                <span className="text-gray-600">
                  123 Construction Avenue, Nairobi, Kenya
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-gray-600" />
                <span className="text-gray-600">+254 123 456 789</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-gray-600" />
                <span className="text-gray-600">info@sajouragencies.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-gray-600 mb-4">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <div className="flex flex-col space-y-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-white"
              />
              <Button className="bg-black text-white hover:bg-gray-800">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Sajour Agencies Limited. All rights
              reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                to="/privacy"
                className="text-gray-600 hover:text-black text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-gray-600 hover:text-black text-sm"
              >
                Terms of Service
              </Link>
              <Link
                to="/sitemap"
                className="text-gray-600 hover:text-black text-sm"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

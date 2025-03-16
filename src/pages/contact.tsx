import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-700 max-w-2xl mx-auto">
            We're here to answer any questions you may have about our
            interlocking and hollow block technology. Reach out to us and we'll
            respond as soon as we can.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Phone */}
          <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-black/5 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="h-8 w-8 text-gray-700" />
            </div>
            <h3 className="text-xl font-bold mb-2">Phone</h3>
            <p className="text-gray-700 mb-4">
              Call us directly to speak with a representative
            </p>
            <a
              href="tel:+15551234567"
              className="text-black font-medium hover:underline"
            >
              +1 (555) 123-4567
            </a>
          </div>

          {/* Email */}
          <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-black/5 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="h-8 w-8 text-gray-700" />
            </div>
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <p className="text-gray-700 mb-4">
              Send us an email and we'll get back to you
            </p>
            <a
              href="mailto:info@sajouragencies.com"
              className="text-black font-medium hover:underline"
            >
              info@sajouragencies.com
            </a>
          </div>

          {/* Office */}
          <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-black/5 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-8 w-8 text-gray-700" />
            </div>
            <h3 className="text-xl font-bold mb-2">Office</h3>
            <p className="text-gray-700 mb-4">Visit our main office location</p>
            <address className="not-italic text-black font-medium">
              123 Construction Way
              <br />
              Building Heights, NY 10001
            </address>
          </div>
        </div>

        {/* Hours */}
        <div className="bg-gray-50 p-8 rounded-lg mb-16">
          <div className="flex items-center mb-4">
            <Clock className="h-6 w-6 text-gray-700 mr-2" />
            <h3 className="text-xl font-bold">Working Hours</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium mb-2">Weekdays</h4>
              <p className="text-gray-700">
                Monday - Friday: 8:00 AM - 6:00 PM
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Weekends</h4>
              <p className="text-gray-700">Saturday: 9:00 AM - 2:00 PM</p>
              <p className="text-gray-700">Sunday: Closed</p>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6">Find Us</h3>
          <div className="bg-gray-200 h-[400px] rounded-lg flex items-center justify-center">
            <p className="text-gray-600">Map would be embedded here</p>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Fill out our contact form and our team will get back to you within
            24 hours to discuss your project needs.
          </p>
          <Link to="/#contact">
            <Button className="bg-black text-white hover:bg-gray-800 px-8 py-6 h-auto">
              Contact Form
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

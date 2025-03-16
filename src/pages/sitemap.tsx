import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Link } from "react-router-dom";

interface SitemapSection {
  title: string;
  links: {
    name: string;
    path: string;
  }[];
}

export default function SitemapPage() {
  const sitemapSections: SitemapSection[] = [
    {
      title: "Main Pages",
      links: [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Projects", path: "/projects" },
        { name: "Blog", path: "/blog" },
        { name: "Contact", path: "/contact" },
      ],
    },
    {
      title: "Services",
      links: [
        {
          name: "Interlocking Block Construction",
          path: "/services#interlocking",
        },
        { name: "Hollow Block Solutions", path: "/services#hollow" },
        { name: "Custom Block Manufacturing", path: "/services#custom" },
        { name: "Construction Training", path: "/services#training" },
      ],
    },
    {
      title: "Company Information",
      links: [
        { name: "Our Story", path: "/about#story" },
        { name: "Our Team", path: "/about#team" },
        { name: "Our Values", path: "/about#values" },
        { name: "Careers", path: "/careers" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", path: "/blog" },
        { name: "FAQs", path: "/faqs" },
        { name: "Testimonials", path: "/#testimonials" },
        { name: "Gallery", path: "/gallery" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", path: "/privacy" },
        { name: "Terms of Service", path: "/terms" },
        { name: "Cookie Policy", path: "/cookies" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Sitemap</h1>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Find your way around our website with this comprehensive sitemap.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {sitemapSections.map((section, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-xl font-bold mb-4">{section.title}</h2>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        to={link.path}
                        className="text-gray-700 hover:text-black hover:underline"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 p-8 rounded-lg mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Looking for Something Specific?
            </h2>
            <div className="flex max-w-md mx-auto">
              <input
                type="text"
                placeholder="Search our website..."
                className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent flex-grow"
              />
              <button className="bg-black text-white px-6 py-2 rounded-r-md hover:bg-gray-800 transition-colors">
                Search
              </button>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">
              Need Further Assistance?
            </h2>
            <p className="text-gray-700 mb-6">
              If you can't find what you're looking for, our team is here to
              help.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

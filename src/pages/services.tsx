import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Building2, Hammer, HardHat, Ruler } from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Services
            </h1>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Discover our comprehensive range of construction services powered
              by our innovative interlocking and hollow block technology.
            </p>
          </div>

          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <div className="bg-gray-100 p-4 rounded-full inline-flex mb-4">
                  <Building2 className="h-8 w-8 text-gray-700" />
                </div>
                <h2 className="text-3xl font-bold mb-4">
                  Interlocking Block Construction
                </h2>
                <p className="text-gray-700 mb-4">
                  Our interlocking block construction system revolutionizes
                  building by eliminating the need for mortar in most
                  applications. These precision-engineered blocks fit together
                  seamlessly, creating structures that are stronger, faster to
                  build, and more cost-effective than traditional construction
                  methods.
                </p>
                <h3 className="text-xl font-bold mb-2">Key Benefits:</h3>
                <ul className="list-disc pl-5 mb-6 text-gray-700 space-y-1">
                  <li>Up to 50% faster construction time</li>
                  <li>Reduced labor and material costs</li>
                  <li>
                    Superior structural integrity and earthquake resistance
                  </li>
                  <li>Precision engineering for perfect alignment</li>
                  <li>Environmentally friendly with minimal waste</li>
                </ul>
                <Button className="bg-black text-white hover:bg-gray-800">
                  Request a Quote
                </Button>
              </div>
              <div className="bg-gray-200 h-[400px] rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1621155346337-1d19476ba5b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Interlocking block construction"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div className="order-2 md:order-1 bg-gray-200 h-[400px] rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Hollow block solutions"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <div className="bg-gray-100 p-4 rounded-full inline-flex mb-4">
                  <Ruler className="h-8 w-8 text-gray-700" />
                </div>
                <h2 className="text-3xl font-bold mb-4">
                  Hollow Block Solutions
                </h2>
                <p className="text-gray-700 mb-4">
                  Our hollow block technology provides superior insulation and
                  sound dampening while maintaining structural integrity. These
                  lightweight yet strong blocks create buildings that are more
                  energy-efficient, environmentally friendly, and comfortable to
                  live and work in.
                </p>
                <h3 className="text-xl font-bold mb-2">Key Benefits:</h3>
                <ul className="list-disc pl-5 mb-6 text-gray-700 space-y-1">
                  <li>Enhanced thermal insulation reducing energy costs</li>
                  <li>Superior sound dampening properties</li>
                  <li>Lighter weight reducing foundation requirements</li>
                  <li>Environmentally sustainable with less material usage</li>
                  <li>Versatile applications for various building types</li>
                </ul>
                <Button className="bg-black text-white hover:bg-gray-800">
                  Learn More
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <div className="bg-gray-100 p-4 rounded-full inline-flex mb-4">
                  <Hammer className="h-8 w-8 text-gray-700" />
                </div>
                <h2 className="text-3xl font-bold mb-4">
                  Custom Block Manufacturing
                </h2>
                <p className="text-gray-700 mb-4">
                  We manufacture custom interlocking and hollow blocks to meet
                  the specific requirements of your project. Our
                  state-of-the-art production facility can create blocks in
                  various sizes, shapes, colors, and compositions to achieve
                  your design vision while maintaining all the benefits of our
                  innovative technology.
                </p>
                <h3 className="text-xl font-bold mb-2">Key Benefits:</h3>
                <ul className="list-disc pl-5 mb-6 text-gray-700 space-y-1">
                  <li>Customized block dimensions and specifications</li>
                  <li>Various finishes and colors available</li>
                  <li>Quality control throughout the manufacturing process</li>
                  <li>Technical support and installation guidance</li>
                  <li>
                    Cost-effective solutions for unique design requirements
                  </li>
                </ul>
                <Button className="bg-black text-white hover:bg-gray-800">
                  Discuss Your Requirements
                </Button>
              </div>
              <div className="bg-gray-200 h-[400px] rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Custom block manufacturing"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 bg-gray-200 h-[400px] rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Construction training"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <div className="bg-gray-100 p-4 rounded-full inline-flex mb-4">
                  <HardHat className="h-8 w-8 text-gray-700" />
                </div>
                <h2 className="text-3xl font-bold mb-4">
                  Construction Training
                </h2>
                <p className="text-gray-700 mb-4">
                  We provide comprehensive training programs for construction
                  professionals looking to adopt our interlocking and hollow
                  block technologies. Our expert-led workshops cover everything
                  from basic installation techniques to advanced applications,
                  ensuring your team can maximize the benefits of these
                  innovative building systems.
                </p>
                <h3 className="text-xl font-bold mb-2">Key Benefits:</h3>
                <ul className="list-disc pl-5 mb-6 text-gray-700 space-y-1">
                  <li>Hands-on practical training sessions</li>
                  <li>Certification for completed training programs</li>
                  <li>Ongoing technical support</li>
                  <li>Access to our network of experienced installers</li>
                  <li>
                    Improved efficiency and quality in construction projects
                  </li>
                </ul>
                <Button className="bg-black text-white hover:bg-gray-800">
                  Inquire About Training
                </Button>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Our Service Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Consultation</h3>
                <p className="text-gray-700">
                  We begin with a thorough consultation to understand your
                  project requirements, goals, and vision.
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Planning</h3>
                <p className="text-gray-700">
                  Our team develops a detailed plan, including block
                  specifications, timeline, and cost estimates.
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Execution</h3>
                <p className="text-gray-700">
                  We implement the plan with precision, using our innovative
                  technology and skilled professionals.
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold">4</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Support</h3>
                <p className="text-gray-700">
                  We provide ongoing support and maintenance to ensure the
                  long-term success of your project.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss how our innovative interlocking and
              hollow block technology can benefit your next construction
              project.
            </p>
            <Button
              className="bg-black text-white hover:bg-gray-800"
              onClick={() => (window.location.href = "/contact")}
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

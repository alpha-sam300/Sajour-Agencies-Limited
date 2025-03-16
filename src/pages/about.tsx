import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Learn about our journey, mission, and the innovative technology
              that sets Sajour Agencies Limited apart in the construction
              industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Founded in 2014, Sajour Agencies Limited has pioneered the use
                of interlocking and hollow blocks technology in Kenya. Our
                journey began with a simple vision: to revolutionize
                construction by making it more efficient, sustainable, and
                accessible.
              </p>
              <p className="text-gray-700 mb-4">
                What started as a small operation has grown into a leading
                provider of innovative building solutions across East Africa.
                Our team of engineers, architects, and construction specialists
                work together to push the boundaries of what's possible in
                modern construction.
              </p>
              <p className="text-gray-700">
                Today, we're proud to have completed over 200 successful
                projects using our proprietary interlocking and hollow block
                technology, saving our clients time and money while delivering
                superior structural integrity and energy efficiency.
              </p>
            </div>
            <div className="bg-gray-200 h-[400px] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Construction team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
            <div className="bg-gray-50 p-8 rounded-lg">
              <p className="text-xl text-center italic mb-0">
                "To transform the construction industry through innovative
                building technologies that reduce costs, improve quality, and
                promote sustainability while meeting the unique needs of each
                client."
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-orange-600"
                  >
                    <path d="M12 22v-5" />
                    <path d="M9 8V2" />
                    <path d="M15 8V2" />
                    <path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">Quality</h3>
                <p className="text-gray-700 text-center">
                  We never compromise on the quality of our materials,
                  workmanship, or service. Excellence is our standard in
                  everything we do.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-orange-600"
                  >
                    <path d="M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3m9 9a9 9 0 0 1-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">
                  Innovation
                </h3>
                <p className="text-gray-700 text-center">
                  We continuously seek new ways to improve our technology,
                  processes, and solutions to stay at the forefront of the
                  construction industry.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-orange-600"
                  >
                    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">
                  Sustainability
                </h3>
                <p className="text-gray-700 text-center">
                  We're committed to environmentally responsible construction
                  practices that minimize waste and energy consumption while
                  maximizing efficiency.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img
                  src="/jorum-githuku-ceo.jpg"
                  alt="Jorum Githuku"
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-xl font-bold mb-1 text-center">
                  Jorum Githuku
                </h3>
                <p className="text-gray-600 text-center mb-4">CEO & Founder</p>
                <p className="text-gray-700 text-center">
                  With over 15 years of experience in construction and
                  engineering, Jorum leads our company with a passion for
                  innovation and excellence.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
                  alt="Sarah Kamau"
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-xl font-bold mb-1 text-center">
                  Sarah Kamau
                </h3>
                <p className="text-gray-600 text-center mb-4">
                  Chief Operations Officer
                </p>
                <p className="text-gray-700 text-center">
                  Sarah oversees all operational aspects of our projects,
                  ensuring they're delivered on time, within budget, and to the
                  highest standards.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
                  alt="David Mwangi"
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-xl font-bold mb-1 text-center">
                  David Mwangi
                </h3>
                <p className="text-gray-600 text-center mb-4">
                  Chief Technology Officer
                </p>
                <p className="text-gray-700 text-center">
                  David leads our research and development team, continuously
                  improving our interlocking and hollow block technology.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Work With Us?</h2>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              Whether you're planning a residential, commercial, or industrial
              project, our team is ready to help you achieve your construction
              goals with our innovative building solutions.
            </p>
            <Button
              className="bg-black text-white hover:bg-gray-800"
              onClick={() => (window.location.href = "/contact")}
            >
              Contact Us Today
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

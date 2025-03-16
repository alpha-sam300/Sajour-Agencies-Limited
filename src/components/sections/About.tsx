import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <section id="about" className="py-16 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-orange-600 font-medium mb-2 inline-block">
            About Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Commitment to Quality and Innovation
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            At Sajour Agencies Limited, our passion for innovation drives us to
            deliver high-quality construction using our specialized interlocking
            and hollow blocks technology. Every structure we build is more
            durable, energy-efficient, and cost-effective than traditional
            construction methods.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
          <div className="bg-gray-200 h-[400px] rounded-lg flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
              alt="Construction team"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Our Story</h3>
            <p className="text-gray-700 mb-6">
              Founded in 2014, Sajour Agencies Limited has pioneered the use of
              interlocking and hollow blocks technology in Kenya. Our journey
              has been defined by innovation in sustainable construction methods
              that reduce building costs while increasing structural integrity
              and thermal efficiency.
            </p>
            <p className="text-gray-700 mb-6">
              We believe that successful construction projects are built on a
              foundation of clear communication, transparency, and mutual
              respect. This philosophy has guided our approach to every project
              we undertake.
            </p>
            <Button
              className="bg-black text-white hover:bg-gray-800"
              onClick={() => (window.location.href = "/about")}
            >
              Learn More About Our Journey
            </Button>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-16">
          <h3 className="text-2xl font-bold mb-8 text-center">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
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
              <h4 className="text-xl font-bold mb-2">Quality Craftsmanship</h4>
              <p className="text-gray-700">
                From the initial concept to the final inspection, we maintain
                rigorous quality standards at every stage of construction.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
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
              <h4 className="text-xl font-bold mb-2">Innovation</h4>
              <p className="text-gray-700">
                We embrace new methods and cutting-edge technologies to deliver
                structures that stand the test of time while prioritizing
                efficiency.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
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
              <h4 className="text-xl font-bold mb-2">Sustainability</h4>
              <p className="text-gray-700">
                We integrate eco-friendly materials and resource-efficient
                processes to minimize our environmental footprint in every
                project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

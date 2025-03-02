import { useEffect } from "react";
import { useScrollAnimations, useHoverAnimations } from "../animations";

export default function Testimonials() {
  useScrollAnimations();
  useHoverAnimations();

  return (
    <section
      id="testimonials"
      className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 fade-in">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto fade-in">
            Don't just take our word for it. Here's what our clients have to say
            about our construction services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Testimonial Card - CEO */}
          <div className="bg-white p-8 rounded-lg shadow-md hover-lift slide-in-left">
            <div className="flex justify-between items-start mb-6">
              <img
                src="https://storage.googleapis.com/tempo-public-images/github%7C174742302-1740827737283-WhatsApp%20Image%202025-03-01%20at%2012.08.13_d110d4a8.jpg"
                alt="Jorum Githuku, CEO"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-black"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
            </div>

            <p className="text-lg mb-6">
              "The team transformed our vision into reality with exceptional
              craftsmanship and attention to detail. We couldn't be happier with
              the results!"
            </p>

            <div>
              <div className="font-bold">Jorum Githuku</div>
              <div className="text-gray-600">CEO, Sajour Agencies Limited</div>
            </div>
          </div>

          {/* Additional Testimonial Card */}
          <div className="bg-white p-8 rounded-lg shadow-md hover-lift slide-in-right">
            <div className="flex justify-between items-start mb-6">
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                alt="Sarah Johnson"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-black"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
            </div>

            <p className="text-lg mb-6">
              "Sajour Agencies delivered our commercial building on time and
              within budget. Their professionalism and quality of work exceeded
              our expectations."
            </p>

            <div>
              <div className="font-bold">Sarah Johnson</div>
              <div className="text-gray-600">Director, Johnson Properties</div>
            </div>
          </div>

          {/* Additional Testimonial Card */}
          <div className="bg-white p-8 rounded-lg shadow-md hover-lift slide-in-left">
            <div className="flex justify-between items-start mb-6">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                alt="Michael Chen"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-black"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
            </div>

            <p className="text-lg mb-6">
              "Their innovative approach to our office renovation saved us both
              time and money while delivering a stunning workspace that our
              employees love."
            </p>

            <div>
              <div className="font-bold">Michael Chen</div>
              <div className="text-gray-600">COO, TechInnovate</div>
            </div>
          </div>

          {/* Additional Testimonial Card */}
          <div className="bg-white p-8 rounded-lg shadow-md hover-lift slide-in-right">
            <div className="flex justify-between items-start mb-6">
              <img
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                alt="Emily Nguyen"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-black"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
            </div>

            <p className="text-lg mb-6">
              "From concept to completion, Sajour Agencies handled our
              residential project with care and precision. The quality of their
              work is evident in every detail."
            </p>

            <div>
              <div className="font-bold">Emily Nguyen</div>
              <div className="text-gray-600">Homeowner</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

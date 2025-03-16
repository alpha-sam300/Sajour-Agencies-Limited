export default function Achievements() {
  return (
    <section
      id="achievements"
      className="py-16 px-6 md:px-12 lg:px-24 bg-white"
    >
      <div className="flex flex-col md:flex-row gap-12">
        <div className="w-full md:w-1/2 bg-gray-200 min-h-[400px] flex items-center justify-center">
          <div className="w-32 h-32 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
            </svg>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <div className="text-red-700 font-medium mb-2">Excellence</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Achievements Speak for Themselves
          </h2>
          <p className="text-gray-700 mb-12">
            With over 200 successful projects completed using our interlocking
            and hollow block technology, we've revolutionized construction in
            Kenya. Our innovative building system has reduced construction costs
            by an average of 30% while improving structural integrity and energy
            efficiency.
          </p>

          <div className="flex flex-col md:flex-row gap-12 mb-8">
            <div>
              <div className="text-4xl font-bold mb-1">500K+</div>
              <div className="text-gray-700">
                Interlocking blocks manufactured and installed
              </div>
            </div>

            <div>
              <div className="text-4xl font-bold mb-1">30%</div>
              <div className="text-gray-700">
                Average cost savings compared to traditional construction
              </div>
            </div>
          </div>

          <button className="px-6 py-2 border border-gray-300 rounded hover:bg-gray-100 transition-colors">
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
}

export default function Benefits() {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-white">
      <div className="flex flex-col md:flex-row gap-12">
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Discover the Unmatched Benefits of Partnering with Our Construction
            Firm
          </h2>
          <p className="text-gray-700 mb-8">
            We prioritize top-notch materials and craftsmanship to ensure
            lasting durability and performance. Rigorous quality checks at every
            stage of construction guarantee that each project reflects our
            unwavering commitment to excellence.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Quality Assurance</h3>
              <p className="text-gray-700">
                We prioritize top-notch materials and craftsmanship to ensure
                lasting durability and performance. Rigorous quality checks at
                every stage of construction guarantee that each project reflects
                our unwavering commitment to excellence.
              </p>
            </div>

            <div>
              <div className="mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Innovative Solutions</h3>
              <p className="text-gray-700">
                By embracing cutting-edge techniques and creative
                problem-solving, we design forward-thinking structures that set
                you apart in a competitive market. Our focus on continuous
                improvement means we're always refining our methods to stay
                ahead of industry trends.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 min-h-[400px] flex items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
            alt="Construction site with concrete beams"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}

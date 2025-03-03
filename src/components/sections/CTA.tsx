import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-white">
      <div className="flex flex-col md:flex-row justify-between items-center stagger-container">
        <div className="stagger-item fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Build Your Vision Together
          </h2>
        </div>

        <div className="mt-6 md:mt-0 stagger-item fade-up">
          <p className="text-gray-700 mb-4 md:mb-6">
            Ready to transform your project ideas into reality? Contact us today
            for a personalized consultation or quote.
          </p>

          <div className="flex space-x-4">
            <Button className="bg-black text-white hover:bg-gray-800 btn-pulse">
              Get Started
            </Button>
            <Button variant="outline" className="border-gray-300 btn-pulse">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

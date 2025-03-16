import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Building2, Hammer, HardHat, Ruler } from "lucide-react";

interface ServiceProps {
  services?: Service[];
}

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  details: {
    fullDescription: string;
    benefits: string[];
    projects: {
      name: string;
      description: string;
    }[];
  };
}

import { useScrollAnimations, useHoverAnimations } from "../animations";

export default function Services({ services = defaultServices }: ServiceProps) {
  useScrollAnimations();
  useHoverAnimations();
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <section id="services" className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 fade-in">
            Our Services
          </h2>
          <div className="flex justify-center mt-4 fade-in">
            <Button
              className="bg-black text-white hover:bg-gray-800"
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Contact Us
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <Dialog key={service.id}>
              <DialogTrigger asChild>
                <div
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer flex flex-col items-center text-center hover-lift scale-up"
                  onClick={() => setSelectedService(service)}
                >
                  <div className="bg-gray-100 p-4 rounded-full mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold flex items-center gap-2">
                    <span className="text-gray-700">{service.icon}</span>
                    {service.title}
                  </DialogTitle>
                </DialogHeader>
                <div className="mt-4">
                  <p className="text-gray-700 mb-4">
                    {service.details.fullDescription}
                  </p>

                  <h4 className="font-bold text-lg mb-2">Key Benefits</h4>
                  <ul className="list-disc pl-5 mb-4">
                    {service.details.benefits.map((benefit, index) => (
                      <li key={index} className="text-gray-700 mb-1">
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6">
                    <Button
                      className="bg-black text-white hover:bg-gray-800"
                      onClick={() =>
                        document
                          .querySelector("#contact")
                          ?.scrollIntoView({ behavior: "smooth" })
                      }
                    >
                      Contact Us
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}

const defaultServices: Service[] = [
  {
    id: "1",
    title: "Interlocking Block Construction",
    description:
      "Durable, precise construction using our innovative interlocking block system.",
    icon: <Building2 className="h-8 w-8 text-gray-700" />,
    details: {
      fullDescription:
        "Our interlocking block construction system revolutionizes building by eliminating the need for mortar in most applications. These precision-engineered blocks fit together seamlessly, creating structures that are stronger, faster to build, and more cost-effective than traditional construction methods.",
      benefits: [
        "Up to 50% faster construction time",
        "Reduced labor and material costs",
        "Superior structural integrity and earthquake resistance",
        "Precision engineering for perfect alignment",
      ],
      projects: [
        {
          name: "Residential Housing Development",
          description:
            "A collection of 24 affordable homes built using our interlocking block system, completed in half the time of traditional construction.",
        },
        {
          name: "Community Center",
          description:
            "A 15,000 sq ft multi-purpose facility constructed with interlocking blocks, showcasing the versatility and aesthetic appeal of our system.",
        },
      ],
    },
  },
  {
    id: "2",
    title: "Hollow Block Solutions",
    description:
      "Energy-efficient building solutions using advanced hollow block technology.",
    icon: <Ruler className="h-8 w-8 text-gray-700" />,
    details: {
      fullDescription:
        "Our hollow block technology provides superior insulation and sound dampening while maintaining structural integrity. These lightweight yet strong blocks create buildings that are more energy-efficient, environmentally friendly, and comfortable to live and work in.",
      benefits: [
        "Enhanced thermal insulation reducing energy costs",
        "Superior sound dampening properties",
        "Lighter weight reducing foundation requirements",
        "Environmentally sustainable with less material usage",
      ],
      projects: [
        {
          name: "Eco-Friendly Office Complex",
          description:
            "A 30,000 sq ft commercial building utilizing hollow blocks to achieve LEED certification through superior energy efficiency.",
        },
        {
          name: "Residential Apartments",
          description:
            "A multi-story apartment building where hollow blocks provided sound isolation between units and reduced heating/cooling costs by 35%.",
        },
      ],
    },
  },
  {
    id: "3",
    title: "Custom Block Manufacturing",
    description:
      "Tailored block production to meet your specific project requirements.",
    icon: <Hammer className="h-8 w-8 text-gray-700" />,
    details: {
      fullDescription:
        "We manufacture custom interlocking and hollow blocks to meet the specific requirements of your project. Our state-of-the-art production facility can create blocks in various sizes, shapes, colors, and compositions to achieve your design vision while maintaining all the benefits of our innovative technology.",
      benefits: [
        "Customized block dimensions and specifications",
        "Various finishes and colors available",
        "Quality control throughout the manufacturing process",
        "Technical support and installation guidance",
      ],
      projects: [
        {
          name: "Luxury Resort",
          description:
            "Custom-colored interlocking blocks manufactured to match the natural landscape, creating a visually stunning yet structurally superior resort complex.",
        },
        {
          name: "Industrial Facility",
          description:
            "Specialized high-strength hollow blocks designed for a manufacturing facility with specific load-bearing and vibration-dampening requirements.",
        },
      ],
    },
  },
  {
    id: "4",
    title: "Construction Training",
    description:
      "Expert training for contractors and builders on our innovative block technologies.",
    icon: <HardHat className="h-8 w-8 text-gray-700" />,
    details: {
      fullDescription:
        "We provide comprehensive training programs for construction professionals looking to adopt our interlocking and hollow block technologies. Our expert-led workshops cover everything from basic installation techniques to advanced applications, ensuring your team can maximize the benefits of these innovative building systems.",
      benefits: [
        "Hands-on practical training sessions",
        "Certification for completed training programs",
        "Ongoing technical support",
        "Access to our network of experienced installers",
      ],
      projects: [
        {
          name: "Contractor Certification Program",
          description:
            "A three-week intensive training program that has certified over 200 contractors in interlocking block construction techniques.",
        },
        {
          name: "Government Housing Initiative",
          description:
            "Training provided to government construction teams for a large-scale affordable housing project using our block technologies.",
        },
      ],
    },
  },
];

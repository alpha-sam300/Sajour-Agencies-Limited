import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
          <p className="text-gray-600 max-w-3xl mx-auto fade-in">
            We provide comprehensive construction solutions tailored to meet
            your specific needs, delivering excellence at every stage of your
            project.
          </p>
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

                  <h4 className="font-bold text-lg mb-2">Example Projects</h4>
                  <div className="space-y-3">
                    {service.details.projects.map((project, index) => (
                      <div key={index} className="bg-gray-50 p-3 rounded">
                        <h5 className="font-semibold">{project.name}</h5>
                        <p className="text-gray-600 text-sm">
                          {project.description}
                        </p>
                      </div>
                    ))}
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
    title: "Residential Construction",
    description:
      "Custom homes and renovations tailored to your lifestyle and preferences.",
    icon: <Building2 className="h-8 w-8 text-gray-700" />,
    details: {
      fullDescription:
        "Our residential construction services encompass everything from custom home building to comprehensive renovations. We work closely with homeowners to understand their vision, lifestyle needs, and budget constraints to deliver living spaces that exceed expectations.",
      benefits: [
        "Personalized design consultation",
        "Quality craftsmanship and materials",
        "Energy-efficient building practices",
        "Transparent project management",
      ],
      projects: [
        {
          name: "Luxury Villa Development",
          description:
            "A collection of 12 custom-designed luxury villas with premium finishes and smart home integration.",
        },
        {
          name: "Historic Home Renovation",
          description:
            "Careful restoration of a 100-year-old residence, preserving historical elements while modernizing systems.",
        },
      ],
    },
  },
  {
    id: "2",
    title: "Commercial Construction",
    description:
      "Functional and impressive commercial spaces designed for productivity and growth.",
    icon: <Ruler className="h-8 w-8 text-gray-700" />,
    details: {
      fullDescription:
        "We deliver commercial construction projects that balance functionality, aesthetics, and cost-effectiveness. From office buildings to retail spaces, our team ensures that every commercial project meets the specific operational needs of your business while creating an environment that impresses clients and supports employee productivity.",
      benefits: [
        "Strategic space planning and utilization",
        "Minimal disruption to ongoing operations",
        "Compliance with commercial building codes",
        "Scalable designs for future expansion",
      ],
      projects: [
        {
          name: "Tech Company Headquarters",
          description:
            "A 50,000 sq ft modern office space featuring collaborative work areas, state-of-the-art conference rooms, and employee amenities.",
        },
        {
          name: "Retail Complex",
          description:
            "Development of a multi-tenant retail space with customized storefronts, shared facilities, and ample parking.",
        },
      ],
    },
  },
  {
    id: "3",
    title: "Renovation & Remodeling",
    description:
      "Transform existing spaces with our expert renovation and remodeling services.",
    icon: <Hammer className="h-8 w-8 text-gray-700" />,
    details: {
      fullDescription:
        "Our renovation and remodeling services breathe new life into existing structures. Whether you're looking to update a dated space, improve functionality, or completely transform a property, our team combines creative design solutions with practical construction expertise to achieve remarkable results.",
      benefits: [
        "Detailed assessment of existing structures",
        "Creative solutions for space limitations",
        "Minimal waste through strategic material reuse",
        "Phased approaches to minimize disruption",
      ],
      projects: [
        {
          name: "Office Building Modernization",
          description:
            "Complete interior and exterior renovation of a 1980s office building, including updated systems, open floor plans, and energy-efficient features.",
        },
        {
          name: "Restaurant Conversion",
          description:
            "Transformation of a former retail space into an upscale restaurant, including kitchen installation, dining area design, and outdoor seating.",
        },
      ],
    },
  },
  {
    id: "4",
    title: "Construction Management",
    description:
      "Expert oversight ensuring your project is completed on time, within budget, and to specification.",
    icon: <HardHat className="h-8 w-8 text-gray-700" />,
    details: {
      fullDescription:
        "Our construction management services provide comprehensive oversight of your project from inception to completion. We coordinate all aspects of the construction process, including scheduling, budgeting, quality control, and subcontractor management, allowing you to focus on your core business while we ensure your project's success.",
      benefits: [
        "Single point of accountability",
        "Rigorous quality control processes",
        "Detailed progress reporting",
        "Proactive risk management",
      ],
      projects: [
        {
          name: "Mixed-Use Development",
          description:
            "Management of a complex project combining residential, retail, and office spaces, coordinating multiple contractors and ensuring cohesive execution.",
        },
        {
          name: "Hospital Expansion",
          description:
            "Oversight of a sensitive healthcare facility expansion, ensuring minimal disruption to ongoing operations while maintaining strict compliance with healthcare building standards.",
        },
      ],
    },
  },
];

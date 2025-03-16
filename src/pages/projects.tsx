import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Button } from "@/components/ui/button";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  completionDate: string;
  client: string;
  location: string;
  features: string[];
}

export default function ProjectsPage() {
  const projects: Project[] = [
    {
      id: 1,
      title: "Green Valley Residences",
      category: "Residential",
      description:
        "A collection of 24 eco-friendly homes built using our interlocking block system, featuring energy-efficient design and sustainable materials.",
      image:
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      completionDate: "June 2022",
      client: "Green Valley Developers",
      location: "Nairobi, Kenya",
      features: [
        "Interlocking block construction",
        "Solar power integration",
        "Rainwater harvesting systems",
        "Energy-efficient appliances",
        "Sustainable landscaping",
      ],
    },
    {
      id: 2,
      title: "Horizon Office Complex",
      category: "Commercial",
      description:
        "A 30,000 sq ft commercial building utilizing hollow blocks to achieve superior energy efficiency and sound isolation between office spaces.",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      completionDate: "November 2021",
      client: "Horizon Investments Ltd",
      location: "Mombasa, Kenya",
      features: [
        "Hollow block construction",
        "Smart building technology",
        "Rooftop solar array",
        "Natural ventilation system",
        "Flexible office layouts",
      ],
    },
    {
      id: 3,
      title: "Sunrise Community Center",
      category: "Public",
      description:
        "A 15,000 sq ft multi-purpose facility constructed with interlocking blocks, showcasing the versatility and aesthetic appeal of our system.",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      completionDate: "March 2023",
      client: "Sunrise County Government",
      location: "Kisumu, Kenya",
      features: [
        "Interlocking block construction",
        "Multi-purpose event spaces",
        "Library and learning center",
        "Sports facilities",
        "Accessible design features",
      ],
    },
    {
      id: 4,
      title: "Highland Luxury Resort",
      category: "Hospitality",
      description:
        "A boutique resort featuring custom-colored interlocking blocks manufactured to match the natural landscape, creating a visually stunning yet structurally superior complex.",
      image:
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      completionDate: "December 2022",
      client: "Highland Hospitality Group",
      location: "Nanyuki, Kenya",
      features: [
        "Custom-colored interlocking blocks",
        "Infinity pool with mountain views",
        "Spa and wellness center",
        "Farm-to-table restaurant",
        "Eco-friendly water and waste management",
      ],
    },
    {
      id: 5,
      title: "TechInnovate Manufacturing Facility",
      category: "Industrial",
      description:
        "Specialized high-strength hollow blocks designed for a manufacturing facility with specific load-bearing and vibration-dampening requirements.",
      image:
        "https://images.unsplash.com/photo-1565636252854-41b5c59d9661?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      completionDate: "August 2021",
      client: "TechInnovate Ltd",
      location: "Thika, Kenya",
      features: [
        "High-strength hollow blocks",
        "Vibration-dampening foundation",
        "Specialized equipment housing",
        "Energy-efficient climate control",
        "Expandable modular design",
      ],
    },
    {
      id: 6,
      title: "Riverside Apartments",
      category: "Residential",
      description:
        "A multi-story apartment building where hollow blocks provided sound isolation between units and reduced heating/cooling costs by 35%.",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      completionDate: "May 2022",
      client: "Riverside Properties",
      location: "Nakuru, Kenya",
      features: [
        "Hollow block construction",
        "Soundproof walls between units",
        "Energy-efficient HVAC system",
        "Communal garden and recreation areas",
        "Underground parking facility",
      ],
    },
  ];

  const [selectedCategory, setSelectedCategory] = React.useState<string>("All");
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(
    null,
  );

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const categories = ["All", ...new Set(projects.map((p) => p.category))];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Projects
            </h1>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Explore our portfolio of successful projects showcasing the
              versatility and effectiveness of our interlocking and hollow block
              technology across various sectors.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`${selectedCategory === category ? "bg-black text-white" : "border-gray-300"}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm font-medium text-gray-500 mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-700 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      {project.completionDate}
                    </span>
                    <Button
                      variant="link"
                      className="p-0 h-auto font-medium text-black hover:text-gray-700"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {selectedProject && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                <div className="relative">
                  <div className="h-64 md:h-80 overflow-hidden">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <button
                    className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md"
                    onClick={() => setSelectedProject(null)}
                  >
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
                    >
                      <path d="M18 6 6 18" />
                      <path d="m6 6 12 12" />
                    </svg>
                  </button>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded">
                      {selectedProject.category}
                    </span>
                    <span className="bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded">
                      {selectedProject.completionDate}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold mb-4">
                    {selectedProject.title}
                  </h2>
                  <p className="text-gray-700 mb-6">
                    {selectedProject.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h3 className="text-lg font-bold mb-2">Client</h3>
                      <p className="text-gray-700">{selectedProject.client}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Location</h3>
                      <p className="text-gray-700">
                        {selectedProject.location}
                      </p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-bold mb-2">Key Features</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex justify-end">
                    <Button
                      className="bg-black text-white hover:bg-gray-800"
                      onClick={() => (window.location.href = "/contact")}
                    >
                      Inquire About Similar Projects
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">
              Interested in Working With Us?
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
              Start Your Project
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

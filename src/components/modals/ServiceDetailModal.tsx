import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface ServiceDetailModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  service?: {
    title: string;
    description: string;
    benefits: string[];
    exampleProjects: {
      name: string;
      description: string;
    }[];
  };
}

export default function ServiceDetailModal({
  isOpen = true,
  onClose = () => {},
  service = {
    title: "Residential Construction",
    description:
      "Our residential construction services focus on creating comfortable, energy-efficient homes that meet the unique needs of each client. We handle everything from initial design consultation to final walkthrough, ensuring a seamless building experience.",
    benefits: [
      "Customized designs tailored to your lifestyle",
      "Energy-efficient building practices",
      "Premium materials and craftsmanship",
      "Transparent pricing and timeline",
    ],
    exampleProjects: [
      {
        name: "Modern Family Home",
        description:
          "A 3,500 sq ft contemporary residence featuring open-concept living spaces, energy-efficient systems, and sustainable materials.",
      },
      {
        name: "Luxury Apartment Complex",
        description:
          "A 24-unit residential building with premium amenities, including a rooftop garden, fitness center, and smart home technology.",
      },
    ],
  },
}: ServiceDetailModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[600px] bg-white">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold">
              {service.title}
            </DialogTitle>
            <DialogClose asChild>
              <Button variant="ghost" size="icon" onClick={onClose}>
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </Button>
            </DialogClose>
          </div>
          <DialogDescription className="text-gray-700 mt-2">
            {service.description}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Key Benefits</h3>
            <ul className="list-disc pl-5 space-y-1">
              {service.benefits.map((benefit, index) => (
                <li key={index} className="text-gray-700">
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Example Projects</h3>
            <div className="space-y-4">
              {service.exampleProjects.map((project, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-md p-4"
                >
                  <h4 className="font-medium mb-1">{project.name}</h4>
                  <p className="text-sm text-gray-600">{project.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <DialogFooter className="flex flex-col sm:flex-row sm:justify-between gap-3">
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
          <Button className="bg-black text-white hover:bg-gray-800">
            Request a Quote
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

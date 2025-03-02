import { useEffect } from "react";

export const useScrollAnimations = () => {
  useEffect(() => {
    // Fade in elements as they scroll into view
    const fadeInElements = document.querySelectorAll(".fade-in");

    const fadeInObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-visible");
          }
        });
      },
      { threshold: 0.1 },
    );

    fadeInElements.forEach((element) => {
      fadeInObserver.observe(element);
    });

    // Slide in elements from left
    const slideInLeftElements = document.querySelectorAll(".slide-in-left");

    const slideInLeftObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("slide-in-left-visible");
          }
        });
      },
      { threshold: 0.1 },
    );

    slideInLeftElements.forEach((element) => {
      slideInLeftObserver.observe(element);
    });

    // Slide in elements from right
    const slideInRightElements = document.querySelectorAll(".slide-in-right");

    const slideInRightObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("slide-in-right-visible");
          }
        });
      },
      { threshold: 0.1 },
    );

    slideInRightElements.forEach((element) => {
      slideInRightObserver.observe(element);
    });

    // Scale up elements
    const scaleUpElements = document.querySelectorAll(".scale-up");

    const scaleUpObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("scale-up-visible");
          }
        });
      },
      { threshold: 0.1 },
    );

    scaleUpElements.forEach((element) => {
      scaleUpObserver.observe(element);
    });

    return () => {
      fadeInObserver.disconnect();
      slideInLeftObserver.disconnect();
      slideInRightObserver.disconnect();
      scaleUpObserver.disconnect();
    };
  }, []);
};

export const useHoverAnimations = () => {
  useEffect(() => {
    // Add hover animations to elements with hover-lift class
    const hoverLiftElements = document.querySelectorAll(".hover-lift");

    hoverLiftElements.forEach((element) => {
      element.addEventListener("mouseenter", () => {
        element.classList.add("hover-lift-active");
      });

      element.addEventListener("mouseleave", () => {
        element.classList.remove("hover-lift-active");
      });
    });

    // Add hover animations to elements with hover-glow class
    const hoverGlowElements = document.querySelectorAll(".hover-glow");

    hoverGlowElements.forEach((element) => {
      element.addEventListener("mouseenter", () => {
        element.classList.add("hover-glow-active");
      });

      element.addEventListener("mouseleave", () => {
        element.classList.remove("hover-glow-active");
      });
    });

    return () => {
      hoverLiftElements.forEach((element) => {
        element.removeEventListener("mouseenter", () => {});
        element.removeEventListener("mouseleave", () => {});
      });

      hoverGlowElements.forEach((element) => {
        element.removeEventListener("mouseenter", () => {});
        element.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);
};

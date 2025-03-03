import { useEffect } from "react";

export const useScrollAnimations = () => {
  useEffect(() => {
    // Create a single IntersectionObserver for all animations
    const animationObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add the appropriate visible class based on the animation class
            if (entry.target.classList.contains("fade-in")) {
              entry.target.classList.add("fade-in-visible");
            }
            if (entry.target.classList.contains("slide-in-left")) {
              entry.target.classList.add("slide-in-left-visible");
            }
            if (entry.target.classList.contains("slide-in-right")) {
              entry.target.classList.add("slide-in-right-visible");
            }
            if (entry.target.classList.contains("scale-up")) {
              entry.target.classList.add("scale-up-visible");
            }
            if (entry.target.classList.contains("fade-up")) {
              entry.target.classList.add("fade-up-visible");
            }
            if (entry.target.classList.contains("rotate-in")) {
              entry.target.classList.add("rotate-in-visible");
            }
            if (entry.target.classList.contains("blur-in")) {
              entry.target.classList.add("blur-in-visible");
            }

            // Handle staggered animations
            if (entry.target.classList.contains("stagger-container")) {
              const staggerItems =
                entry.target.querySelectorAll(".stagger-item");
              staggerItems.forEach((item, index) => {
                setTimeout(() => {
                  item.classList.add("stagger-item-visible");
                }, 100 * index); // 100ms delay between each item
              });
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    // Observe all elements with animation classes
    const animationClasses = [
      ".fade-in",
      ".slide-in-left",
      ".slide-in-right",
      ".scale-up",
      ".fade-up",
      ".rotate-in",
      ".blur-in",
      ".stagger-container",
    ];

    animationClasses.forEach((className) => {
      const elements = document.querySelectorAll(className);
      elements.forEach((element) => {
        animationObserver.observe(element);
      });
    });

    return () => {
      animationObserver.disconnect();
    };
  }, []);
};

export const useHoverAnimations = () => {
  useEffect(() => {
    // Define all hover animation classes
    const hoverAnimations = [
      { selector: ".hover-lift", activeClass: "hover-lift-active" },
      { selector: ".hover-glow", activeClass: "hover-glow-active" },
      { selector: ".hover-rotate", activeClass: "hover-rotate-active" },
      { selector: ".hover-scale", activeClass: "hover-scale-active" },
      { selector: ".btn-pulse", activeClass: "btn-pulse-active" },
    ];

    // Add event listeners for all hover animations
    hoverAnimations.forEach(({ selector, activeClass }) => {
      const elements = document.querySelectorAll(selector);

      elements.forEach((element) => {
        const handleMouseEnter = () => element.classList.add(activeClass);
        const handleMouseLeave = () => element.classList.remove(activeClass);

        element.addEventListener("mouseenter", handleMouseEnter);
        element.addEventListener("mouseleave", handleMouseLeave);

        // Store the event handlers on the element for cleanup
        element.dataset.enterHandler = handleMouseEnter.toString();
        element.dataset.leaveHandler = handleMouseLeave.toString();
      });
    });

    // Add ripple effect to buttons
    const buttons = document.querySelectorAll(".btn-ripple");
    buttons.forEach((button) => {
      button.addEventListener("click", function (e) {
        const x = e.clientX - e.target.getBoundingClientRect().left;
        const y = e.clientY - e.target.getBoundingClientRect().top;

        const ripple = document.createElement("span");
        ripple.classList.add("ripple-effect");
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;

        this.appendChild(ripple);

        setTimeout(() => {
          ripple.remove();
        }, 600);
      });
    });

    return () => {
      // Clean up all event listeners
      hoverAnimations.forEach(({ selector, activeClass }) => {
        const elements = document.querySelectorAll(selector);
        elements.forEach((element) => {
          if (element.dataset.enterHandler && element.dataset.leaveHandler) {
            element.removeEventListener(
              "mouseenter",
              new Function("return " + element.dataset.enterHandler)(),
            );
            element.removeEventListener(
              "mouseleave",
              new Function("return " + element.dataset.leaveHandler)(),
            );
          }
        });
      });
    };
  }, []);
};

// New animation hook for scroll-triggered parallax effects
export const useParallaxEffects = () => {
  useEffect(() => {
    const parallaxElements = document.querySelectorAll(".parallax");

    const handleScroll = () => {
      parallaxElements.forEach((element) => {
        const speed = element.getAttribute("data-speed") || 0.5;
        const yPos = -(window.scrollY * speed);
        element.style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
};

// New animation hook for smooth scrolling
export const useSmoothScroll = () => {
  useEffect(() => {
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

    smoothScrollLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        const href = link.getAttribute("href");
        if (!href || href === "#") return;

        const targetElement = document.querySelector(href);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    });
  }, []);
};

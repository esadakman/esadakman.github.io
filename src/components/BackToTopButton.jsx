import React from "react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ScrollBtn } from "../pages/styles/Projects.styled";

const MotionScrollBtn = motion(ScrollBtn);

const BackToTopButton = () => {
  const [backTop, setBackTop] = useState(false);
  const [raised, setRaised] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const distanceToBottom =
        document.documentElement.scrollHeight -
        (window.innerHeight + scrolled);
      setBackTop(scrolled > 300);
      // Lift the button above the footer as we reach the bottom
      setRaised(distanceToBottom < 90);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {backTop && (
        <MotionScrollBtn
          onClick={scrollUp}
          $raised={raised}
          aria-label="Back to top"
          title="Back to top"
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M12 19V5M12 5l-6 6M12 5l6 6"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </MotionScrollBtn>
      )}
    </AnimatePresence>
  );
};

export default BackToTopButton;

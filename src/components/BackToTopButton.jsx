import React from "react";
import { useEffect, useState } from "react";
import { ScrollBtn } from "../pages/styles/Projects.styled";

const BackToTopButton = () => {
  const [backTop, setBackTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackTop(true);
      } else {
        setBackTop(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {backTop && (
        <ScrollBtn onClick={scrollUp}>
          Go Up
        </ScrollBtn>
      )}
    </div>
  );
};

export default BackToTopButton;

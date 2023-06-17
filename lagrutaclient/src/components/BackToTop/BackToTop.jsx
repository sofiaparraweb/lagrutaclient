import React, { useEffect, useState } from "react";

import StyleBack from "./BackToTop.module.css";

const BackTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {showButton && (
        <button
          className={StyleBack.buttonBackTop}
          onClick={scrollToTop}></button>
      )}
    </>
  );
};

export default BackTop;

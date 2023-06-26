import React, { useState, useEffect } from "react";
import style from "./donateNow.module.css";

const PopupModal = () => {
  const [isOpen, setIsOpen] = useState(false);


  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY < 1900) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  return (
    <div>
      {isOpen && (
        <div className={style.modal} >
          <div className={style.modalcontent}>
            <span><h2>Los niños de La gruta necesitan tu ayuda para su desarrollo </h2> <button className={style.buttonModal}>Hazte Socio</button> </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupModal;

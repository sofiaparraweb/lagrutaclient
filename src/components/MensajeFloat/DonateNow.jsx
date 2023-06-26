import React, { useState, useEffect } from "react";
import style from "./donateNow.module.css";

const PopupModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY < 400) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  return (
    <div>
      {isOpen && (
        <div className={style.modal}>
          <div className={style.modalcontent}>
            <h2>Contenido del Modal</h2>
            <p>
              Este es un ejemplo de un componente de ventana emergente (popup
              modal) en React JS.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupModal;

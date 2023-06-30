import React from "react";
import { Link } from "react-router-dom";
import { RiTicketLine, RiMore2Fill, RiAddLine } from "react-icons/ri";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";


const CardsHeader = (props) => {

  const { datacard, totalValue, text } = props;

  let status = "";
  let textColor = "";

  switch (datacard) {
    case "ventas":
      status = "bg-yellow-500/10 text-yellow-500";
      textColor = "text-yellow-500";
      break;
    case "totalNews":
      status = "bg-blue-500/10 text-blue-500";
      textColor = "text-blue-500";
      break;
    case "messagesend":
      status = "bg-green-500/10 text-green-500";
      textColor = "text-green-500";
      break;
    case "usuarios":
      status = "bg-pink-500/10 text-pink-500";
      textColor = "text-pink-500";
      break;
  }


  return ( 
  
    <div className="bg-secondary-100 p-8 rounded-xl">
      <div className="flex items-center justify-between mb-4">
        <div>
          <RiTicketLine
            className={`text-4xl ${status} p-2 box-content rounded-xl`}
          />
        </div>
        <div>
        </div>
      </div>
      {/* valores totales */}
      <div>
        <h1 className="text-4xl text-white font-bold mb-4">{totalValue}</h1>
        <p className={textColor}>{text}</p>
      </div>
      <hr className="border border-dashed border-gray-500/50 my-4" />
      <div>
        <Link
          to="/"
          className="flex items-center gap-2 text-white hover:underline"
        >
          <RiAddLine /> Ver más
        </Link>
      </div>
    </div>
  );
}

export default CardsHeader;

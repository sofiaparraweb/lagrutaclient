import React from "react";
import { Link } from "react-router-dom";
import { FaUsers, FaHandHoldingUsd, FaCalendarAlt, FaEnvelope, FaChevronUp, FaArrowUp, FaArrowDown  } from "react-icons/fa";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";


const CardsHeader = (props) => {

  const { datacard, totalValue, text, icon, route, per } = props;

  let status = "";
  let textColor = "";

  switch (datacard) {
    case "ventas":
      status = "bg-yellow-500/10 text-yellow-500";
      textColor = "text-yellow-500 font-semibold	font-weight: 600";
      break;
    case "totalNews":
      status = "bg-blue-500/10 text-blue-500";
      textColor = "text-blue-500  font-semibold	font-weight: 600";
      break;
    case "messagesend":
      status = "bg-green-500/10 text-green-500";
      textColor = "text-green-500  font-semibold	font-weight: 600";
      break;
    case "usuarios":
      status = "bg-pink-500/10 text-pink-500";
      textColor = "text-pink-500  font-semibold	font-weight: 600";
      break;

      default:
        status = "";
        textColor = "";
        break;
    }

    const renderIcon = () => {
      switch (icon) {
        case "usuarios":
          return <FaUsers className={`text-4xl ${status} p-4 box-content rounded-full`} />;
        case "ventas":
          return <FaHandHoldingUsd className={`text-4xl ${status} p-4 box-content rounded-full`} />;
        case "totalNews":
          return <FaCalendarAlt className={`text-4xl ${status} p-4 box-content rounded-full`} />;
        case "messagesend":
          return <FaEnvelope className={`text-4xl ${status} p-4 box-content rounded-full`} />;
        default:
          return null;
      }
    };
  
    const rutes = () => {
      switch(route) {
        case "usuarios":
          return <Link to="/users" className="flex items-center gap-2 text-gray-900 hover:underline">  <FaChevronUp />  Ver más </Link>;;
          case "ventas":
          return <Link to="/shop" className="flex items-center gap-2 text-gray-900 hover:underline"> <FaChevronUp />  Ver más </Link>;
          case "totalNews":
            return <Link to="/news" className="flex items-center gap-2 text-gray-900 hover:underline">  <FaChevronUp />  Ver más </Link>;
            default:
              return null;
      }
    };


    const getPercentage = (activeUsers, totalUsers) => {
      return ((activeUsers / totalUsers) * 100).toFixed(2);
    };
  
  
    const renderPercentage = () => {
      const activeUsers = 20; // Cantidad de usuarios activos 
      const totalUsers = 50; // Cantidad total de usuarios registrados 
      const percentage = getPercentage(activeUsers, totalUsers);

      let iconA = null;
    if (percentage > 0) {
      iconA = <FaArrowUp className="text-green-500" />;
    } else if (percentage < 0) {
      iconA = <FaArrowDown className="text-red-500" />;
    }
  
  
      switch (datacard) {
        case "usuarios":
          return <p className="flex w-30 h-30 text-gray-900"> {iconA} {getPercentage(activeUsers, totalUsers)}% Ùltimo mes</p>;
        case "ventas":
          return <p className="flex w-30 h-30 text-gray-900"> {iconA} {getPercentage(activeUsers, totalUsers)}% Ùltimo mes</p>;
        case "totalNews":
          return <p className="flex w-30 h-30 text-gray-900"> {iconA} {getPercentage(activeUsers, totalUsers)}% Ùltimo mes</p>;
        case "messagesend":
          return <p className="flex w-30 h-30 text-gray-900"> {iconA} {getPercentage(activeUsers, totalUsers)}% Ùltimo mes</p>;
        default:
          return null;
      }
    };


  return ( 
    <div className="bg-secondary-100 p-8 rounded-xl shadow-sm	box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);">
        <div className="flex items-right justify-end mb-4">
        <div>{renderIcon()}</div>
      </div>
      {/* valores totales */}
      <div>
        <h1 className="text-4xl text-gray-900 font-bold mb-4">{totalValue}</h1>
        <p className={textColor}>{text}</p>
      </div>
      <hr className="border border-dashed border-gray-500/50 my-4" />
      {renderPercentage()}
      <div>
        <br /> 
      {rutes()}
      </div>
    </div>

  );
}

export default CardsHeader;

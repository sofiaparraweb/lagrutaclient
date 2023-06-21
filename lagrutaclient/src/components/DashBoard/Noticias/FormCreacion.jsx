import { React, useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { create_news, getTypeActi } from "../../../Redux/actions.jsx";

import style from "./FormCreacion.module.css";

const FormNews = () => {
  const dispatch = useDispatch();
  const typesActivity = useSelector((state) => state.activityTypes);
  const selectedTypesRef = useRef([]);
  const [errors, setErrors] = useState({});

  const [activity, setActivity] = useState({
    name: "",
    ActivityTypes: "",
    img: "",
    description: "",
    date: "",
  });

  return (
    <section className={style.section}>
      <div className="title">
        <h2> Publicar nuevo Posteo</h2>
      </div>
      <div className="container-form">
        <form>
          <label htmlFor="name">Título: </label>
          <input id="name" name="name" type="text"></input>
          {/* aca colocar el codigo de img cloudinary*/}
          <label htmlFor="description"></label>
          <input id="description" name="description" type="??"></input>
          <label htmlFor="">Categoría: </label>
          <p class="typesactivi">
            <select htmlFor="ActivityTypes">
              <option key="" value="">
                Seleccionar categoria
              </option>
              {typesActivity?.map((e) => {
                <option key={e.id} value={e.name}>
                  {e.name}
                </option>;
              })}{" "}
            </select>
          </p>
          <button type="submit"> Publicar</button>
        </form>
      </div>
    </section>
  );
};

export default FormNews;

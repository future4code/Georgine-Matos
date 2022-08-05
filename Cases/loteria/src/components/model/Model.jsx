import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../context/context";
import Trevo from "../../img/trevo.png";
import "./style.css";

export default function Model() {
  const { loterias, id } = useContext(Context);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    filterById();
  }, [id]);

  const filterById = () => {
    const resul = loterias.filter((loteria) => {
      return loteria.id == id;
    });
    setFilter(resul);
  };

  return (
    <div className="d-flex align-items-center">
      <img className="me-4" src={Trevo} />
      {id == "" ? (
        <p>SELECIONE UM JOGO</p>
      ) : (
        <h2 className="fw-bold tMega">{filter[0]?.nome.toUpperCase()}</h2>
      )}
    </div>
  );
}

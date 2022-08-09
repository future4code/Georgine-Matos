import React, { useContext, useEffect } from "react";
import { Context } from "../../context/context";
import "./style.css";

export default function Header() {
  const { setFilterConcurso, loterias, setId, loteriasConcurso, id } = useContext(Context);

  useEffect(() => {
    filterById();
  }, []);

  const getSelect = (e) => {
    setId(e.target.value);
  };

  const filterById = () => {
    const resul = loteriasConcurso
      .filter((loteria) => {
        return loteria.loteriaId == id;
      })
      setFilterConcurso(resul[0]?.concursoId)
  };

  return (
    <select className="form-select" onChange={getSelect}>
      <option selected value={""}>
        Selecione o jogo
      </option>
      {loterias.map((loteria) => {
        return (
          <option key={loteria.id} value={loteria.id}>
            {loteria.nome.toUpperCase()}
          </option>
        );
      })}
    </select>
  );
}

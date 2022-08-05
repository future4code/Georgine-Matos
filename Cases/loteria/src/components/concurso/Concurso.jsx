import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../context/context";
import moment from "moment";
import "./style.css";
import { getConcursosById } from "../../requests/Request";

export default function Concurso() {
  const { loteriasConcurso, concursosId, id, setConcursosId } =
    useContext(Context);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    filterById();
  }, [id]);

  useEffect(() => {
    getConcursoById(filter);
  }, [filter]);

  const filterById = () => {
    loteriasConcurso
      .filter((loteria) => {
        return loteria.loteriaId == id;
      })
      .map((resp) => {
        setFilter(resp.concursoId);
      });
  };

  const getConcursoById = async (id) => {
    const result = await getConcursosById(id);
    setConcursosId(result);
  };

  return (
    <div className="concurso gap-3">
      <p className="m-0">CONCURSO</p>
      {id == "" ? (
        <p>SELECIONE UM JOGO</p>
      ) : (
        <p className="m-0 fw-bold">
          {concursosId?.id} - {moment(concursosId?.data).format("DD/MM/YYYY")}
        </p>
      )}
    </div>
  );
}

import React, { useState, useEffect } from "react";
import { getLoterias, getLoteriasConcursos } from "../requests/Request";
import { Context } from "./context";

export default function GlobalContext(props) {
  const [loterias, setLoterias] = useState([]);
  const [loteriasConcurso, setLoteriasConcursos] = useState([]);
  const [concursosId, setConcursosId] = useState([])
  const [filterConcurso, setFilterConcurso] = useState([])
  const [id, setId] = useState("");

  useEffect(() => {
    getLoteria();
  }, []);

  useEffect(() => {
    getLoteriaConcurso();
  }, []);

  const getLoteria = async () => {
    const data = await getLoterias();
    setLoterias(data);
  };

  const getLoteriaConcurso = async () => {
    const resp = await getLoteriasConcursos();
    setLoteriasConcursos(resp);
  };

  return (
    <Context.Provider value={{ filterConcurso, setFilterConcurso, concursosId, setConcursosId, loterias, setLoterias, loteriasConcurso, setLoteriasConcursos, id, setId }}>
      {props.children}
    </Context.Provider>
  );
}

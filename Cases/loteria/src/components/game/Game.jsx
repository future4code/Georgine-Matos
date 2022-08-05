import React, { useContext, useEffect } from "react";
import { Context } from "../../context/context";
import "./style.css";

export default function Game() {
  const { concursosId, id } = useContext(Context);

  useEffect(() => {}, [id]);

  return (
    <div className="container-balls gap-3">
      {id == "" ? (
        <p>SELECIONE UM JOGO</p>
      ) : (
        <>
          {concursosId?.numeros?.map((resp, index) => {
            return (
              <div key={index} className="container-ball">
                <p className="m-0 fw-bold">{resp}</p>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}

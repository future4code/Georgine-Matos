import React, { useContext, useEffect, useState } from "react";
import Concurso from "../components/concurso/Concurso";
import Footer from "../components/footer/Footer";
import Game from "../components/game/Game";
import Header from "../components/header/Header";
import Model from "../components/model/Model";
import { Context } from "../context/context";
import "./style.css";

export default function MainPage() {
  const { id } = useContext(Context);
  const [color, setColor] = useState({});
  const colors = [
    { id: 0, color: "colorMega" },
    { id: 1, color: "colorQuina" },
    { id: 2, color: "colorLotoFacil" },
    { id: 3, color: "colorLotoMania" },
    { id: 4, color: "colorTimeMania" },
    { id: 5, color: "colorSorte" },
  ];

  useEffect(() => {
    pickColor();
  }, [id]);

  const pickColor = () => {
    colors
      .filter((color) => {
        return color.id == id;
      })
      .map((resp) => {
        return setColor(resp);
      });
  };

  return (
    <div className="container-fluid p-0">
      <div className={id == "" ? "colorDefault" : color?.color}>
        <div className="container d-flex mobile">
          <div className="container m-0 col-md-4 col-12">
            <div className="row">
              <div className="header m-0 d-flex align-items-center">
                <Header />
              </div>
            </div>
            <div className="row">
              <div className="model d-flex align-items-center">
                <Model />
              </div>
            </div>
            <div className="row">
              <div className="concurso d-flex">
                <Concurso />
              </div>
            </div>
          </div>
          <div className="container m-0 col-md-8">
            <div className="row none">
              <div className="d-flex align-items-center"></div>
            </div>
            <div className="row">
              <div className="d-flex align-items-center balls">
                <Game />
              </div>
            </div>
            <div className="row">
              <div className="d-flex align-items-center justify-content-end">
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="color2">2</div>
    </div>
  );
}

import React from "react";
import Ilustracao404 from "../../assets/404-error-animate.svg";
import "./Ilustracao.module.css";

export function Ilustracao() {
  return (
    <div className="ilustracao-container">
      <img src={Ilustracao404} alt="Erro 404" className="svg-img" />
    </div>
  );
}
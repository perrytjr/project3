import React from "react";
import CardBtn from "../CardBtn/CardBtn";
import "./style.css";

function Card(props) {
  return (
    <div
      className="card"
      style={{
        backgroundImage: props.picture ? `url(${props.picture})` : "none"
      }}
    >
      {!props.picture && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
      <CardBtn
        onClick={props.handleBtnClick}
        data-value="pass"
      />
      <CardBtn
        onClick={props.handleBtnClick}
        data-value="pick"
      />
    </div>
  );
}

export default Card;

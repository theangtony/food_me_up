import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import bootstrap from "bootstrap";

export default function Card(props) {
  return (
    <div class="card" style={{ width: "18rem" }}>
      <img src="https://picsum.photos/500" class="card-img-top" alt="..." />
      <div class="card-body">
        <h1 class="card-title">{props.cafeName}</h1>
        <h5 class="card-title">{props.cafeAddress}</h5>
        <p class="card-text">{props.cafeTags}</p>
        <a href={props.cafeLink} class="btn btn-primary">
          Direction to here
        </a>
      </div>
    </div>
  );
}

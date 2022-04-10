import React from "react";
import ReactDOM from "react-dom";
import bootstrap from "bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Card from "./Component/RestaurantCard";

export default function App() {
  return (
    <Card
      cafeName="warung bu nanik"
      cafeAddress="jl. Tanjung Duren Selatan"
      cafeTags="high speed wifi, Toilet, have UNO, banyak colokan "
    />
  );
}

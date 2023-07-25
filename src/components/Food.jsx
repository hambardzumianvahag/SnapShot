import React, { Component } from "react";
import FoodGallery from "./imageGallery/FoodGallery";

export default class Food extends Component {
  render() {
    return (
      <div className="Food">
        <h1>Food</h1>
        <FoodGallery />
      </div>
    );
  }
}

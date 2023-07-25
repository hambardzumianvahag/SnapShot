import React, { Component } from "react";
import BirdsGallery from "./imageGallery/BirdsGallery";

export default class Bird extends Component {
  render() {
    return (
      <div className="Birds">
        <h1>Birds</h1>
        <BirdsGallery />
      </div>
    );
  }
}

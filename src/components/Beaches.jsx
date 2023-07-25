import React, { Component } from "react";
import BeachesGallery from "./imageGallery/BeachesGallery";

export default class Beaches extends Component {
  render() {
    return (
      <div className="Beaches">
        <h1>Beaches</h1>
        <BeachesGallery />
      </div>
    );
  }
}

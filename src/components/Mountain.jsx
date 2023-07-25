import React, { Component } from "react";
import MountainGallery from "./imageGallery/MountainGallery";

export default class Mountain extends Component {
  constructor() {
    super();
    this.state = {
      pictures: [],
    };
  }
  render() {
    return (
      <div className="Mountain">
        <h1>Mountain Pictures</h1>
        <MountainGallery />
      </div>
    );
  }
}

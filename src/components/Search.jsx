import React, { Component } from "react";
import SearchGallery from "./imageGallery/SearchGallery";

export default class Search extends Component {
  render() {
	const { receivedValue } = this.props;
	console.log(receivedValue)
    return (
      <div className="Search">
        <h1>Search Result</h1>
        <SearchGallery inputVal={receivedValue} />
      </div>
    );
  }
}

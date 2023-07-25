import React, { Component } from "react";
import Search from "./Search";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
    };
  }
  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };
  handleButtonClick = () => {
	<Search inputVal={this.state.inputValue}/>
	const { inputValue } = this.state;
    this.props.onSendInputValue(inputValue);
  };
  render() {
    const { inputValue } = this.state;
    return (
      <div className="Header">
        <h1>SnapShot</h1>
        <input
          className="input-text"
          value={inputValue}
          onChange={this.handleInputChange}
          type="text"
          placeholder="Search..."
        />
        <br />
        <button
          onClick={() => {
            this.props.changeTab("Search");
            this.handleButtonClick();
          }}
        >
          Search
        </button>
      </div>
    );
  }
}

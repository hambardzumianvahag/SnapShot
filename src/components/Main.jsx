import React, { Component } from "react";
import Header from "./Header";
import Tab from "./Tab";
import Mountain from "./Mountain";
import Beaches from "./Beaches";
import Bird from "./Bird";
import Food from "./Food";
import Search from "./Search";

export default class Main extends Component {
  state = {
    Tab: "Mountain",
    receivedValue: "",
  };
  changeTab = (newTab) => {
    this.setState({
      Tab: newTab,
    });
  };
  handleReceiveInputValue = (value) => {
    this.setState({ receivedValue: value });
  };
  render() {
    const { receivedValue } = this.state;
    return (
      <div className="Main">
        <Header onSendInputValue={this.handleReceiveInputValue} changeTab={this.changeTab} />
        <Tab changeTab={this.changeTab} />
        {this.state.Tab === "Mountain" ? (
          <Mountain />
        ) : this.state.Tab === "Beaches" ? (
          <Beaches />
        ) : this.state.Tab === "Birds" ? (
          <Bird />
        ) : this.state.Tab === "Food" ? (
          <Food />
        ) : (
          <Search receivedValue={receivedValue} />
        )}
      </div>
    );
  }
}

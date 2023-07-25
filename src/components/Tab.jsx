import React, { Component } from 'react'

export default class Tab extends Component {
  render() {
	return (
	  <div className='Tab'>
		<button onClick={()=> this.props.changeTab('Mountain')}>Mountain</button>
		<button onClick={()=> this.props.changeTab('Beaches')}>Beaches</button>
		<button onClick={()=> this.props.changeTab('Birds')}>Birds</button>
		<button onClick={()=> this.props.changeTab('Food')}>Food</button>
	  </div>
	)
  }
}

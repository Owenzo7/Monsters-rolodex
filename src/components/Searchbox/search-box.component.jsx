import React, { Component } from 'react'

export default class searchBox extends Component {
  render() {
    return (
      <input
          className={this.props.className}
          type="search"
          placeholder={this.props.placeholder}
          onChange={this.props.onChangeHandler}
        />
    )
  }
}

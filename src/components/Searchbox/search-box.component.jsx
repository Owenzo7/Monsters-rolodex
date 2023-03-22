import React, { Component } from 'react'

export default class searchBox extends Component {
  render() {
    return (
      <input
          // className="search-box"
          type="search"
          placeholder="search monsters"
          onChange={onChangeHandler}
        />
    )
  }
}

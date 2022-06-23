import React, { Component, createRef } from 'react'
import './index.css'

export default class Header extends Component {

  inputBox = React.createRef()


  addInput = () => {
    return this.props.onClick(this.inputBox.current.value)
  }

  handleKeyUp = (event) => {
    const {keyCode, target} = event
    if (keyCode === 13) {
      if (target.value.trim() === '') alert('you need to input something!')
      else {
        this.addInput()
        target.value = ''
      } 
      
    }
  }

  render() {
    return (
      <div className="todo-header">
        <input onKeyUp={this.handleKeyUp} type="text" placeholder='Please input things ToDo...' ref={this.inputBox}></input>
        {/* <button onClick={this.addInput}>Add to List</button> */}
      </div>
      
    )
  }
}

import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {

  state = {mouse:false}

  handleMouse = (flag) => {
    return () => {
      this.setState({mouse:flag})
    }
  }

  handleCheck = (id) => {
    return () => {
      this.props.checkItem(id)
    }    
  }

  handleDelete = (id) => {
    return () => {
      if (window.confirm('Are you sure to delete this?')) {
        this.props.delete(id)
      }      
    }
    
  }

  render() { 
    const {id, name, done} = this.props
    const {mouse} = this.state
    return (
      <li style={{backgroundColor:mouse ? '#ddd' : 'white'}} onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)}>
        <label>
          <input type="checkbox" checked={done} onChange={this.handleCheck(id)}></input>
          <span>{name}</span>      
        </label>
        <button className="btn btn-danger" style={{display:mouse? 'block' : 'none'}} onClick={this.handleDelete(id)}>Delete</button>
      </li>
    )
  }
}

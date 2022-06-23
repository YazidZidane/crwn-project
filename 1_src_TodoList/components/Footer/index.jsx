import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {


  render() {
    const {toDos, deleteFinished, check} = this.props
    const finished = toDos.reduce((prev, curr) => {
      return prev + (curr['done'] === true ? 1 : 0)
    }, 0)
    const total = toDos.length
    return (
      <div className="todo-footer">
        <input type="checkbox" onChange={check} checked={finished === toDos.length && total !== 0 ? true : false}></input>
        <span>已完成{finished}/全部{total}</span>
        <button className="btn btn-danger" onClick={deleteFinished}>Delete all finished Todos</button>
      </div>
       
    )
  }
}

import React, { Component } from 'react'
import Item from '../Item'
import './index.css'

export default class List extends Component {
  
  render() {
    const {toDos, checkItem, deleteItem} = this.props
    const lists = toDos.map((curr) => {
      
      return ( 
        <Item 
          key={curr['id']} 
          {...curr} 
          checkItem={checkItem}
          delete={deleteItem}
        />
      )
    })

    return (
      <ul className="todo-main">
        {lists}
      </ul>
    )
  }
}

import React, { Component } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Item from './components/Item'
import List from './components/List'
import './App.css'

export default class App extends Component {
    state = {
        toDo:[
            {id:1, name:"sleep", done:true},
            {id:2, name:"coding", done:false},
            {id:3, name:"eat", done:false},
        ],
        lastid:3
    }

    addToList = (toDoName) => {
        const {toDo, lastid} = this.state
        let newId = lastid + 1
        const newItem = {id: newId, name: toDoName, done: false}
        this.setState({toDo:[newItem,...toDo], lastid:newId})
        console.log('added one item',this.state.toDo)
    }

    checkItem = (id) => {
        const {toDo} = this.state
        // let changedItem = toDo.find((curr) => {
        //     return curr['id'] === id
        // })
        // changedItem['done'] = !changedItem['done']
        const newTodo = toDo.map((curr) => {
            if (curr['id'] === id) {
                curr['done'] = !curr['done']
                return curr
            }
            else return curr
        })
        // console.log(newTodo)
        this.setState({toDo:newTodo})
        console.log('checked one item',this.state.toDo)
    }

    deleteItem = (id) => {
        console.log(id)
        const {toDo} = this.state
        let deletedItem = toDo.find((curr) => {
            return curr['id'] === id
        })
        let deleteIndex = toDo.indexOf(deletedItem)
        toDo.splice(deleteIndex, 1)
        const newTodo = toDo
        this.setState({toDo:newTodo})
        console.log('deleted one item',this.state.toDo)
    }

    checkAll = (event) => {
        const checked = event.target.checked
        const {toDo} = this.state
        let newTodo
        if (checked === true) newTodo = toDo.map((curr) => {
            return {...curr, done:true}
        })
        else newTodo = toDo.map((curr) => {
            return {...curr, done:false}
        })
        this.setState({toDo:newTodo})
        console.log('checked all item',this.state.toDo)
    }

    deleteFinished = () => {
        const {toDo} = this.state
        const newTodo = toDo.filter((curr) => {
            if (curr['done'] === false) return curr
        })
        this.setState({toDo: newTodo})
        console.log('deleted checked items', this.state.toDo)
    }


  render() {
    return (
        <div className="todo-container">
            <div className="todo-wrap">
                <Header onClick={this.addToList}/>
                <List toDos = {this.state.toDo} checkItem={this.checkItem} deleteItem={this.deleteItem}/>
                <Footer toDos = {this.state.toDo} check={this.checkAll} deleteFinished={this.deleteFinished}/>
            </div>
      </div>
    )
  }
}

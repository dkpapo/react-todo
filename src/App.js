import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import _ from 'lodash';

import {todos} from './json.json';
import List from './components/List';
import Form from './components/Form';
class App extends Component {
  constructor(){
    super();
    this.state={
      todos
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Form  todos={this.state.todos}
            createTask={this.createTask.bind(this)}
          />
            <List list={this.state.todos}
            toggleTask={this.toggleTask.bind(this)}
            saveTask={this.saveTask.bind(this)}
            deleteTask={this.deleteTask.bind(this)}
          />
          
        </header>
      </div>
    );
  }

  createTask(task){
    this.state.todos.push({
      task,
      isCompleted:false
    })
    this.setState({
      todos:this.state.todos
    })
  }

  toggleTask(task){
    const found = _.find(
      this.state.todos,
      todo=>todo.task === task
    )
    found.isCompleted= !found.isCompleted;
    this.setState({
      todos:this.state.todos
    })
  }

  saveTask(oldTask,newTask){
    const foundTodo=_.find(
      this.state.todos,
      todo=>todo.task === oldTask
    );

    foundTodo.task=newTask ;
    this.setState({
      todos:this.state.todos
    });
  }

  deleteTask(task){
    _.remove(this.state.todos,todo=>todo.task===task);
    this.setState({
      todos:this.state.todos
    })
  }
}



export default App;

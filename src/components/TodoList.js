import React from 'react'

class TodoList extends React.Component {
  render() {
    return (
      <div className="todo-list">
        <div className="block">
          <div className="title">Things To Do:</div>
          <TodoItem />
          <TodoItem />
          <TodoItem />
        </div>
        <hr/>
        <div className="block">
          <div className="title">Things Done:</div>
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
        </div>
      </div>
    )
  }
}

class TodoItem extends React.Component {
  render() {
    return (
      <div className="item-wrapper">
        <div className="checkbox-round">
          <input type="checkbox" name="" id="checkbox"/>
        </div>
        <div className="todo-item-content">
          <input type="text" name="" id=""/>
        </div>
        <div className="btn-delete">
          <button>x</button>
        </div>
      </div>
    )
  }
}

export default TodoList

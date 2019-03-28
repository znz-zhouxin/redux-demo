import React from 'react'

class TodoItem extends React.Component {

  render() {
    return (
      <div className="item-wrapper">
        <div className="checkbox-round">
          {this.props.todo.done ? <input type="checkbox" name="" id="checkbox" checked/> : <input type="checkbox" name="" id="checkbox"/>}
        </div>
        <div className="todo-item-content">
          <input type="text" name="" id="" value={this.props.todo.content}/>
        </div>
        <div className="btn-delete">
          <button>-</button>
        </div>
      </div>
    )
  }
}

export default TodoItem

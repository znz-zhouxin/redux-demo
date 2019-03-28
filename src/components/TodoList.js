import React from 'react'
import TodoItem from './TodoItem'
class TodoList extends React.Component {
  render() {
    const todoList = [
      {
        done: true,
        content: '这是一首简单的小情歌'
      },
      {
        done: true,
        content: '唱著人们心肠的曲折'
      },
      {
        done: true,
        content: '我想我很快乐 当有你的温热'
      },
      {
        done: true,
        content: '脚边的空气转了'
      },
      {
        done: true,
        content: '这是一首简单的小情歌'
      },
      {
        done: true,
        content: '唱著我们心头的白鸽'
      },
    ]

    return (
      <div className="todo-list">
        <div className="block">
          <div className="title">Things To Do:</div>
          {todoList.map((item, index) => (
            <TodoItem key={index} todo={item} />
          ))}
        </div>
        <hr/>
        <div className="block">
          <div className="title">Things Done:</div>
        </div>
      </div>
    )
  }
}

export default TodoList

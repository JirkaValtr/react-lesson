import React from 'react'

const renderTodo = (todo, handleCrossOut, handleJoke, handleRemove) => {
  return (
    <li key={todo.id} className={todo.completed && "completed"}>
      <div className="view">
        <input className="toggle" type="checkbox" checked={!!todo.completed} onChange={(event) => handleCrossOut(event, todo.id)}/>
        <label onClick={(event) => handleJoke(todo.id)}>{todo.text}</label>
        <button className="destroy" onClick={(event) => handleRemove(todo.id)}></button>
      </div>
    </li>
  )
}

export default (props) => {
  const {todos, handleCrossOut, handleJoke, handleRemove} = props

  return (
    <ul className="todo-list">
      {todos.map(function(todo){return renderTodo(todo, handleCrossOut, handleJoke, handleRemove)})}
    </ul>
  )
}

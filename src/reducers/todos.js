import { ADD_TODO, RECEIVE_REMOTE_TODO, CROSS_OUT_TODO, RECEIVE_JOKE, REMOVE_TODO } from '../actions'

function findIndexById(todos, id) {
  return todos.findIndex(function(todos){return todos.id == id})
}

export default (todos = [], action) => {
  switch(action.type) {
    case ADD_TODO:
    case RECEIVE_REMOTE_TODO:
      return [
        ...todos,
        action.data.todo
      ]
    case CROSS_OUT_TODO:
      const myIndex = findIndexById(todos, action.data.id)
      return [
        ...todos.slice(0, myIndex),
        Object.assign({}, todos[myIndex], {
          completed: action.data.checked
        }),
        ...todos.slice(myIndex + 1)
      ]
    case RECEIVE_JOKE:
      const myIndex2 = findIndexById(todos, action.data.id)
      return [
        ...todos.slice(0, myIndex2),
        Object.assign({}, todos[myIndex2], {
          text: action.data.text
        }),
        ...todos.slice(myIndex2 + 1)
      ]
    case REMOVE_TODO:
      const myIndex3 = findIndexById(todos, action.data.id)
      return [
        ...todos.slice(0, myIndex3),
        ...todos.slice(myIndex3 + 1)
      ]
  }

  return todos
}

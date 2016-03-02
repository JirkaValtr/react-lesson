import fetch from 'isomorphic-fetch'
// import request from 'superagent'

export const ADD_TODO = 'ADD_TODO'
export const NEW_TODO_CHANGED = 'NEW_TODO_CHANGED'
export const REQUEST_REMOTE_TODO = 'REQUEST_REMOTE_TODO'
export const RECEIVE_REMOTE_TODO = 'RECEIVE_REMOTE_TODO'
export const CROSS_OUT_TODO = 'CROSS_OUT_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const REQUEST_JOKE = 'REQUEST_JOKE'
export const RECEIVE_JOKE = 'RECEIVE_JOKE'

export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    data: {
      todo: todo
    }
  }
}

export const newTodoChange = (text) => {
  return {
    type: NEW_TODO_CHANGED,
    data: {
      newTodo: text
    }
  }
}

export const crossOutTodo = (checked, id) => {
  return {
    type: CROSS_OUT_TODO,
    data: {
      id: id,
      checked: checked
    }
  }
}

export const removeTodo = (id) => {
  return {
    type: REMOVE_TODO,
    data: {
      id: id
    }
  }
}

export const requestJoke = () => {
  return {
    type: REQUEST_JOKE
  }
}

export const receiveJoke = (id, text) => {
  return {
    type: RECEIVE_JOKE,
    data: {
      id: id,
      text: text
    }
  }
}

export const fetchJoke = (id) => {
  return (dispatch) => {
    dispatch(requestJoke())

    // Delay response for better demonstration
    // Random Chuck Norris api
    const url = 'http://api.icndb.com/jokes/random'

    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        dispatch(receiveJoke(id, json.value.joke))
      })
  }
}

export const requestRemoteTodo = () => {
  return {
    type: REQUEST_REMOTE_TODO
  }
}

export const receiveRemoteTodo = (todo) => {
  return {
    type: RECEIVE_REMOTE_TODO,
    data: {
      todo: todo
    }
  }
}

export const fetchRemoteTodo = () => {
  return (dispatch) => {
    dispatch(requestRemoteTodo())

    // Delay response for better demonstration
    setTimeout(() => {
      // Random bacon ipsum api
      const url = 'https://baconipsum.com/api/?type=all-meat&paras=1&sentences=1&start-with-lorem=1'

      fetch(url)
        .then((response) => response.json())
        .then((json) => {
          dispatch(receiveRemoteTodo({
            id: +(new Date),
            text: json[0]
          }))
        })
    }, Math.random() * 2000)
  }
}

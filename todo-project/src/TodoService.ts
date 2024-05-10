import TodoType from "./todo"

const LOCAL_STORAGE_KEY = 'todos'

const TodoService = {

  getAllTodo: (): TodoType[] => {
    const todoString = localStorage.getItem(LOCAL_STORAGE_KEY)
    //JSON.parse - transform a string json in a js object
    return todoString ? JSON.parse(todoString) : []
  },

  getTodoById: (id: number): TodoType | undefined => {
    const todoList = TodoService.getAllTodo()
    const todoFound = todoList.find(item => item.id === id)
    if (todoFound === null && todoFound === undefined) {
      throw new Error("The element was not found")
    } else {
      return todoFound
    }
  },

  AddNewTodo:(text: string): TodoType => {
    const todoList = TodoService.getAllTodo()
    const newTodo: TodoType = {
      id: todoList.length + 1,
      text: text,
      completed: false
    }
    const updatedTodoList = [...todoList, newTodo]
    // JSON.stringfy makes the reverse process that JSON.parse does
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedTodoList))
    return newTodo
  },

  updateTodo: (todoUpdated: TodoType): TodoType => {
    const todoList = TodoService.getAllTodo()
    const updatedTodoList = todoList.map((todoFound) => (todoFound.id === todoUpdated.id ? todoUpdated : todoFound))
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedTodoList))
    return todoUpdated
  },
  deleteTodo: (id: number): void => {
    const todoList = TodoService.getAllTodo()
    // const todoFound = TodoService.getTodoById(id)
    // const todoListUpdated = todoList.filter((todo) => (todo.id !== todoFound?.id))
    const updatedTodoList = todoList.filter((todo) => (todo.id !== id))
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedTodoList))
  }
}

export default TodoService
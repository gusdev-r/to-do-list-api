import React,{Dispatch, SetStateAction, useState} from 'react'
import TodoService from '../TodoService'
import TodoType from '../todo'
import '../CSS/TodoForm.css'

interface PropTypes {
  setTodos: Dispatch<SetStateAction<TodoType[]>>
}

const TodoForm: React.FC<PropTypes> = ({setTodos}) => {

  const [newTodoText, setNewTodoText] = useState<string>("")

  const handleAddTodo = () => {
    if (newTodoText.trim() !== "") {
    const newTodo = TodoService.AddNewTodo(newTodoText)
    setTodos((previousTodo) => [...previousTodo, newTodo])
    setNewTodoText("")
    }
  }
  return (
    <div className='main'>
      <div className='container-form'>
        <input 
          type="text" 
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          autoFocus={true}
          placeholder='Digite uma nova tarefa'
        />
      </div>
      <button className='btn' onClick={handleAddTodo}>Adicionar</button>
    </div>
  )
}

export default TodoForm
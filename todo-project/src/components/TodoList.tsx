import React,{useState} from 'react'
import TodoType from '../todo'
import TodoForm from './TodoForm'
import TodoService from "../TodoService"
import { FaCheck, FaEdit } from 'react-icons/fa'
import { GiCancel } from 'react-icons/gi'
import { RiDeleteBin5Fill } from 'react-icons/ri'
import '../CSS/TodoList.css'

const TodoList: React.FC = () => {
  const [todos, setTodoList] = useState<TodoType[]>(TodoService.getAllTodo())

  const [editingTodoId, setEditingTodoId] = useState<number | null>(null)
  const [editedTodoText, setEditedTodoText] = useState<string>("")

  const handleEditStart = (id: number, text: string) => {
    setEditingTodoId(id)
    setEditedTodoText(text)
  }

  const handleEditCancel = () => {
    setEditingTodoId(null)
    setEditedTodoText("")
  }
  const handleEditSave = (id: number) => {
    if (editedTodoText.trim() !== "") {
      const updatedTodo = TodoService.updateTodo(
        {
          id,
          text: editedTodoText,
          completed: false
        }
      )
      setTodoList((previuosTodoList) => 
        previuosTodoList.map((todo) => (todo.id === id ? updatedTodo : todo))
      )
      setEditingTodoId(null)
      setEditedTodoText("")
    }
  }

  const handleEditDelete = (id: number) => {
    TodoService.deleteTodo(id)
    setTodoList((previousTodoList) => previousTodoList.filter((todo) => todo.id !== id))
  }

  return (
    <div className="container-todo">
      <div>
        <TodoForm setTodos={setTodoList} />
      </div>
      <div className="todo-container">
        {todos.map((todo) => (
          <div className="items" key={todo.id}>
            {editingTodoId === todo.id ? (
              <div className="editText">
                <input
                  className='input-edit'
                  type="text"
                  value={editedTodoText}
                  onChange={(e) => setEditedTodoText(e.target.value)}
                  autoFocus={true}
                />
                <button className='btn-style' onClick={() => handleEditSave(todo.id)}>
                  <FaCheck />
                </button>
                <button className="btn-style" onClick={handleEditCancel}>
                  <GiCancel/>
                </button>
              </div>
            ) : (
              <div className="editBtn">
                <span>{todo.text}</span>
                <button className='btn-style' onClick={() => handleEditStart(todo.id, todo.text)}>
                  <FaEdit />
                </button>
              </div>
            )}
            <button className='btn-style' onClick={() => handleEditDelete(todo.id)}>
              <RiDeleteBin5Fill />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};


export default TodoList
import './CSS/App.css'

import TodoList from './components/TodoList';


function App() {

  return (
    <div className="container">
      <div className="header">
        <h1 className='main-title'>
          Lista de tarefas
          </h1>
      </div>
      <TodoList/>
    </div>
  );
}

export default App

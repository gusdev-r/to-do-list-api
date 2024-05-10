import { FaClipboardList, FaPen } from 'react-icons/fa';
import './App.css'
import TodoList from './components/TodoList';

function App() {

  return (
    <div className="App">
      <div className="header">
        <div className="logoside">
        <FaPen/>
        <h1>What To Do</h1>
        <FaClipboardList />
        </div>
     
      </div>
      <TodoList />
    </div>
  );
}

export default App

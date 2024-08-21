import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import TaskPages from "./components/pages/TaskPages";
import TasksForm from "./components/pages/TasksForm";
import NotFound from "./components/pages/NotFound";

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/new">New</Link></li>
          </ul>
        </nav>
      </header>
      <Routes>
          <Route path='/' element={<TaskPages/>}/>
          <Route path='/new' element={<TasksForm/>}/>
          <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;


// Routes: multiples rutas
// Route: una sola ruta

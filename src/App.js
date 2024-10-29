import logo from './logo.svg';
import './App.css';
import React from 'react';
import Home from './components/Home';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import NotFound from './components/NotFound';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/tasks">Task List</Link> | <Link to="/add-task">Add Task</Link>
      </nav>
      <div className='content-container'>
        <h1>Task Manager</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<TaskList />} />
          <Route path="/add-task" element={<AddTask />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

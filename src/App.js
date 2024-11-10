import logo from './logo.svg';
import './App.css';
import React from 'react';
import Home from './components/Home';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import NotFound from './components/NotFound';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import AppBar from './components/AppBar';

function App() {
  return (
    <Router>
      <AppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<TaskList />} />
        <Route path="/add-task" element={<AddTask />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

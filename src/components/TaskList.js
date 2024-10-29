import React, { useState, useEffect} from "react";
import '../App.css';

function TaskList() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            const response = await fetch('/api/tasks');
            const data = await response.json();
            setTasks(data);
        };
        fetchTasks();
    }, []);

    return (
        <div>
            <h2>Task List</h2>
            {tasks.map(task => (
                <div className="task-list-container">
                    <h3 key={task._id}>Title: {task.title}</h3>
                    <p>Due Date: {task.dueDate}</p>
                    <p>Description: {task.description}</p>
                </div>
                
            ))}
        </div>
    );
    
};

export default TaskList;
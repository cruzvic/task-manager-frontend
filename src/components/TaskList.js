import React, { useState, useEffect} from "react";
import '../App.css';
import {Box, List, ListItem, ListItemText, IconButton} from '@mui/material';

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
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} paddingTop={"50px"}>
            <Box sx={{ width: '100%', maxWidth: 360, bgcolor: '#64b5f6', borderRadius: 4}}>
            {tasks.map(task => (
                    <List>
                        <ListItem key={task._id}>
                            <ListItemText primary={task.title}/>
                        </ListItem>
                        <ListItem>
                            <ListItemText secondary={task.dueDate}/>
                        </ListItem>
                        <ListItem>
                            <ListItemText secondary={task.description} />
                        </ListItem>
                    </List>
                ))}
        </Box>
        </Box>
        
    );
    
};

export default TaskList;
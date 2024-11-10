import React, {useState} from "react";
import {Box, TextField, Button} from '@mui/material';
import { DatePicker, LocalizationProvider} from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

function AddTask() {

    // States for the form fields
    const [title, setTitle] = useState('');
    const [dueDate, setDueDate] = useState(null);
    const [description, setDescription] = useState('');

    // sending a POST request to backend
    const handleSubmit = async () => {
        const taskData = {
            title: title,
            dueDate: dueDate ? dueDate.format('YYYY-MM-DD') : null,
            description: description
        };

        try {
            const response = await fetch('/api/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(taskData)
        });
        if (response.ok) {
            console.log('Task created successfully');

            setTitle('');
            setDueDate(null);
            setDescription('');
        } else {
            console.error('Problem while creating task')
        }
    } catch (error) {
        console.error("Networkerror: ", error);
    }

};

    return (
    <Box
    sx={{
        display: "flex",
        flexDirection: "column !important", 
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "50px"
    }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
            <TextField
            required
            id="title"
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}/>
            <DatePicker 
            label="Due Date"
            name="Due Date"
            value={dueDate}
            onChange={(newValue) => setDueDate(newValue)}
            slotProps={{
                textField: {
                    margin: 'normal'
                }
            }} />
            <TextField
            required
            label="Description"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}/>
        </div>
        </LocalizationProvider>
        <Button
        key={"task-adder"}
        onClick={handleSubmit}
        sx={{ my: 2, color: 'grey', border: '1px solid grey',  '&:hover': {backgroundColor: 'lightgray', color: 'black'}}}
        >Create
        </Button>
    </Box>
    )
}

export default AddTask;
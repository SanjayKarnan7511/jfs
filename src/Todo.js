import { useState } from "react";
import "./App.css";

function Todo() {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    const addtask = () => {
        if (task.trim() === '') return;
        setTasks([...tasks, task]);
        setTask('');
    };

    const deletetask = (index) => {
        const updated = tasks.filter((_, i) => i !== index);
        setTasks(updated);
    };

    return (
        <div className="container">
            <h1>TODO LIST</h1>
            <div className="row">
                <input className="input" type="text" placeholder="Enter the task..." value={task} onChange={(e) => setTask(e.target.value)} />
                <button className="addbtn" onClick={addtask}>Add task</button>
            </div>
            <ul>
                {tasks.map((t, i) => (
                    <li key={i}>
                        <div className="taskText">{t}</div>
                        <button className="delbtn" onClick={() => deletetask(i)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todo;

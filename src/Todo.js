import { useState, useEffect } from "react";
import "./App.css";

function Todo() {
    const [theme, setTheme] = useState(() => {
        try {
            return localStorage.getItem('theme') || 
            (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        } catch { return 'light' }
    });

    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark');
        try { localStorage.setItem('theme', theme); } catch {}
    }, [theme]);

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
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <h1>TODO LIST</h1>
                <button className="addbtn" onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')}>
                    {theme === 'dark' ? 'Light' : 'Dark'}
                </button>
            </div>
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

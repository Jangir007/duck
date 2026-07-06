import React, { useState } from "react";

function TestOneListening() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const addTask = () => {
        if (newTask.trim() !== "") {
            setTasks([...tasks, newTask]);
            setNewTask('');
        }
    };

    return (
        <div className="page">
            <iframe width="1033" height="465" src="https://www.youtube.com/embed/KoKyvJao69E" title="АБАЙ ҚҰНАНБАЙҰЛЫ||АБАЙДЫҢ ӨМІРІ МЕН ШЫҒАРМАШЫЛЫҒЫ||АБАЙҒА 180 ЖЫЛ📚📓АМЗЕХАН АНЕЛЬ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className="test-ifame"></iframe>
            <h2 className="test-title">Бейнеде не болғанын қысқаша сипаттаңыз.</h2>
            <ul className="test-ul">
                {tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
            <input 
                onChange={(e) => setNewTask(e.target.value)} 
                value={newTask} 
                type="text" 
                placeholder="Введи предложение"
                className="test-input"
            />
            <button onClick={addTask} className="test-button">Отправить</button>
        </div>
    );
}

export default TestOneListening;
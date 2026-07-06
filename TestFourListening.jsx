import React, { useState } from "react";

function TestFourListening(){
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
                    <iframe width="981" height="552" src="https://www.youtube.com/embed/cbQ1Oe_wJVw" title="ҚАЗАҚСТАННЫҢ ТАБИҒИ ҚОРЫҚТАРЫ. ҚАЗАҚ ГЕОГРАФИЯСЫ." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className="test-ifame"></iframe>
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

export default TestFourListening;
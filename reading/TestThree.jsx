import React, { useState } from "react";

function TestThree() {
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
            <h4 className="test-text">
                Спорт — адам денсаулығының кепілі және өмір сүру сапасын арттыратын маңызды құрал. Күнделікті дене шынықтырумен айналысу ағзаны нығайтып, иммунитетті көтереді және адамды сергек етеді. Спортпен шұғылдану арқылы біз төзімділікке, табандылыққа және өз мақсатымызға жетуге үйренеміз. Қазіргі таңда адамдар арасында салауатты өмір салтын ұстану кең етек жайып келеді.

                Спорттың түрлері өте көп: жүгіру, жүзу, футбол, волейбол және тағы басқалары. Әркім өзіне ұнайтын және денсаулығына пайдалы спорт түрін таңдай алады. Тіпті күнделікті таңертеңгі жаттығудың өзі ағзаға үлкен қуат береді. Спорт адамды тек физикалық тұрғыдан ғана емес, сонымен қатар психологиялық тұрғыдан да дамытады. Стресс пен шаршауды ұмытуға, жақсы көңіл-күй сақтауға көмектеседі. Сондықтан жастарды спортқа баулу — болашағымыздың саулығы үшін маңызды қадам.
            </h4>
            <h2 className="test-title">Спорттың адам өміріндегі маңызы туралы ойыңызды бөлісіңіз.</h2>
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

export default TestThree;
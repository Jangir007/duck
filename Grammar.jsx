import React, { useState } from "react";

function Grammar() {
    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState('')

    const addTask = () => {
        if (newTask.trim() !== "") {
            setTasks([...tasks, newTask]);
            setNewTask('');
        }
    }
    return (
        <div className="grammar">
            <h1 className="grammar-title">1 - Падежные окончания, Септіктер</h1>
            <h2 className="grammar-under-title">Именительный, Атау септік</h2>
            <p className="okonchaniya">Нет окончания</p>
            <p className="examples">Мысалы: гүл, кітап, алма</p>
            
            <h2 className="grammar-under-title">Родительный, Ілік септік</h2>
            <p className="okonchaniya">-ның/-нің, -тың/-тің, -дың/-дің</p>
            <p className="examples">Мысалы: гүлдің, кітаптың, алманың</p>
            
            <h2 className="grammar-under-title">Дательный, Барыс септік</h2>
            <p className="okonchaniya">-ға/-ге, -қа/-ке, -а/-е</p>
            <p className="examples">Мысалы: гүлге, кітапқа, алмаға</p>

            <h2 className="grammar-under-title">Винительный, Табыс септік</h2>
            <p className="okonchaniya">-ды/-ді, -ты/-ті, -ны/-ні</p>
            <p className="examples">Мысалы: гүлді, кітапты, алманы, мектепті</p>

            <h2 className="grammar-under-title">Местный, Жатыс септік</h2>
            <p className="okonchaniya">-да/-де, -та/-те, -нда/-нде</p>
            <p className="examples">Мысалы: гүлде, кітапта, алмада, мектепте</p>

            <h2 className="grammar-under-title">Исходный, Шығыс септік</h2>
            <p className="okonchaniya">-дан/-ден, -тан/-тен, -нан/-нен</p>
            <p className="examples">Мысалы: гүлден, кітаптан, алмадан, мектептен</p>

            <h2 className="grammar-under-title">Творительный, Көмектес септік</h2>
            <p className="okonchaniya">-мен, -бен, -пен, -менен, -бенен, -пенен</p>
            <p className="examples">Мысалы: гүлмен, кітаппен, алмамен, мектеппен</p>

            <h2 className="grammar-under-title">Множественное число, Көптік жалғау</h2>
            <p className="okonchaniya">-лар, лер -тар, тер -дар, дер</p>
            <p className="examples">Мысалы: гүлдер, кітаптар, алмалар</p>
            
            <h2 className="ToDoList-title"><span className="red-text">Тапсырма:</span> напиши одно предложение на каждую тему падежей</h2>

            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
            <input onChange={(e) => setNewTask(e.target.value)} value={newTask} type="text" placeholder="Введи предложение"/>
            <button onClick={addTask}>Отправить</button>
        </div>
    );
}

export default Grammar;

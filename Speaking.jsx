import React, { useState } from "react";
import "./App.css";

function Speaking() {
    const topics = [
        "Өзің туралы",
        "Сүйікті фильмің",
        "Қазақстанның жетістіктері",
        "Достық туралы",
        "Экология",
        "Кітап оқу",
        "Саяхат",
        "Заманауи технологиялар",
        "Спорт",
        "Болашақ жоспарың"
    ];

    const [currentTopic, setCurrentTopic] = useState("Тақырыпты таңдау үшін батырманы басыңыз");
    const [sentenceCount, setSentenceCount] = useState(0);

    const selectRandomTopic = () => {
        const randomTopic = topics[Math.floor(Math.random() * topics.length)];
        const count = Math.floor(Math.random() * 5) + 3; 
        
        setCurrentTopic(randomTopic);
        setSentenceCount(count);
    };

    return (
        <div className="page">
            <h1 className="title">Айтылым — Говорение 🎙️</h1>
            
            <div className="writing-box">
                <p className="topic-display">
                    Тақырыбыңыз: <strong>{currentTopic}</strong>
                </p>
                {sentenceCount > 0 && (
                    <p className="sentence-instruction">
                        Осы тақырып бойынша <strong>{sentenceCount} сөйлем</strong> айтыңыз.
                    </p>
                )}
                <button className="test-button" onClick={selectRandomTopic}>
                    Тақырыпты таңдау
                </button>
            </div>
        </div>
    );
}

export default Speaking;
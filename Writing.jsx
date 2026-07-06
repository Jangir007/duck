import React, { useState } from "react";

function Writing() {
    const topics = [
        "Менің қалам",
        "Қазақстанның табиғаты",
        "Менің мектебім",
        "Болашақтың мамандықтар",
        "Абай Құнанбаев",
        "Спорт",
        "Менің отбасым",
        "Футболдан әлем чемпионаты",
        "Технология және болашақ",
        "Менің әкем және анам"
    ];

    const [currentTopic, setCurrentTopic] = useState("100-110 сөздер эссэ жазыңыз");

    const selectRandomTopic = () => {
        const randomIndex = Math.floor(Math.random() * topics.length);
        setCurrentTopic(topics[randomIndex]);
    };

    return (
        <div className="page">
            <h1 className="title">Жазылым — Письмо ✍️</h1>
            
            <div className="writing-box">
                <p className="topic-display">Тақырыбыңыз: <strong>{currentTopic}</strong></p>
                <button className="test-button" onClick={selectRandomTopic}>
                    Тақырыпты таңдау
                </button>
            </div>
            
            <textarea className="textarea"></textarea>
        </div>
    );
}

export default Writing;
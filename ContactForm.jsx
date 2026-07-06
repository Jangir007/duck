import React, { useState } from "react";

function ContactForm() {
    const [name, setName] = useState('');
    const [submittedData, setsubmittedData] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setsubmittedData({name})
    }

    return (
        <>
            <form onSubmit={handleSubmit} action="form" className="contact-form">
                <label htmlFor="name">Сенің атың кім?</label>
                <input type="text" id="name" value={name} onChange={(e) => {setName(e.target.value)}} />
                <button type="submit" className="submit-btn">Жіберу</button>
            </form>
            {submittedData && (
                <div className="greeting-card">
                    <h2>Сәлем {submittedData.name}, менің атым Чип-Чип! Енді біз доспыз!</h2>
                </div>
            )}
        </>
    )
}

export default ContactForm;
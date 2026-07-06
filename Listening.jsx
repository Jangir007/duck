import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function Listening() {
    return (
        <div className="page">
            <h1 className="title">Тыңдалым — Аудирование 🎧</h1>
            <div className="row-1">
                <Link to="/testonelistening" className="test-link">
                    <button className="test-button">Test 1</button>
                </Link>
                <Link to="/testtwolistening" className="test-link">
                    <button className="test-button">Test 2</button>
                </Link>
            </div>          
            <div className="row-2">
                <Link to="/testthreelistening" className="test-link">
                    <button className="test-button">Test 3</button>
                </Link>
                <Link to="/testfourlistening" className="test-link">
                    <button className="test-button">Test 4</button>
                </Link>
            </div>      
        </div>
    );
}

export default Listening;
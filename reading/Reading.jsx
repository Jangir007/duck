import React from "react";
import { Link } from "react-router-dom";

function Reading() {
    return (
        <div className="page">
            <h1 className="title">Оқылым - Чтение 📖</h1>
            <div className="row-1">
                <Link to="/testone" className="test-link">
                    <button className="test-button">Test 1</button>
                </Link>
                <Link to="/testtwo" className="test-link">
                    <button className="test-button">Test 2</button>
                </Link>
            </div>          
            <div className="row-2">
                <Link to="/testthree" className="test-link">
                    <button className="test-button">Test 3</button>
                </Link>
                <Link to="/testfour" className="test-link">
                    <button className="test-button">Test 4</button>
                </Link>
            </div>      
        </div>
    );
}

export default Reading;
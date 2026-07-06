import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header.jsx";
import Home from "./Home.jsx";
import Grammar from "./Grammar.jsx"
import Vocabulary from "./Vocabulary.jsx";
import Listening from "./Listening.jsx";
import TestOneListening from "./TestOneListening.jsx";
import TestTwoListening from "./TestTwoListening.jsx";
import TestThreeListening from "./TestThreeListening.jsx";
import TestFourListening from "./TestFourListening.jsx";
import Reading from "./reading/Reading.jsx";
import TestOne from "./reading/TestOne.jsx";
import TestTwo from "./reading/TestTwo.jsx";
import TestThree from "./reading/TestThree.jsx";
import TestFour from "./reading/TestFour.jsx";
import Writing from "./Writing.jsx";
import Speaking from "./Speaking.jsx";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <div className="content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/grammar" element={<Grammar />} />
                    <Route path="/vocabulary" element={<Vocabulary />} />
                    <Route path="/listening" element={<Listening />} />
                    <Route path="/testonelistening" element={<TestOneListening />} />
                    <Route path="/testtwolistening" element={<TestTwoListening />} />
                    <Route path="/testthreelistening" element={<TestThreeListening />} />
                    <Route path="/testfourlistening" element={<TestFourListening />} />
                    <Route path="/reading" element={<Reading />} />
                    <Route path="/testone" element={<TestOne />} />
                    <Route path="/testtwo" element={<TestTwo />} />
                    <Route path="/testthree" element={<TestThree />} />
                    <Route path="/testfour" element={<TestFour />} />
                    <Route path="/writing" element={<Writing />} />
                    <Route path="/speaking" element={<Speaking />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
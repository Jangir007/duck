import React from "react";
import img from "./duckpet.png";
import ContactForm from "./ContactForm";

function Home() {
    return (
        <div className="welcome">
            <img src={img} alt="app-pet" className="img"/>
            <ContactForm/>
        </div>
    )
}

export default Home;
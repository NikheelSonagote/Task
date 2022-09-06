import React from "react";
import Title from "./Title";
import './Menu.css'

export default function Menu() {
    return (
        <div>
            <Title />
            <div className="Main-menu">
                <h1 className="menu">Welcome To Food's kitchen</h1>
            </div>
            <button className="btn-menu">Menu</button>
        </div>
    )
}
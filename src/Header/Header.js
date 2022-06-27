import React from "react";
import logo from './../images/logo.png'

export default function Header() {
    return (
        <header className="header">
            <div className="header__logo"><img src={logo} alt=""/><span>Meme Generator</span></div>
        </header>
    )
}
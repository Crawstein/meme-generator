import {Icon} from '@iconify/react';
import React, {useState, useEffect} from "react";

export default function Meme() {

    const [meme, setMeme] = useState({
        topText: "Text at the top",
        bottomText: "Text at the bottom",
        randomImage: "https://i.imgflip.com/gk5el.jpg"
    })

    const [allMemes, setAllMemes] = useState([])

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])


    function handleClick(e) {
        e.preventDefault()
        const memeUrl = (allMemes[Math.floor(Math.random() * allMemes.length)].url)
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: memeUrl
        }))
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <div className="meme">
            <form className="form">
                <div className="inputs__wrap">
                    <input type="text" name="topText" className="input" onChange={handleChange} value={meme.topText}
                           placeholder="Text at the top"/>
                    <input type="text" name="bottomText" className="input" onChange={handleChange}
                           value={meme.bottomText} placeholder="Text at the bottom"/>
                </div>
                <button className="button" onClick={handleClick}>Get a new meme image <Icon
                    icon="arcticons:memetastic"/></button>
            </form>
            <small className="small">*memes database may return empty images</small>
            <div className="meme__result">
                <div className="meme__text topText">{meme.topText}</div>
                <img src={meme.randomImage} alt=""/>
                <div className="meme__text bottomText">{meme.bottomText}</div>
            </div>

        </div>
    )
}
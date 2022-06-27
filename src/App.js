import Header from "./Header/Header";
import Meme from "./Meme/Meme";
import {useEffect} from 'react'

function App() {
    useEffect(() => {
        document.title = "Meme Generator"
    }, [])
    return (
        <div className="app">
            <Header/>
            <Meme/>
        </div>
    );
}

export default App;

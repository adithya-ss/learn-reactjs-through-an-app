import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Card = ({ title }) => {
    const [count, setCount] = useState(0); 
    const [hasLiked, setHasLiked] = useState(false);
    useEffect(() => {
        console.log(`"${title}" has been liked: ${hasLiked}.`);
    }, [hasLiked]); // This will run every time hasLiked changes

    /*
    The below use effect will run only ONCE, when the component is mounted.App
    useEffect(() => {
        console.log("CARD RENDERED!");
    }, []);
    */

    return (
        // <div className='card' onClick={() => setcount((prevState) => prevState + 1)}> ...... </div> - Recommended to use another callback function without having to use the state variable directly. 
        <div className='card' onClick={() => setCount(count + 1)}>
            <h2>{title} <br/> {count || null}</h2>
            <button onClick={() => setHasLiked(!hasLiked)}>
                {hasLiked ? 'Liked' : 'Like'}
            </button>
        </div>
    )
}

const App = () => {
    return (
        <div className="card-container">
            <Card title="Seven" />
            <Card title="Prisoners" />
            <Card title="Bird Box" />
        </div>
    )
}

export default App

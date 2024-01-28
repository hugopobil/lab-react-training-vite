import { useState } from "react";

const LikeButton = () => {
    
    const [counter, setCounter] = useState(0);
    
    const [color, setColor] = useState("purple");
    
    const colors = ["purple","blue","green","yellow","orange","red"];
    
    const handleClick = () => {
        setCounter(counter + 1);
        setColor(colors[Math.floor(Math.random()*colors.length)]);
    };
    
    return (
        <button style={{backgroundColor: color}} onClick={handleClick}>{counter} Likes</button>
    );
}

export default LikeButton;
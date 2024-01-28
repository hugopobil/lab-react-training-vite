import React, { useState } from 'react';

const ClickablePicture = ({ img, imgClicked }) => {
    
    const [clicked, setClicked] = useState(false);
    const handleClick = () => {
        setClicked(!clicked);
    }
    
    return (
        <div>
            <img onClick={handleClick} src={clicked ? imgClicked : img} alt="Maxence" />
        </div>
    )
}

export default ClickablePicture;
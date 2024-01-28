const BoxColor = ({r,g,b}) => {
    
    const divStyle = {
        backgroundColor: `rgb(${r}, ${g}, ${b})`,
        width: '200px',
        height: '200px',
    };
    return (
        <div style={divStyle}>
        <p>
            rgb({r},{g},{b})
        </p>
        </div>
    );
}

export default BoxColor;
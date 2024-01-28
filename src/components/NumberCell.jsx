const NumberCell = ({ value, color }) => {

    const styleDiv = {
        backgroundColor: color,
        width: '100px',
        height: '100px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid black'
    };

    return(
        <div style={styleDiv}>{value}</div>
    )
    
};

export default NumberCell;
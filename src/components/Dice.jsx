const Dice = ({ dice, rollDice }) => {
    
    return (
        <div onClick={rollDice} className="dice">
            <img src={dice} alt="Dice" />
        </div>
    )
}

export default Dice;

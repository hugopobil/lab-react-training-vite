const CreditCard = ({
  type,
  number,
  expirationMonth,
  expirationyear,
  bank,
  owner,
  bgColor,
  color,
}) => {

    const divStyle = {
        backgroundColor: `${bgColor}`,
        color: `${color}`,
        width: '400px',
        height: '200px',
    };

  return (
    <div className="credit-card" style={divStyle}>
      <div className="credit-card-type">
        <img
          src={
            type === "Visa"
              ? "src/assets/images/visa.png"
              : "src/assets/images/master-card.svg"
          }
          alt="credit card type"
        />
      </div>
      <p className="credit-card-number">
        {number.replace(/\d(?=\d{4})/g, "*")}
      </p>

      <div className="credit-card-info">
        <p>
          Expires {expirationMonth}/{expirationyear} {bank}
        </p>
        <p>{owner}</p>
      </div>
    </div>
  );
};

export default CreditCard;

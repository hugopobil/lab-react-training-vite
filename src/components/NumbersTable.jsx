import NumberCell from './NumberCell';

const NumbersTable = (props) => {
    const { limit } = props;
    const numbers = [];
    for (let i = 1; i <= limit; i++) {
        numbers.push(i);
    }
    return (
        <div className="numbers-table">
            {numbers.map((number) => {

                const number_is_pair = number % 2 === 0;

                if (number_is_pair) {
                    return (
                        <NumberCell value={number} color="red" />
                    );
                } else {
                    return (
                        <NumberCell value={number} color="white" />
                    );
                }
            })}
        </div>
    );
};

export default NumbersTable;
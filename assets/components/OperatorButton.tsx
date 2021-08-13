import React from 'react';
import Operator from '../types/Operator';

interface Props {
    operator: Operator;
    perform: (symbol: string) => void;
}

const OperatorButton: React.FC<Props> = ({
    operator,
    perform
}) => {
    return (
        <button onClick={() => perform(operator.symbol)} className={`button__${operator.slug}`}>
            { operator.symbol }
        </button>
    );
};

export default OperatorButton;
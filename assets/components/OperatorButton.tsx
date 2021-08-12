import React from 'react';
import { Operator } from '../types/Operator';

interface Props {
    operator: Operator;
    perform: (symbol: string) => void;
}

const OperatorButton: React.FC<Props> = ({
    operator,
    perform
}) => {
    return (
        <div className={`button__${operator.symbol}`}>
            <button onClick={() => perform(operator.symbol)}>
                { operator.symbol }
            </button>
        </div>
    );
};

export default OperatorButton;
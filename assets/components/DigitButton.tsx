import React from 'react';
import { Digit } from '../types/Digit';

interface Props {
    digit: Digit;
    perform: (symbol: string) => void;
}

const DigitButton: React.FC<Props> = ({
    digit,
    perform
}) => {
    return (
        <div className={`button__${digit.symbol}`}>
            <button onClick={() => perform(digit.symbol)} >
                { digit.symbol }
            </button>
        </div>
    );
};

export default DigitButton;
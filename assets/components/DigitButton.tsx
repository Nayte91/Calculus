import React from 'react';
import Digit from '../types/Digit';

interface Props {
    digit: Digit;
    perform: (symbol: string) => void;
}

const DigitButton: React.FC<Props> = ({
    digit,
    perform
}) => {
    return (
        <button onClick={() => perform(digit.symbol)} className={`button__${digit.slug}`}>
            { digit.symbol }
        </button>
    );
};

export default DigitButton;
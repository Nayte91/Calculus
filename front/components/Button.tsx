import React from 'react';
import Digit from '../types/Key';

interface ButtonProps {
    digit: Digit;
    perform: (symbol?: string) => void;
}

const Button: React.FC<ButtonProps> = ({ digit, perform }) => (
    <button onClick={ () => perform(digit.symbol) } className={ `button__${digit.slug} button__${digit.type}` }>
        { digit.symbol }
    </button>
);

export default Button;
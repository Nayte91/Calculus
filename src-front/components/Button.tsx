import React, { useState, useEffect } from 'react';
import Key from '../types/Key';

interface ButtonProps {
    calcKey: Key;
    perform: (symbol?: string) => void;
}

const Button: React.FC<ButtonProps> = ({ calcKey, perform }) => {
    const [active, setActive] = useState<boolean>(false);

    const handleClick = (pressing: boolean = false): void => {
        pressing || perform(calcKey.symbol);
        setActive(pressing);
    }

    return (
        <button 
            onMouseDown={ () => handleClick(true) }
            onMouseUp={ () => handleClick(false) } 
            className={ `button__${calcKey.slug} button__${calcKey.type}${active ? " button--pressed" : ""}` }
            aria-label={ `press ${calcKey.slug}` }
        >
            { calcKey.symbol }
        </button>
    );
}

export default Button;
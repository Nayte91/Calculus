import React from 'react';
import { Action } from '../types/Action';

interface Props {
    symbol: string;
    action: () => void;
}

const ActionButton: React.FC<Props> = ({
    symbol,
    action
}) => {
    return (
        <div className={`button__${symbol}`}>
            <button onClick={action} >
                { symbol }
            </button>
        </div>
    );
};

export default ActionButton;
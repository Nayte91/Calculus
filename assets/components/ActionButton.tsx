import React from 'react';
import '../styles/components/Button.scss';

interface Props {
    symbol: string;
    slug: string,
    action: () => void;
}

const ActionButton: React.FC<Props> = ({
    symbol,
    slug,
    action
}) => (
    <button onClick={action} className={`button__${slug}`}>
        { symbol }
    </button>
);

export default ActionButton;
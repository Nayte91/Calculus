import React from "react";

import '../styles/components/Display.scss';

interface DisplayProps {
    history: string[];
    current: string;
}

const Display: React.FC<DisplayProps> = ({ history, current }) => (
    <div className='calculator__display'>
        <div className="display__history">
            <span className='display__text'>{ history[history.length - 1] }</span>
        </div>
        <div className="display__current">
            <span className='display__text'>{ current }</span>
        </div>
    </div>
);

export default Display;
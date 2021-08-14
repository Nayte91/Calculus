import React from "react";

import '../styles/components/Screen.scss';

interface ScreenProps {
    history: string[];
    current: string;
}

const Screen: React.FC<ScreenProps> = ({ history, current }) => (
    <div className='calculator__screen'>
        <div className="screen__history">
            <span className='display__text'>{ history[history.length - 1] }</span>
        </div>
        <div className="screen__current">
            <span className='display__text'>{ current }</span>
        </div>
    </div>
);

export default Screen;
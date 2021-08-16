import React from "react";

interface ScreenProps {
    history: string;
    current: string;
}

const Screen: React.FC<ScreenProps> = ({ history, current }) => (
    <div className='calculator__screen' aria-label='calculator screen'>
        <div className="screen__history" aria-label='screen history'>
            <span className='display__text'>{ history }</span>
        </div>
        <div className="screen__inputs" aria-label='screen inputs'>
            <span className='display__text'>{ current }</span>
        </div>
    </div>
);

export default Screen;
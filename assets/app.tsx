import React from 'react';
import ReactDOM from 'react-dom';
import './styles/app.scss';
import Calculator from "./components/Calculator";

ReactDOM.render(
    <React.StrictMode>
        <Calculator />
    </React.StrictMode>,
    document.getElementById('root')
);
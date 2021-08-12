import React, { useState } from 'react';
import axios from "axios";

import CalculatorContext from "../types/CalculatorContext";
import OperatorButton from './OperatorButton';
import DigitButton from './DigitButton';
import ActionButton from './ActionButton';
import './../styles/components/Calculator.scss'
import { Digits } from '../data/Digits';
import { Operators } from '../data/Operators';
import { Actions } from '../data/Actions';

const Calculator: React.FC = () => {
    const errorMsg: string = 'ERROR';
    const [calculatorInput, setCalculatorInput] = useState<string>('');
    const [stateQueue, setStateQueue] = useState<string[]>([]);
    const [clearNext, setClearNext] = useState<boolean>(false);

    const addToQueue = (state: string = calculatorInput): void => {
        if (state !== errorMsg) {
            setStateQueue([...stateQueue, state]);
        }
    };

    const revertToPreviousState = (): void => {
        setCalculatorInput(stateQueue.pop() || '');
    };

    const compute = (): void => {
        addToQueue();

        try {
            const solvedVal = eval(calculatorInput.replace(/×/g, '*'));
            setCalculatorInput(solvedVal);
        } catch (err) {
            setCalculatorInput(errorMsg);
            setClearNext(true);
        }
    };

    const enterInput = (newInput: string): void => {
        if (clearNext) {
            addToQueue();
        }
        const prefix: string = clearNext ? '' : calculatorInput;
        setCalculatorInput(`${prefix}${newInput}`);
        setClearNext(false);
    };

    const clearInput = (saveState: boolean = true): void => {
        if (saveState) {
            addToQueue();
        }
        setCalculatorInput('');
    };

    axios.post(`https://localhost:443/computation`, '{"entry": "4+3"}' )
        .then(res => {
            console.log(res);
            console.log(res.data);
        })

    return (
        <CalculatorContext.Provider value={{ enterInput }}>
            <section className='calculator'>
                <input
                    className='calculator__display'
                    type='text'
                    readOnly
                    value={calculatorInput}
                />
                <div className='calculator__pad'>
                    <div className='calculator__pad__digits'>
                        { Digits.map(Digit => { return <DigitButton digit={Digit} perform={enterInput} /> })}
                    </div>
                    <div className='calculator__pad__operations'>
                        { Operators.map(Operator => { return <OperatorButton operator={Operator} perform={enterInput} /> })}
                    </div>
                    <div className='calculator__pad__actions'>
                        <ActionButton symbol='C' action={revertToPreviousState} />
                        <ActionButton symbol='AC' action={clearInput} />
                        <ActionButton symbol='=' action={compute} />
                    
                        {/* { Actions.map(Action => { return <ActionButton action={Action} perform={compute} /> })}  */}
                    </div>
                </div>
            </section>
        </CalculatorContext.Provider>
    );
}

export default Calculator
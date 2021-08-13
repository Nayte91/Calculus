import React, { SetStateAction, useState } from 'react';
import axios, { AxiosResponse } from "axios";

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

        const resultat = axios
            .post(`https://localhost:443/computation`, '{"entry": "' + calculatorInput + '"}')
            .then((result: AxiosResponse) => {
                setCalculatorInput(result.data.result);
            });
        
        /* const solvedVal = eval(calculatorInput.replace(/×/g, '*'));
        const solvedVal = request(calculatorInput) */
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

    return (
        <CalculatorContext.Provider value={{ enterInput }}>
            <section className='calculator'>
                <div className='calculator__display'>
                    <div className="display__history"><span className='display__text'>{calculatorInput}</span></div>
                    <div className="display__current">
                        <span className='display__text'>{calculatorInput}</span>
                    </div>
                </div>
                <div className='calculator__pad'>
                    { Digits.map(Digit => { return <DigitButton digit={Digit} perform={enterInput} /> })}
                    { Operators.map(Operator => { return <OperatorButton operator={Operator} perform={enterInput} /> })}
                    <ActionButton symbol='C' slug='clear' action={revertToPreviousState} />
                    <ActionButton symbol='AC' slug='reset' action={clearInput} />
                    <ActionButton symbol='=' slug='equal' action={compute} />
                    {/* { Actions.map(Action => { return <ActionButton action={Action} perform={compute} /> })}  */}
                </div>
            </section>
        </CalculatorContext.Provider>
    );
}

export default Calculator
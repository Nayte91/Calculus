import React, { useState } from 'react';
import CalculatorContext from "../types/CalculatorContext";
import OperatorButton from './OperatorButton';
import DigitButton from './DigitButton';
import ActionButton from './ActionButton';
import './../styles/components/Calculator.scss';
import digits from '../data/digits';
import operators from '../data/operators';
import computation from '../data/computation';

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

    const compute = async (): Promise<void> => {
        addToQueue();
        
        const result = await computation(calculatorInput);

        setCalculatorInput(result);
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
                    <div className="display__history"><span className='display__text'>{stateQueue}</span></div>
                    <div className="display__current">
                        <span className='display__text'>{calculatorInput}</span>
                    </div>
                </div>
                <div className='calculator__pad'>
                    { digits.map(Digit => { return <DigitButton digit={Digit} perform={enterInput} /> })}
                    { operators.map(Operator => { return <OperatorButton operator={Operator} perform={enterInput} /> })}
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
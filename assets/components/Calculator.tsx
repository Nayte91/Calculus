import React, { useState } from 'react';
import CalculatorContext from "../types/CalculatorContext";
import DigitButton from './DigitButton';
import ActionButton from './ActionButton';
import './../styles/components/Calculator.scss';
import digits from '../data/digits';
import computation from '../data/computation';

const Calculator: React.FC = () => {
    const [calculatorInput, setCalculatorInput] = useState<string>('');
    const [stateQueue, setStateQueue] = useState<string[]>([]);
    const [clearNext, setClearNext] = useState<boolean>(false);

    const revertToPreviousState = (): void => setCalculatorInput(stateQueue.pop() || '');

    const compute = async (): Promise<void> => {
        QueueInput();
        
        const result: string = await computation(calculatorInput);

        setCalculatorInput(result);
    };

    const enterInput = (newInput: string): void => {
        clearNext && QueueInput();

        const prefix: string = clearNext ? '' : calculatorInput;

        setCalculatorInput(`${prefix}${newInput}`);
        setClearNext(false);
    };

    const QueueInput = (state: string = calculatorInput): void => setStateQueue([...stateQueue, state]);

    const clearInput = (): void => {
        clearNext && QueueInput();
        setCalculatorInput('');
    };
    
    return (
        <CalculatorContext.Provider value={{ enterInput }}>
            <section className='calculator'>
                <div className='calculator__display'>
                    <div className="display__history"><span className='display__text'>{ stateQueue }</span></div>
                    <div className="display__current">
                        <span className='display__text'>{ calculatorInput }</span>
                    </div>
                </div>
                <div className='calculator__pad'>
                    { digits.map(digit => <DigitButton key={ digit.symbol } digit={ digit } perform={ enterInput } />) }
                    <ActionButton symbol='C' slug='clear' action={ revertToPreviousState } />
                    <ActionButton symbol='AC' slug='reset' action={ clearInput } />
                    <ActionButton symbol='=' slug='equal' action={ compute } />
                    {/* { Actions.map(Action => { return <ActionButton action={Action} perform={compute} /> })}  */}
                </div>
            </section>
        </CalculatorContext.Provider>
    );
}

export default Calculator
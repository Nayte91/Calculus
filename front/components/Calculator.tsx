import React, { useState } from 'react';
import Button from './Button';
import keys from '../data/keys';
import computation from '../data/computation';
import './../styles/components/Calculator.scss';

const Calculator: React.FC = () => {
    const [calculatorInput, setCalculatorInput] = useState<string>('');
    const [stateQueue, setStateQueue] = useState<string[]>([]);
    const [clearNext, setClearNext] = useState<boolean>(false);

    const enterInput = (newInput: string): void => {
        clearNext && QueueInput();

        const prefix: string = clearNext ? '' : calculatorInput;

        setCalculatorInput(`${prefix}${newInput}`);
        setClearNext(false);
    };

    const QueueInput = (state: string = calculatorInput): void => setStateQueue([...stateQueue, state]);

    const clean = (): void => setCalculatorInput(stateQueue.pop() || '');

    const reset = (): void => {
        setStateQueue([]);
        setCalculatorInput('');
    };

    const compute = async (): Promise<void> => {
        QueueInput();
        
        const result: string = await computation(calculatorInput);

        setCalculatorInput(result);
    };
    
    return (
        <section className='calculator'>
            <div className='calculator__display'>
                <div className="display__history">
                    <span className='display__text'>{ stateQueue }</span>
                </div>
                <div className="display__current">
                    <span className='display__text'>{ calculatorInput }</span>
                </div>
            </div>
            <div className='calculator__pad'>
                { keys.map(key => <Button key={ key.symbol } digit={ key } perform={ key.perform ? eval(key.perform) : enterInput } />) }
            </div>
        </section>
    );
}

export default Calculator
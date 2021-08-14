import React, { useState } from 'react';
import Screen from './Screen';
import Button from './Button';
import keys from '../data/keys';
import computation from '../data/computation';

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
            <Screen history={ stateQueue } current={ calculatorInput } />
            <div className='calculator__pad'>
                { keys.map(key => <Button key={ key.symbol } calcKey={ key } perform={ key.perform ? eval(key.perform) : enterInput } />) }
            </div>
        </section>
    );
}

export default Calculator
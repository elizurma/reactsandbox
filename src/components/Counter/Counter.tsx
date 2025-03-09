import React, { useState, useEffect } from 'react';
import { counterInterface } from './CounterInterface';
import { CounterProps } from '../../types/counter';

const translations = {
    en: {
        increment: 'Increment',
        decrement: 'Decrement',
        count: 'Count'
    },
    he: {
        increment: 'הוסף',
        decrement: 'הפחת',
        count: 'ספירה'
    }
};

const Counter: React.FC<CounterProps> = ({ initialCount = 0, language = 'en', direction = 'ltr' }) => {
    const [count, setCount] = useState<number>(initialCount);
  
    useEffect(() => {
        counterInterface.setHandlers(setCount, count);
    }, [count]);
  
    return (
        <div dir={direction || 'rtl'} className="counter-container">
            <h2>{translations[language].count}: {count}</h2>
            <div className="counter-buttons">
                <button onClick={counterInterface.increment}>
                    {translations[language].increment}
                </button>
                <button onClick={counterInterface.decrement}>
                    {translations[language].decrement}
                </button>
            </div>
        </div>
    );
};

export default Counter;
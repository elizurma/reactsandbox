import React from 'react';
import ReactDOM from 'react-dom';
import Counter from '../components/Counter/Counter';
import { counterInterface } from '../components/Counter/CounterInterface';

// Expose initialization function
if (!window.NewTech) {
    window.NewTech = {}
}
window.NewTech.initCounter = (containerId, options = {}) => {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Container element with ID "${containerId}" not found.`);
        return;
    }

    const initialProps = {
        initialCount: options.initialCount || 0,
        language: options.language || 'en',
        direction: options.direction || 'ltr'
    };

    ReactDOM.render(
        React.createElement(Counter, initialProps),
        container
    );

    // Set up event listener for count changed
    if (options.onCountChanged) {
        counterInterface.subscribe(state => {
            if (state.count !== undefined) {
                options.onCountChanged(state.count);
            }
        });
    }
};
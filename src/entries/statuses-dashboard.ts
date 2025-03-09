import React from 'react';
import ReactDOM from 'react-dom';
import StatusesDashboard from '../components/StatusesDashboard/StatusesDashboard';
import { statusesDashboardInterface } from '../components/StatusesDashboard/StatusesDashboardInterface';

// Expose initialization function
if (!window.NewTech) {
    window.NewTech = {}
}
window.NewTech.initStatusesDashboard = (containerId, options = {}) => {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Container element with ID "${containerId}" not found.`);
        return;
    }

    const initialProps = {
        title: options.title || 'Job Statuses Dashboard',
        statuses: options.initialStatuses || [],
        selectedStatusId: options.selectedStatusId || null,
        language: options.language || 'en',
        direction: options.direction || 'ltr'
    };

    ReactDOM.render(
        React.createElement(StatusesDashboard, initialProps),
        container
    );

    // Set up event listener for status selection
    if (options.onStatusSelected) {
        statusesDashboardInterface.subscribe(state => {
            if (state.selectedStatusId !== undefined) {
                options.onStatusSelected(state.selectedStatusId);
            }
        });
    }
};
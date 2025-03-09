import React, { useState, useEffect } from 'react';
import { statusesDashboardInterface } from './StatusesDashboardInterface';
import { Status, StatusesDashboardProps } from '../../types/statuses-dashboard';
import './StatusesDashboard.css';

const StatusesDashboard: React.FC<StatusesDashboardProps> = ({
    title,
    statuses,
    selectedStatusId = null,
    language = 'en',
    direction = 'ltr',
}) => {
    // Local state
    const [currentStatuses, setCurrentStatuses] = useState<Status[]>(statuses);
    const [selectedStatus, setSelectedStatus] = useState<string | null>(selectedStatusId);
    const [currentLanguage, setCurrentLanguage] = useState(language);
    const [currentDirection, setCurrentDirection] = useState<'ltr' | 'rtl'>(direction as 'ltr' | 'rtl');

    // Initialize the interface when the component mounts
    useEffect(() => {
        statusesDashboardInterface.setHandlers(
            // Update statuses handler
            (newStatuses) => {
                setCurrentStatuses(newStatuses);
            },
            // Select status handler
            (statusId) => {
                setSelectedStatus(statusId);
            },
            // Set language handler
            (lang, dir) => {
                setCurrentLanguage(lang);
                setCurrentDirection(dir);
            }
        );
    }, []);

    // Update component when props change
    useEffect(() => {
        setCurrentStatuses(statuses);
    }, [statuses]);

    useEffect(() => {
        setSelectedStatus(selectedStatusId);
    }, [selectedStatusId]);

    useEffect(() => {
        setCurrentLanguage(language as 'en' | 'he');
        setCurrentDirection(direction as 'ltr' | 'rtl');
    }, [language, direction]);

    // Handle status selection
    const handleStatusClick = (statusId: string) => {
        const newSelectedStatus = selectedStatus === statusId ? null : statusId;
        setSelectedStatus(newSelectedStatus);

        // Notify via the interface
        statusesDashboardInterface.selectStatus(newSelectedStatus);
    };

    return (
        <div className={`statuses-dashboard ${currentDirection}`}>
            <h2>{title}</h2>
            <div className="statuses-grid">
                {currentStatuses.map(status => (
                    <div
                        key={status.id}
                        className={`status-item ${selectedStatus === status.id ? 'selected' : ''}`}
                        onClick={() => handleStatusClick(status.id)}
                    >
                        <span className="status-icon">{status.icon}</span>
                        <div className="status-name">{status.name}</div>
                        <div className="status-count">{status.jobCount}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StatusesDashboard;
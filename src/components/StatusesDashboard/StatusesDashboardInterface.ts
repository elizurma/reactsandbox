import { ComponentBase } from '../../lib/ComponentBase';
import { Status } from '../../types/statuses-dashboard';

interface DashboardState {
    statuses: Status[];
    selectedStatusId: string | null;
    language: string;
    direction: 'ltr' | 'rtl';
}

export class StatusesDashboardInterface extends ComponentBase<DashboardState> {
    private setStatusesCallback: ((statuses: Status[]) => void) | null = null;
    private setSelectedCallback: ((id: string | null) => void) | null = null;
    private setLanguageCallback: ((lang: 'en' | 'he', dir: 'ltr' | 'rtl') => void) | null = null;

    constructor(initialState: Partial<DashboardState> = {}) {
        super({
            statuses: initialState.statuses || [],
            selectedStatusId: initialState.selectedStatusId || null,
            language: initialState.language || 'en',
            direction: initialState.direction || 'ltr'
        });
    }

    public setHandlers(
        setStatuses: (statuses: Status[]) => void,
        setSelected: (id: string | null) => void,
        setLanguage: (lang: 'en' | 'he', dir: 'ltr' | 'rtl') => void
    ) {
        this.setStatusesCallback = setStatuses;
        this.setSelectedCallback = setSelected;
        this.setLanguageCallback = setLanguage;
    }

    public updateStatuses = (statuses: Status[]) => {
        if (this.setStatusesCallback) {
            this.state = { ...this.state, statuses };
            this.setStatusesCallback(statuses);
            this.notifyObservers();
        }
    }

    public selectStatus = (statusId: string | null) => {
        if (this.setSelectedCallback) {
            this.state = { ...this.state, selectedStatusId: statusId };
            this.setSelectedCallback(statusId);
            this.notifyObservers();
        }
    }

    public setLanguage = (language: 'en' | 'he' = 'en', direction: 'ltr' | 'rtl' = 'ltr') => {
        if (this.setLanguageCallback) {
            this.state = { ...this.state, language, direction };
            this.setLanguageCallback(language, direction);
            this.notifyObservers();
        }
    }

    public getSelectedStatus = () => {
        return this.state.selectedStatusId;
    }
}

export const statusesDashboardInterface = new StatusesDashboardInterface();

// Expose the interface globally
(window as any).NewTech.StatusesDashboard = statusesDashboardInterface;
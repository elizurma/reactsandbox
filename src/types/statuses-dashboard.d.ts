export interface Status {
    id: string;
    name: string;
    icon: string;
    jobCount: number;
    isDisabled?: boolean;
}

export type OrderOption = 'a-z' | 'z-a' | 'jobs-asc' | 'jobs-desc';

export interface StatusesDashboardProps {
    title: string;
    statuses: Status[];
    selectedStatusId?: string | null;
    language?: 'en' | 'he';
    direction?: 'ltr' | 'rtl';
}

export interface StatusesEventData {
    statusId: string | null;
}
export interface CounterProps {
    initialCount?: number;
    language?: 'en' | 'he';
    direction?: 'ltr' | 'rtl';
}

export interface CounterState {
    count: number;
}
// src/types/global.d.ts
declare global {
    interface Window {
        NewTech?: {
            // Counter interface
            Counter?: {
                increment: () => void;
                decrement: () => void;
                getCount: () => number;
                setCount: (count: number) => void;
                setHandlers: (setCount: (count: number) => void) => void;
                subscribe: (callback: (state: any) => void) => () => void;
            };

            // StatusesDashboard interface
            StatusesDashboard?: {
                updateStatuses: (statuses: any[]) => void;
                selectStatus: (statusId: string | null) => void;
                setLanguage: (language: string, direction?: 'ltr' | 'rtl') => void;
                getSelectedStatus: () => string | null;
                subscribe: (callback: (state: any) => void) => () => void;
            };

            // Render functions
            initCounter?: (containerId: string, props?: any) => void;
            initStatusesDashboard?: (containerId: string, options?: any) => void;
        }
    }
}

export { };
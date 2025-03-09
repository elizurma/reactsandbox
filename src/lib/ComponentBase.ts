// Generic base class with common functionality
export class ComponentBase<T> {
    protected observers: Array<(state: T) => void> = [];
    protected state: T;

    constructor(initialState: T) {
        this.state = initialState;
    }

    public subscribe(callback: (state: T) => void) {
        this.observers.push(callback);
        // Immediately call with current state
        callback(this.state);
        // Return unsubscribe function
        return () => {
            this.observers = this.observers.filter(cb => cb !== callback);
        };
    }

    protected notifyObservers() {
        this.observers.forEach(callback => callback(this.state));
    }

    public getState(): T {
        return this.state;
    }
}
import { ComponentBase } from '../../lib/ComponentBase';
import { CounterState } from '../../types/counter';

export class CounterInterface extends ComponentBase<CounterState> {
    private setCountCallback: ((count: number) => void) | null = null;

    constructor(initialCount: number = 0) {
        super({ count: initialCount });
    }

    public setHandlers(setCount: (count: number) => void, count: number) {
        this.setCountCallback = setCount;
    }

    public increment = () => {
        if (this.setCountCallback) {
            this.state = { count: this.state.count + 1 };
            this.setCountCallback(this.state.count);
            this.notifyObservers();
        }
    }

    public decrement = () => {
        if (this.setCountCallback) {
            this.state = { count: this.state.count - 1 };
            this.setCountCallback(this.state.count);
            this.notifyObservers();
        }
    }

    public getCount = () => {
        return this.state.count;
    }

    public setCount = (newCount: number) => {
        if (this.setCountCallback) {
            this.state = { count: newCount };
            this.setCountCallback(newCount);
            this.notifyObservers();
        }
    }
}

export const counterInterface = new CounterInterface();

// Expose the interface globally
(window as any).NewTech.Counter = counterInterface;
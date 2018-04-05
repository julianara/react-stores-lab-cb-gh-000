import Store from './Store';

class CounterStore extends Store {
  constructor() {
    super(0);
  }
  
  increment() {
    this.setState(this.state + 1);
  }
  
  decrement() {
    this.setState(this.state - 1);
  }
}

const counterStore = new CounterStore();

export default counterStore;

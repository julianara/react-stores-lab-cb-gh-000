<<<<<<< HEAD
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
=======
import Store from './store';

class CounterStore extends Store {
  // Your implementation here.
  // Hint: extend the Store class!
>>>>>>> 6537562befafade2a72eec373e0a5c98d073686b
}

const counterStore = new CounterStore();

export default counterStore;

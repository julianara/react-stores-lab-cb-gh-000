class Store {

<<<<<<< HEAD
  constructor(initialState) {
=======
  constructor(initalState) {
>>>>>>> 6537562befafade2a72eec373e0a5c98d073686b
    this.state = initialState;
    this.listeners = [];
  }
  
  addListener(listener) {
    this.listeners.push(listener);
    const removeListener =()=> {
      this.listeners = this.listeners.filter((l) => listener != l)
    }
    
    return removeListener;
  }
  
  setState(state) {
    this.state = state;
    for (const listener of this.listeners) {
      listener(state);
    }
  }
  
  getState(state) {
    return this.state;
  }
  
}

export default Store;

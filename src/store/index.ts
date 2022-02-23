import { createStore } from "vuex";

export interface State {
  count: number;
}

export const store = createStore<State>({
  state: {
    count: 2,
  },
  mutations: {
    increment(state: State) {
      state.count++;
      console.log("state.count++");
    },
  },
  getters: {
    getNumber(state: State) {
      return state.count;
    },
  },
  actions: {
    increment() {
      store.commit("increment");
    },
  },
});

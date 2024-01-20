import { createStore } from "vuex";
import * as actions from "./actions";
import * as mutations from "./mutations";
import * as getters from "./getters";
import state from "./state";

const store = createStore({
  actions,
  mutations,
  getters,
  state,
});

export default store;
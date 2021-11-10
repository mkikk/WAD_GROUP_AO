import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // TODO fetch json into postsList, add likes variable to each post
    user: { email: "", name: "", password: "" },
    posts: [],
  },
  getters: {},
  mutations: {
    SET_POSTS: (state, posts) => {
      state.posts = posts;
    },
    RESET_LIKES: (state) => {
      state.posts.forEach((post) => {
        post.likes = 0;
      });
    },
    INCREASE_LIKES: (state, data) => {
      data.likes++;
    },
  },
  actions: {
    getPosts({ commit }) {
      axios
        .get("https://api.npoint.io/2299f90a9ca912d422f0")
        .then((response) => {
          commit("SET_POSTS", response.data);
        });
    },
    resetLikesAct: (act) => {
      setTimeout(() => {
        act.commit("RESET_LIKES");
      }, 500);
    },
    increaseLikesAct: (act, post) => {
      setTimeout(() => {
        act.commit("INCREASE_LIKES", post);
      }, 500);
    },
  },
  modules: {},
});

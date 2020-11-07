export const state = () => ({
  onlineCount: null,
});

export const mutations = {
  setOnlineCount(state, onlineCount) {
    state.onlineCount = onlineCount;
  },
};

export const actions = {
  // async nuxtServerInit({ commit }, { $axios }) {
  //   const res = await $axios.get("/");
  //   commit("setOnlineCount", res.data.onlineCount);
  // },
};

export const state = () => ({
  onlineCount: null,
  isGameOnline: true,
});

export const mutations = {
  SET_ONLINE_COUNT(state, onlineCount) {
    state.onlineCount = onlineCount;
  },
  SET_GAME_ONLINE(state, isOnline) {
    state.isGameOnline = isOnline;
  },
};

export const actions = {
  async nuxtServerInit({ commit }, { $axios }) {
    try {
      const res = await $axios.get("/");
      if (res.data.onlineCount) {
        commit("SET_ONLINE_COUNT", res.data.onlineCount);
      } else {
        commit("SET_GAME_ONLINE", false);
      }
    } catch (err) {
      commit("SET_GAME_ONLINE", false);
    }
  },
};

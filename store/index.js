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

    $axios.$get("https://api-staging.ao20.com.ar:11812/").then((data) => {
      if (!isNaN(data.onlineCount)) {
        return commit("SET_ONLINE_COUNT", data.onlineCount);
      } else {
        return commit("SET_GAME_ONLINE", false);
      }
    }).catch((err) => {
      console.error(err);
      return commit("SET_GAME_ONLINE", false);
    });
  },
};

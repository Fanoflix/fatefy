import { defineStore } from "pinia";

export const useThemeStore = defineStore({
  id: "theme",
  state: () => ({
    isDark: false,
  }),
  getters: {
    getIsDark: (state) => state.isDark, // returns state.isDark
  },
  actions: {
    changeTheme() {
      this.isDark = !this.isDark;
      this.setLocalStorage();
    },
    setLocalStorage() {
      localStorage.setItem("isDark", JSON.stringify(this.isDark));
    },
    setIsDark(isDark) {
      this.isDark = isDark;
    },
  },
});

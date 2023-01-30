import { defineStore } from "pinia";

export const usePackageStore = defineStore("PackageStore", {
  state: () => ({
    package: null,
  }),
  getters: {
    packageInfoShort: (state) => {
      let info = {};
      for (var prop in state.package) {
        let keys = ["name", "author", "description", "maintainers"];
        for (let i = 0; i <= keys.length; i++) {
          if (prop === keys[i]) {
            info[prop] = state.package[prop];
          }
        }
      }
      return info;
    },
    packageInfoFull: (state) => {
      let info = {};
      for (var prop in state.package) {
        let keys = ["homepage", "bugs", "keywords", "users", "_id", "_rev"];
        for (let i = 0; i <= keys.length; i++) {
          if (prop === keys[i]) {
            info[prop] = state.package[prop];
          }
        }
      }
      return info;
    },
  },
  actions: {
    setPackage(data) {
      this.package = data;
    },
  },
});

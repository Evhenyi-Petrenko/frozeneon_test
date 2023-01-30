// example api service
import http from "~/service/http";

const jsdelivr = {
  async getPackage(params) {
    try {
      return await http.get("/" + params);
    } catch (e) {
      return e;
    }
  },
};

export default jsdelivr;

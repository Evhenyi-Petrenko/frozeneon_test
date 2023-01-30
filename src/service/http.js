import axios from "axios";
//import NProgress from "nprogress";
import { base } from "~/service/config";
import * as pkg from "vue-toastification";

const { useToast } = pkg;

axios.defaults.baseURL = `${base}`;
//  axios.defaults.timeout = 30000;
axios.defaults.headers.post["Content-Type"] = "application/json;charset=UTF-8";

const toast = useToast();
axios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    const code = error.status;
    if (code === 500) {
      toast.error("Error bad request");
    } else if (code === 404) {
      toast.warning("Error: This page does not exist");
    } else if (code === 403) {
      toast.warning(
        "Forbidden – You do not have permission to access this resource"
      );
    } else {
      toast.error(error.message);
    }

    return error;
  }
);

axios.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    const code = error.status;
    if (code === 500) {
      toast.error("Error bad request");
    } else if (code === 404) {
      toast.warning("Error: This page does not exist");
    } else if (code === 403) {
      toast.warning(
        "Forbidden – You do not have permission to access this resource"
      );
    } else {
      toast.error(error.message);
    }

    return error;
  }
);

// interface Http {
//   get<T>(url: string, params?: unknown): Promise<ResType<T>>
//   post<T>(url: string, params?: unknown): Promise<ResType<T>>
//   upload<T>(url: string, params: unknown): Promise<ResType<T>>
//   download(url: string): void
// }

const http = {
  get(url, params) {
    return new Promise((resolve, reject) => {
      //NProgress.start();
      axios
        .get(url, { params })
        .then((res) => {
          //NProgress.done();
          resolve(res.data);
        })
        .catch((err) => {
          //NProgress.done();
          reject(err.data);
        });
    });
  },
  post(url, params) {
    return new Promise((resolve, reject) => {
      //NProgress.start();
      axios
        .post(url, params)
        .then((res) => {
          //NProgress.done();
          resolve(res.data);
        })
        .catch((err) => {
          //NProgress.done();
          reject(err.data);
        });
    });
  },
};
export default http;

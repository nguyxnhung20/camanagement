import axios from "axios";

// Khai báo cấu hình chung cho API
const axiosClient = axios.create({
  baseURL: "https://6682a7d04102471fa4c7b85a.mockapi.io/ap/v1/",
  headers: {
    "content-type": "application/json",
  },
});

let api = (method, endpoint, payload) => {
  return axiosClient(endpoint, { method: method, data: payload })
    .then((res) => res.data)
    .catch((error) => {
      console.error(
        `API ${method} ${endpoint} failed:`,
        error.response || error
      );
      throw error;
    });
};

export { api };

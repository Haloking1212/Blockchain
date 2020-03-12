import axios from "axios";

export const axiosWithAuth = () => {

  return axios.create({
    baseURL: "http://localhost:5000",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Accept": "application/json"
    }
  });
};

import Axios from "axios";

let base = window.location.host.includes("localhost")
  ? "//localhost:5000/"
  : "/";

export const api = Axios.create({
  baseURL: base + "api/",
  timeout: 3000,
  withCredentials: true,
});

export const setBearer = function (bearer) {
  console.log("setting the bearer token ....");
  api.defaults.headers.authorization = bearer;
};
export const resetBearer = function () {
  console.log("reset the bearer token");
  api.defaults.headers.authorization = "";
};

import Axios from "axios";

let base = window.location.host.includes("localhost")
  ? "//localhost:3007/"
  : "/";

export const api = Axios.create({
  baseURL: base + "api/",
  timeout: 3000,
  withCredentials: true,
});

export const setBearer = function (bearer) {
  api.defaults.headers.authorization = bearer;
  console.log("setbearer gettingProfile......");
  getProfile();
};
export const resetBearer = function () {
  api.defaults.headers.authorization = "";
};

async function getProfile() {
  try {
    let res = await api.get("profile");
    console.log(res.data);
    updateProfile(res.data.id, { firstName: "Justin", lastName: "Gates" });
  } catch (e) {
    console.log(e);
  }
}

async function updateProfile(id, data) {
  try {
    let res = await api.put(`/profile/${id}`, data);
    console.log(res.data);
  } catch (e) {
    console.log(e);
  }
}

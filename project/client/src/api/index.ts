import Mock from "api/mock";
import axios from 'axios';
// ====================================================
import "./dataTable";
import "./users";

Mock.onAny().passThrough();

function apiInstance(token?: string) {
  return axios.create({
    baseURL: `http://localhost:3001`,
    headers: {
      Authorization: token ? `Bearer ${token}` : ''
    }
  });
}

const setSession = (accessToken: string | null) => {
  if (accessToken) {
    localStorage.setItem("accessToken", accessToken);
    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  } else {
    localStorage.removeItem("accessToken");
    delete axios.defaults.headers.common.Authorization;
  }
};

export default apiInstance;
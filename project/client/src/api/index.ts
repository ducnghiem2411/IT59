import axios from 'axios';

export function apiInstance(token?: string) {
  return axios.create({
    baseURL: `http://localhost:3001`,
    headers: {
      Authorization: token ? `Bearer ${token}` : ''
    }
  });
}

export const setSession = (accessToken: string | null) => {
  if (accessToken) {
    localStorage.setItem("accessToken", accessToken);
    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  } else {
    localStorage.removeItem("accessToken");
    delete axios.defaults.headers.common.Authorization;
  }
};
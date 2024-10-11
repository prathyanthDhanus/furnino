import axios from "axios";
import dayjs from "dayjs";
import jwtDecode from "jwt-decode";


const Axios = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    Accept: "application/json",
    // "Content-Type": "multipart/form-data",
    
  },
});


Axios.interceptors.request.use((request) => {
  const path = window.location.href;
  const token = localStorage.getItem("token");
  // console.log("token",token)
  request.headers.Authorization = `Bearer ${token}`;
  const decodedToken = jwtDecode(token);
  // console.log("decodedtoken",decodedToken);
  const isExpired = dayjs.unix(decodedToken?.exp).diff(dayjs()) < 1;

  if (isExpired && request?.url !== `http://localhost:3000/api/auth/user/refresh-token`) {
    const accessToken = async () => {
      try {
        const response = await Axios.post(`http://localhost:3000/api/auth/user/refresh-token`);
        // console.log("refreshresponse",response)
        localStorage.setItem("token", response?.data?.data);
        window.location.href = path;
      } catch (error) {
        // console.log("refresherror",error);
        if (error?.response?.status === 422) {
          localStorage.removeItem("token");
          window.location.href = path;
        }
      }
    };
    accessToken();
  } else {
    return request;
  }
});

Axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    const path = window.location.href;
    if (error?.response?.status === 422) {
      localStorage.removeItem("token");
      window.location.href = path;
    }
    return Promise.reject(error);
  }
);

export default Axios;



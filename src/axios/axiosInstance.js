// import axios from "axios";
// import dayjs from "dayjs";
// import jwtDecode from "jwt-decode";


// const Axios = axios.create({
//   baseURL: "http://localhost:3000",
//   headers: {
//     Accept: "application/json",
//     // "Content-Type": "application/json",
    
//   },
// });


// Axios.interceptors.request.use((request) => {
//   const path = window.location.href;
//   const token = localStorage.getItem("token");
//   // console.log("token",token)
//   request.headers.Authorization = `Bearer ${token}`;
//   const decodedToken = jwtDecode(token);
//   // console.log("decodedtoken",decodedToken);
//   const isExpired = dayjs.unix(decodedToken?.exp).diff(dayjs()) < 1;

//   if (isExpired && request?.url !== `http://localhost:3000/api/auth/user/refresh-token`) {
//     const accessToken = async () => {
//       try {
//         const response = await Axios.post(`http://localhost:3000/api/auth/refresh-token/user`);
//         // console.log("refreshresponse",response)
//         localStorage.setItem("token", response?.data?.data);
//         window.location.href = path;
//       } catch (error) {
//         // console.log("refresherror",error);
//         if (error?.response?.status === 422) {
//           localStorage.removeItem("token");
//           window.location.href = path;
//         }
//       }
//     };
//     accessToken();
//   } else {
//     return request;
//   }
// });

// Axios.interceptors.response.use(
//   function (response) {
//     return response;
//   },
//   function (error) {
//     const path = window.location.href;
//     if (error?.response?.status === 422) {
//       localStorage.removeItem("token");
//       window.location.href = path;
//     }
//     return Promise.reject(error);
//   }
// );

// export default Axios;



import axios from "axios";
import dayjs from "dayjs";
import jwtDecode from "jwt-decode";

// Create an Axios instance
const Axios = axios.create({
  baseURL: "http://localhost:3000", // Replace with your base URL
  headers: {
    Accept: "multipart/form-data",
  },
});

// Add request interceptor for handling token refresh
Axios.interceptors.request.use(async (request) => {
  const token = localStorage.getItem("token");
  
  if (token) {
    request.headers.Authorization = `Bearer ${token}`;

    const decodedToken = jwtDecode(token);
    const isExpired = dayjs.unix(decodedToken.exp).diff(dayjs()) < 1;

    // Check if the token is expired
    if (isExpired) {
      try {
        // Refresh the token
        const refreshResponse = await Axios.post(`/api/auth/refresh-token/user`);
        const newToken = refreshResponse?.data?.data;

        // Store the new token in localStorage
        localStorage.setItem("token", newToken);

        // Update the request header with the new token
        request.headers.Authorization = `Bearer ${newToken}`;
      } catch (error) {
        // If refresh fails, remove token and redirect to login or other page
        console.error("Token refresh failed", error);
        localStorage.removeItem("token");
        window.location.href = "/login"; // Redirect to login or handle failure
        throw error; // Stop the request if token refresh fails
      }
    }
  }

  return request;
});

// Add response interceptor to handle errors globally
Axios.interceptors.response.use(
  (response) => {
    // Simply return the response if everything is fine
    return response;
  },
  (error) => {
    if (error?.response?.status === 422) {
      // If token is invalid or expired, remove it and redirect
      localStorage.removeItem("token");
      window.location.href = "/login"; // Handle this case by redirecting to login
    }
    return Promise.reject(error); // Forward the error for further handling
  }
);

export default Axios;

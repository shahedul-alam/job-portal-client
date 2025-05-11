import { useNavigate } from "react-router";
import useAuth from "./useAuth";
import { useEffect } from "react";
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    "http://localhost:5000",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { signoutUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const interceptor = axiosInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (error.response.status === 401 || error.response.status === 403) {
          signoutUser()
            .then(() => navigate("/login"))
            .catch((error) => console.log(error));
        }

        return Promise.reject(error);
      }
    );

    return () => {
      axiosInstance.interceptors.response.eject(interceptor);
    };
  }, []);

  return axiosInstance;
};

export default useAxiosSecure;

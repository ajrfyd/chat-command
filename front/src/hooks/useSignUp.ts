import toast from "react-hot-toast";
import useUserStore from "../store/userStore";
import { baseInstance } from "../api/instances";
import { ResultResponseType } from "../types/response";
import { type User } from "../store/types";

const useSignUp = () => {
  const { loading, setLoading, setUser, setError, error } = useUserStore();
  const signUpHandler = async (
    nickName: string,
    password: string,
    confirmPassword: string
  ) => {
    try {
      const { data } = await baseInstance.post<ResultResponseType<User>>(
        "/api/auth/signup",
        {
          nickName,
          password,
          confirmPassword,
        }
      );
      const { result, status, message } = data;
      if (status !== 201) return toast.error(message);
      localStorage.clear();
      localStorage.setItem("user", JSON.stringify(result));
      setUser(result);
    } catch (e) {
      const { message } = e as Error;
      setError(true);
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, signUpHandler, error };
};

export default useSignUp;

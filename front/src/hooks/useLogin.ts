import useUserStore from "../store/userStore";
import { baseInstance } from "../api/instances";
import { type ResultResponseType } from "../types/response";
import { type User } from "../store/types";

const useLogin = () => {
  const { setLoading, setUser, loading, setError, error } = useUserStore();
  const loginHandler = async (nickName: string, password: string) => {
    try {
      setLoading(true);
      setError(false);
      const { data } = await baseInstance.post<ResultResponseType<User>>(
        "/api/auth/login",
        {
          nickName,
          password,
        }
      );

      const { result } = data;
      setUser(result);
      localStorage.setItem("user", JSON.stringify(result));
    } catch (e) {
      console.log(e);
      setLoading(false);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return { loading, loginHandler, error };
};

export default useLogin;

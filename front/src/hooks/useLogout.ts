import useUserStore from "../store/userStore";
import { baseInstance } from "../api/instances";
import { type ResultResponseType } from "../types/response";
import { type User } from "../store/types";

const useLogout = () => {
  const { setLoading, setUser, loading, setError, error } = useUserStore();
  const logoutHandler = async () => {
    try {
      setLoading(true);
      setError(false);
      const { data } = await baseInstance.post<ResultResponseType<User>>(
        "/api/auth/logout"
      );

      const { result } = data;
      setUser(result);
      localStorage.clear();
    } catch (e) {
      console.log(e);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return { loading, logoutHandler, error };
};

export default useLogout;

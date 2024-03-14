import styled from "styled-components";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./page/home/Home";
import Login from "./page/login/Login";
import Signup from "./page/signup/Signup";
import { Toaster } from "react-hot-toast";
import useUserStore from "./store/userStore";
import useSocket from "./hooks/useSocket";

const App = () => {
  const { user } = useUserStore();
  useSocket();

  return (
    <Container>
      <Routes>
        <Route
          path="/"
          element={user && user.id ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={user && user.id ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/signup"
          element={user && user.id ? <Navigate to="/" /> : <Signup />}
        />
      </Routes>
      <Toaster />
    </Container>
  );
};

export default App;

const Container = styled.div`
  padding: 1rem;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

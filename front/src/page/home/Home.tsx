import styled from "styled-components";
import MessageContainer from "../../components/message/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
  return (
    <Container>
      <Sidebar />
      <MessageContainer />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  overflow: hidden;
  background-clip: padding-box;
  border-radius: 0.5rem;
  -webkit-backdrop-filter: blur(50px);
  backdrop-filter: blur(50px);
  height: 550px;

  @media (max-width: 640px) {
    height: 450px;
  }
`;

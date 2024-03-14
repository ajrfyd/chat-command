import styled from "styled-components";

type BorderProps = {
  children: React.ReactNode;
};

const Border = ({ children }: BorderProps) => {
  return (
    <Container>
      <Backdrop>{children}</Backdrop>
    </Container>
  );
};

export default Border;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 24rem;
  /* margin: 0 auto; */
  margin-left: auto;
  margin-right: auto;
`;

//"w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0
const Backdrop = styled.div`
  width: 100%;
  padding: 1.5rem;
  border-radius: 0.5rem;
  background-clip: padding-box;
  /* --webkit-backdrop-filter: grayscale(0.8); */
  /* backdrop-filter: grayscale(0.8); */
  /* -webkit-backdrop-filter: brightness(1.5); */
  /* backdrop-filter: brightness(1.5); */
  -webkit-backdrop-filter: blur(50px);
  backdrop-filter: blur(50px);
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);

  /* display: flex; */
  /* flex-direction: column; */
  /* align-items: center; */
  /* justify-content: center; */
`;

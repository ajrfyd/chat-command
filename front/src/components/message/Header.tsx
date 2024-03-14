import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <span className="to">To:</span> <span className="nick">NickName</span>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;
  background-color: #0000007e;

  span.to {
    font-size: 0.875rem /* 14px */;
    line-height: 1.25rem /* 20px */;
    color: var(--white);
  }

  span.nick {
    color: var(--white);
    font-weight: bold;
  }
`;

import styled from "styled-components";
import Divider from "./Divider";
import Rooms from "./Rooms";
import SearchInput from "./SearchInput";
import LogoutBtn from "./LogoutBtn";
import ButtonSection from "./ButtonSection";

const Sidebar = () => {
  return (
    <SideContainer>
      <SearchInput />
      <Divider style={{ padding: "0 0.75rem", margin: "1rem 0" }} />
      <Rooms />
      {/* <LogoutBtn /> */}
      <ButtonSection />
    </SideContainer>
  );
};

export default Sidebar;

const SideContainer = styled.div`
  border-right-width: 1px;
  border-color: #eee;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

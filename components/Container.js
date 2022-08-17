import Footer from "./Footer";
import Header from "./Header";
import styled from "styled-components";

const Container = ({ children }) => {
  return (
    <MainContainer>
      <Header />
      {children}
      <Footer />
    </MainContainer>
  );
};

const MainContainer = styled.div`
  max-width: 1366px;
  width: 100%;
  margin: 0 auto;
  padding: 0 10px;
`;

export default Container;

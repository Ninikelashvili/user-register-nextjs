import styled from "styled-components";
const Footer = () => {
  return (
    <FooterContainer>
      <div>
        <p>
          The author<span>Ninikelashvili Nini</span>
        </p>
        <p>2022</p>
      </div>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  div {
    max-width: 1366px;
    width: 100%;
    margin: 0 auto;
    padding: 10px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      color: #000;
      font-weight: 100;
      font-size: 15px;
      span {
        font-weight: 200;
        margin-left: 10px;
      }
    }
  }
`;
export default Footer;

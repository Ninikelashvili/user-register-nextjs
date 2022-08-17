import Link from "next/link";
import styled from "styled-components";
import { AiOutlinePlus } from "react-icons/ai";

const Header = () => {
  return (
    <Navigation>
      <Link href="/">
        <h2>Users</h2>
      </Link>
      <Link href="/Add">
        <button>
          <AiOutlinePlus />
          New
        </button>
      </Link>
    </Navigation>
  );
};
const Navigation = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  h2 {
    cursor: pointer;
    font-weight: 100;
    font-size: 20px;
  }
  img {
    cursor: pointer;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 5px;
    font-family: system-ui;
    font-weight: 100;
    color: #000;
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;
    font-size: 15px;
    text-transform: uppercase;
    transition: all 0.5s ease;
    :hover {
      transform: scale(1.1);
    }
    svg {
      color: #85aafd;
      font-size: 20px;
      margin-right: 10px;
    }
  }
`;
export default Header;

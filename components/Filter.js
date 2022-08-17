import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { AiOutlineSortAscending } from "react-icons/ai";

const Filter = () => {
  return (
    <FilterDiv>
      <form>
        <input type="text" placeholder="Search" />
        <BsSearch />
      </form>
      <AiOutlineSortAscending />
    </FilterDiv>
  );
};

const FilterDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  display: flex;
  align-items: center;
  background: transparent;
  border: solid 0.2px #fff;
  svg {
    margin: 0 20px 0 10px;
    cursor: pointer;
  }
  form {
    display: flex;
    align-items: center;
    width: 100%;
    background: transparent;
    input {
      width: 100%;
      padding: 10px;
      border: none;
      outline: none;
      background: transparent;
      ::placeholder {
        font-size: 13px;
        font-weight: 100;
      }
    }
  }
`;

export default Filter;

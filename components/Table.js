import styled from "styled-components";
import { AiTwotoneEdit, AiFillDelete } from "react-icons/ai";
import Link from "next/link";
import { getUsers } from "../getdata/datafetch";
import { useQuery } from "react-query";

const Table = () => {
  const { isLoading, isError, data, error } = useQuery("users", getUsers);
  if (isLoading) return <div>Spiner</div>;
  if (isError) return <div>There is error {error}</div>;
  return (
    <TableContent>
      <TableNavigation>
        <tr>
          <th>
            <span>Name</span>
          </th>
          <th>
            <span>Surname</span>
          </th>
          <th>
            <span>Date of Birth</span>
          </th>
          <th>
            <span>Age</span>
          </th>
          <th>
            <span>Status</span>
          </th>
          <th>
            <span>Role</span>
          </th>
          <th>
            <span>Actions</span>
          </th>
        </tr>
      </TableNavigation>
      <TableList>
        <tr>
          {data?.map((user, i) => (
            <td key={i}>
              <span>{user.firstname}</span>
              <span>{user.lastname}</span>
              <span>{user.date}</span>
              <span>{user.age}</span>
              <span>{user.status}</span>
              <span>{user.role}</span>
              <span>
                <Link href="/Edit">
                  <button>
                    <AiTwotoneEdit />
                  </button>
                </Link>
                <button>
                  <AiFillDelete />
                </button>
              </span>
            </td>
          ))}
        </tr>
      </TableList>
    </TableContent>
  );
};
const TableContent = styled.table`
  width: 100%;
  margin: 0 auto;
`;
const TableNavigation = styled.thead`
  width: 100%;
  tr {
    padding: 50px 50px 10px 50px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    th {
      span {
        color: #000;
        font-weight: 400;
        font-size: 13px;
      }
    }
  }
`;

const TableList = styled.tbody`
  tr {
    width: 100%;
    display: flex;
    flex-direction: column;
    td {
      border-bottom: solid 0.2px #fff;
      border-top: solid 0.2px #fff;
      padding: 20px 50px;
      display: flex;
      justify-content: space-between;
      span {
        font-size: 13px;
        font-weight: 100;
      }
      button {
        border: none;
        outline: none;
        background: transparent;
        margin: 0 5px;
        transition: all 0.5s ease;
        :hover {
          transform: scale(1.1);
          cursor: pointer;
          :first-child {
            color: green;
          }
          :last-child {
            color: red;
          }
        }
      }
    }
  }
`;

export default Table;

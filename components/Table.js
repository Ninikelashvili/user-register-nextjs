import styled from "styled-components";
import { AiTwotoneEdit, AiFillDelete } from "react-icons/ai";
import Link from "next/link";

export default function Table() {
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
          <td>
            <span>Name</span>
          </td>
          <td>
            <span>Surname</span>
          </td>
          <td>
            <span>Date of Birth</span>
          </td>
          <td>
            <span>Age</span>
          </td>
          <td>
            <span>Status</span>
          </td>
          <td>
            <span>Role</span>
          </td>
          <td>
            <button>
              <Link href="/Edit">
                <AiTwotoneEdit />
              </Link>
            </button>
            <button>
              <AiFillDelete />
            </button>
          </td>
        </tr>
      </TableList>
    </TableContent>
  );
}
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
    border-bottom: solid 0.2px #fff;
    border-top: solid 0.2px #fff;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 20px 50px;
    td {
      display: flex;
      justify-content: flex-start;
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

import styled from "styled-components";
import Head from "next/head";
import { useReducer } from "react";

const formReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

const Add = () => {
  const [formData, setFormData] = useReducer(formReducer, {});
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <NewUser>
      <Head>
        <title>User Register | Add new</title>
      </Head>
      <h2>New User</h2>
      <form onSubmit={submitHandler}>
        <input type="text" name="firstname" onChange={setFormData} />
        <input type="text" name="lastname" onChange={setFormData} />
        <input type="date" name="dateofbirth" onChange={setFormData} />
        <input type="number" name="number" onChange={setFormData} />
        <span>
          <label htmlFor="status"></label>
          <select name="status" id="status" onChange={setFormData}>
            <option value="">Choise status</option>
            <option value="active">Active</option>
            <option value="draft">Draft</option>
          </select>
        </span>
        <span>
          <label htmlFor="role"></label>
          <select name="role" id="role" onChange={setFormData}>
            <option value="">Choise role</option>
            <option value="moderator">Moderator</option>
            <option value="admin">Admin</option>
          </select>
        </span>
        <div>
          <button>Add</button>
          <button>Cancel</button>
        </div>
      </form>
    </NewUser>
  );
};

const NewUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    font-weight: 100;
    text-align: center;
    margin: 20px 0;
  }
  form {
    display: flex;
    flex-direction: column;
    max-width: 700px;
    width: 100%;
    div {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin-top: 10px;
      button {
        margin-left: 20px;
        min-width: 100px;
        padding: 10px 5px;
        border: none;
        outline: none;
        cursor: pointer;
        border-radius: 3px;
        font-weight: 100;
        color: #000;
        :first-child {
          background-color: #3939fd;
          color: #fff;
        }
      }
    }
    span {
      display: flex;
      flex-direction: row;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding: 15px 20px;
      margin: 10px 0;
      border: solid 0.5px #fff;
      background: transparent;
      font-weight: 100;
      select {
        height: 100%;
        width: 100%;
        border: none;
        outline: none;
        background: transparent;
        font-weight: 100;
      }
    }
    input {
      width: 100%;
      padding: 15px 20px;
      margin: 10px 0;
      border: none;
      outline: none;
      border: solid 0.5px #fff;
      background: transparent;
      font-weight: 100;
      :focus {
        font-weight: 100;
      }
    }
  }
`;
export default Add;

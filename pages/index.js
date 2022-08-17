import Head from "next/head";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { AiOutlineSortAscending } from "react-icons/ai";
import Table from "../components/Table";
import Filter from "../components/Filter";

export default function Home() {
  return (
    <div>
      <Head>
        <title>User Register</title>
        <link ref="icon" href="/favicon.ico" />
      </Head>
      <ListContainer>
        <Filter />
        <Table />
      </ListContainer>
    </div>
  );
}

const ListContainer = styled.div`
  width: 100%;
`;

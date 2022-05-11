//Dependencies
import styled from "styled-components";
import { useState } from "react";
//Components
import Header from "../components/Header";
import Product from "../components/Product";

export default function MainPage() {
  const [isHome, setIsHome] = useState(true);
  return (
    <Wrapper>
      <Header isHome={isHome}></Header>
      <Main>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </Main>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Main = styled.main`
  margin-top: 20px;
  width: 95%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

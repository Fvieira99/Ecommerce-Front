//Dependencies
import styled from "styled-components";
import { useState } from "react";
//Components
import Header from "../components/Header";
import Product from "../components/Product";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function MainPage() {
  // Buscar no backend a quantidade de itens e dividir pelo limite de itens para
  // descobrir a quantidade de paginas e receber no front
  const [isHome, setIsHome] = useState(true);
  const [page, setPage] = useState(1);
  const [pageLimit, setPageLimit] = useState(2);
  return (
    <Wrapper>
      <Header isHome={isHome}></Header>
      <Main>
        {/* {gerar produtos dinamicamente com map após buscar no DB} */}
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
      <Footer>
        <nav>
          <IoIosArrowBack
            className="arrow"
            pointerEvents={page === 1 ? "none" : "auto"}
            onClick={() => {
              if (page !== 1) {
                setPage(page - 1);
              }
            }}
          />
          {/* Criar função handleProducts que atualiza a pagina ao clicar na*/}
          <span>{page}</span>
          <IoIosArrowForward
            className="arrow"
            pointerEvents={page === pageLimit ? "none" : "auto"}
            onClick={() => {
              if (page !== pageLimit) {
                setPage(page + 1);
              }
            }}
          />
        </nav>
      </Footer>
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

const Footer = styled.footer`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  nav {
    display: flex;
    gap: 20px;
    align-items: center;

    span {
      font-size: 20px;
      font-weight: 700;
    }

    .arrow {
      background-color: #c1c1c1;
      padding: 5px;
      border-radius: 50%;
      font-size: 20px;
      color: #ffffff;
      box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    }
  }
`;

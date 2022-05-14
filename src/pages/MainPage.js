//Dependencies
import styled from "styled-components";
import { useState, useEffect } from "react";
//Components
import Header from "../components/Header";
import Product from "../components/Product";
import Dashboard from "../components/Dashboard";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
//Service
import { getProducts } from "../service/API";

export default function MainPage() {
  // Buscar no backend a quantidade de itens e dividir pelo limite de itens para
  // descobrir a quantidade limite de paginas e receber no front usando o setPageLimit
  const [isHome, setIsHome] = useState(true);
  const [page, setPage] = useState(1);
  const [pageLimit, setPageLimit] = useState(2);
  const [products, setProducts] = useState(null);

  const [showDashboard, setShowDashboard] = useState(false);

  useEffect(() => {
    getProducts(page)
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      {showDashboard ? (
        <Dashboard
          setShowDashboard={setShowDashboard}
          showDashboard={showDashboard}
        />
      ) : (
        <></>
      )}
      <Wrapper showDashboard={showDashboard}>
        <Header isHome={isHome} setShowDashboard={setShowDashboard} />
        <Main>
          {products &&
            products.map((item, key) => (
              <Product
                id={item._id}
                figure={item.figure}
                price={item.price}
                title={item.title}
                slug={item.slug}
                key={key}
              />
            ))}
        </Main>
        <Footer>
          <nav>
            <IoIosArrowBack
              className="arrow"
              pointerEvents={page === 1 ? "none" : "auto"}
              onClick={() => {
                if (page !== 1) {
                  setPage(page - 1);
                  getProducts(page)
                    .then(response => {
                      setProducts(response.data);
                    })
                    .catch(error => console.log(error));
                }
              }}
            />
            <span>{page}</span>
            <IoIosArrowForward
              className="arrow"
              pointerEvents={page === pageLimit ? "none" : "auto"}
              onClick={() => {
                if (page !== pageLimit) {
                  setPage(page + 1);
                  getProducts(page)
                    .then(response => {
                      setProducts(response.data);
                    })
                    .catch(error => console.log(error));
                }
              }}
            />
          </nav>
        </Footer>
      </Wrapper>
    </>

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

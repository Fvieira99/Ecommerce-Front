//Dependencies
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
//Components
import Header from "../components/Header";
import Button from "../components/Button";
//Service
import { getSingleProduct } from "../service/API";

// const product = {
//   figure:
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkFdgP49FKy_SwafbE_vRbriF6R7u69njBLN12RlB7PA&s",
//   title: "Nike Dunk Low",
//   price: 700
// };

export default function ProductPage() {
  const [isHome, setIsHome] = useState(false);
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  const { productName } = useParams();

  useEffect(() => {
    getSingleProduct(productName)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => console.log(error));
  }, []);

  function showSingleProduct() {
    return (
      <>
        <img src={product.figure} alt={product.title} />
        <span>{product.title}</span>
        <span>
          {product.price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL"
          })}
        </span>
      </>
    );
  }

  return (
    <Wrapper>
      <Header isHome={isHome}></Header>
      <SingleProduct>
        {product ? showSingleProduct() : "Esse produto não existe"}
      </SingleProduct>
      <button>Adicionar ao carrinho</button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    pointer-events: ${props => (props.isLoading ? "none" : "auto")};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;
    height: 46px;
    background-color: #c1c1c1;
    border-radius: 5px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    text-align: center;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    color: #ffffff;
    border: none;
    cursor: pointer;
  
`;

const SingleProduct = styled.div`
  width: 70%;
  height: 350px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin: 30px 0;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 5px;

  img {
    width: 250px;
  }

  span {
    font-weight: 700;
  }
`;
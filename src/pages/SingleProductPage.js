//Dependencies
import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router";
import { AppEcommerceContext } from "../context/CartContext";

//Components
import Header from "../components/Header";
//Service
import { getSingleProduct } from "../service/API";

export default function ProductPage() {
  const [isHome, setIsHome] = useState(false);
  const [product, setProduct] = useState(null);

  const { productName } = useParams();

  const { state, dispatch } = useContext(AppEcommerceContext);

  const addProduct = product => {
    dispatch({ type: "addProduct", payload: { product } });
    dispatch({
      type: "addPrice",
      payload: { price: product.price + state.price }
    });
  };

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

  console.log(product);

  return (
    <Wrapper>
      <Header isHome={isHome}></Header>
      <SingleProduct>
        {product ? showSingleProduct() : "Esse produto não existe"}
      </SingleProduct>
      <button onClick={() => addProduct(product)}>Adicionar ao carrinho</button>
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

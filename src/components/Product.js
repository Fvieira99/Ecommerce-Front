import { useContext } from 'react'; 

//Dependencies
import styled from "styled-components";
import { useNavigate } from "react-router";
import { AppEcommerceContext } from '../context/CartContext'

function Product(props) {

  const navigate = useNavigate();

  const { state, dispatch } = useContext(AppEcommerceContext)

  const addProduct = (product) => {
    console.log(product.price)
    dispatch({ type: 'addProduct', payload: { product } })
    dispatch({ type: 'addPrice', payload: { price: product.price + state.price } })
  }


  return (
    <ProductContainer >
      <img src={props.figure} alt="product" onClick={() => navigate(`/product/${props.slug}`)} style={{ cursor: 'pointer' }} />
      <span>{props.title}</span>
      <span>{props.price.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</span>
      <button onClick={() => addProduct({id: props.id, figure: props.figure, price: props.price, title: props.title})}>Adicionar</button>
    </ProductContainer>
  );
}

const ProductContainer = styled.div`
  width: 48%;
  height: 260px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 20px;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 5px;

  img {
    width: 150px;
  }

  span {
    font-weight: 700;
  }

  button {
    border: none;
    border-radius: 5px;
    width: 90px;
    height: 30px;
    text-align: center;
    background-color: #c1c1c1;
    font-family: "Raleway", sans-serif;
    font-size: 15px;
    font-weight: 700;
    color: #ffffff;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    &:active {
      background-color: #ffffff;
      color: black;
      box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    }
  }
`;

export default Product;

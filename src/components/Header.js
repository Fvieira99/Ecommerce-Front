//Dependencies
import { useContext, useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GoThreeBars } from "react-icons/go";
import { BsArrowBarLeft } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { AppEcommerceContext } from "../context/CartContext";
import { useNavigate } from "react-router";

export default function Header(props) {
  const { isHome, setShowDashboard } = props;

  const cart = useRef(null);

  const { state, dispatch } = useContext(AppEcommerceContext);

  const openCard = (e) => {
     e.currentTarget.contains(cart.current) ? setCartModal(true) : setCartModal(false)
  }
  const [cartModal, setCartModal] = useState(false);

  const openCard = e => {
    e.currentTarget.contains(cart.current)
      ? setCartModal(true)
      : setCartModal(false);
  };

  const deleteProduct = id => {
    const deleted = state.cart.filter(item => item.id !== id);
    let price = 0;
    deleted.forEach(  item => {
      price += item.price
    } )
    dispatch({ type: "deleted", payload: { products: deleted } });
    dispatch({ type: 'addPrice', payload: { price: price }})
  };

  useEffect(() => {}, [state]);

  const navigate = useNavigate();

  return (
    <StyledHeader>
      <HeaderWrapper>
        {isHome ? (
          <GoThreeBars
            className="icon"
            onClick={() => setShowDashboard(true)}
          />
        ) : (
          <BsArrowBarLeft className="icon" onClick={() => navigate(-1)} />
        )}
        <h1>Shoes&Shoes</h1>
        <OpenMenu onMouseOver={(e) => openCard(e)}>
        <div className="cart-container" >
          <AiOutlineShoppingCart id="cart" />
          <span>{state.cart.length}</span>
        </div>
        <ModalProducts style={{ display: cartModal ? 'block' : 'none' }} className="card-modal" ref={cart} onMouseOut={() => setCartModal(false)}>
         <ProductsArea>
          {state.cart && state.cart.map( (item, key) => (
            <CardProduct key={key}>
              <img src={item.figure} alt="product" />
              <CardProductDetails>
                <span>{item.title}</span>
                <span>{item.price.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</span>
              </CardProductDetails>
              <AiOutlineClose size={40} style={{ cursor: 'pointer'  }} onClick={() => deleteProduct(item.id)} />
            </CardProduct>
          ) )}
          </ProductsArea>
          <CardInfo>
            <span>Total: {state.price.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</span>
          </CardInfo>
        </ModalProducts>
        <h1 onClick={() => navigate("/")}>Shoes&Shoes</h1>
        <OpenMenu onMouseOver={e => openCard(e)}>
          <div className="cart-container">
            <AiOutlineShoppingCart id="cart" />
            <span>{state.cart.length}</span>
          </div>
          <ModalProducts
            style={{ display: cartModal ? "block" : "none" }}
            className="card-modal"
            ref={cart}
            onMouseOut={() => setCartModal(false)}
          >
            {state.cart &&
              state.cart.map((item, key) => (
                <CardProduct key={key}>
                  <img src={item.figure} alt="product" />
                  <CardProductDetails>
                    <span>{item.title}</span>
                    <span>
                      {item.price.toLocaleString("pt-br", {
                        style: "currency",
                        currency: "BRL"
                      })}
                    </span>
                  </CardProductDetails>
                  <AiOutlineClose
                    size={40}
                    style={{ cursor: "pointer" }}
                    onClick={() => deleteProduct(item.id)}
                  />
                </CardProduct>
              ))}
          </ModalProducts>
        </OpenMenu>
      </HeaderWrapper>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  width: 100%;
  height: 80px;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  display: flex;
  justify-content: center;
  font-family: "Koulen", cursive;

  .icon {
    font-size: 25px;
  }
`;

const HeaderWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-weight: 700;
    font-size: 25px;
  }

  .cart-container {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    #cart {
      font-size: 25px;
    }

    span {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background-color: red;
      position: absolute;
      top: 22%;
      left: 55%;
      color: #ffffff;
      font-size: 10px;
    }
  }
`;

const ModalProducts = styled.div`
  display: none;
  width: 300px;
  height: 400px;
  padding: 30px 10px;
  position: absolute;
  background: #fff;
  right: 30px;
  top: 60px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  // &::-webkit-scrollbar {
  //   background-color: transparent;
  //   width: 6px;
  //   height: 7px;
  // }
  // &::-webkit-scrollbar-button {
  //   display: none;
  // }
  // &::-webkit-scrollbar-thumb {
  //   background-color: rgb(186, 186, 192);
  //   border-radius: 6px;
  //   border: 5px solid transparent;
  // }
  // &::-webkit-scrollbar-track {
  //   border-radius: 6px;
  //   background-color: rgba(0, 0, 0, 0.03);
  // }
`;

const CardProduct = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  & > img {
    width: 80px;
    height: 80px;
  }
  align-items: center;
  margin-bottom: 30px;
`;

const CardProductDetails = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 25px;
`;
const OpenMenu = styled.div`
  // &:hover > .card-modal {
  //   display: block;
  // }
`

const ProductsArea = styled.div`
  width: 100%;
  height: 95%;
  overflow-y: auto;

  &::-webkit-scrollbar {
    background-color: transparent;
    width: 6px;
    height: 7px;
  }
  &::-webkit-scrollbar-button {
    display: none;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgb(186, 186, 192);
    border-radius: 6px;
    border: 5px solid transparent;
  }
  &::-webkit-scrollbar-track {
    border-radius: 6px;
    background-color: rgba(0, 0, 0, 0.03);
  }
` 

const CardInfo = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
`
`;

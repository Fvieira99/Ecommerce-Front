import styled from "styled-components";
import { useContext, useState, useEffect } from "react";

import Header from "../components/Header";
import Button from "../components/Button";
import { AppEcommerceContext } from "../context/CartContext";
import { AiOutlineClose } from "react-icons/ai";
import { order } from "../service/API";
import { useNavigate } from "react-router-dom";

//FIX ME

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [email, setEmail] = useState("");
  const { state, dispatch } = useContext(AppEcommerceContext);
  const navigate = useNavigate();

  const deleteProduct = key => {
    const deleted = state.cart.filter((item, index) => index !== key);
    let price = 0;
    deleted.forEach(item => {
      price += item.price;
    });
    dispatch({ type: "deleted", payload: { products: deleted } });
    dispatch({ type: "addPrice", payload: { price: price } });
  };

  function showProducts() {
    return state.cart.map((product, key) => {
      return (
        <ProductContainer key={key}>
          <img
            src={product.figure}
            alt="product"
            style={{ width: 100, height: 100 }}
          />
          <ProductDetails>
            <span>{product.title}</span>
            <span>
              {product.price.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL"
              })}
            </span>
          </ProductDetails>
          <AiOutlineClose onClick={() => deleteProduct(key)} />
        </ProductContainer>
      );
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      if (
        JSON.parse(localStorage.getItem("cart")).cart.length <= 0 ||
        state.cart <= 0
      ) {
        alert("Você prescisa escolher algum produto!");
        return;
      }

      await order({
        product: state.cart || JSON.parse(localStorage.getItem("cart")).cart,
        payment: paymentMethod,
        total_payment: state.price || localStorage.getItem("cart").price
      });
      alert("Pedido Finalizado");
      dispatch({ type: "reset" });
      navigate("/");
    } catch (error) {
      alert(error.response.data);
    }
  }

  useEffect(() => {
    !localStorage.getItem("token") && navigate("/signin");
  });

  return (
    <Wrapper>
      <Header></Header>
      <CheckoutContainer>
        <h3>Checkout</h3>
        <UserInfo id="form" onSubmit={handleSubmit} method="post">
          <span>Olá, {localStorage.getItem("name")}</span>
          <label for="email">Confirme seu email:</label>
          <input
            name="email"
            onChange={e => setEmail(e.target.value)}
            value={email}
            type="email"
            required
            placeholder="Confirme seu email"
          ></input>
          <PaymentMethodContainer>
            <label for="payment">Escolha a forma de pagamento:</label>
            <select
              required
              name="payment"
              onChange={e => setPaymentMethod(e.target.value)}
            >
              <option value=""></option>
              <option value="cartao-de-credito">Cartão de Crédito</option>
              <option value="boleto">Boleto</option>
              <option value="pix">Pix</option>
            </select>
          </PaymentMethodContainer>
        </UserInfo>
        <ProductCart>
          {state.cart.length !== 0 ? showProducts() : <></>}
        </ProductCart>
        <Total>
          <b>TOTAL</b>
          <span>
            {state.price.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL"
            })}
          </span>
        </Total>
        <Button form="form">Finalizar Compra</Button>
      </CheckoutContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;

  h3 {
    margin-top: 30px;
    font-family: "Koulen", cursive;
    font-weight: 700;
    font-size: 20px;
  }
`;

const CheckoutContainer = styled.div`
  margin-top: 30px;
  width: 90%;
  padding: 30px;
  min-height: 80vh;
  border-radius: 5px;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 40px;
`;

const UserInfo = styled.form`
  width: 90%;
  display:flex;
  flex-direction: column;

  span{
    margin: 20px 0;
    font-family: 'Raleway', sans-serif;
    font-size: 15px;
    font-weight:700;
  }

  label{

    margin-bottom: 5px;

  }


  input{ 
    width: 80%;
    height 40px;
    border: 1px solid transparent;
    border-radius: 5px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    outline:none;
    text-indent: 10px;
    font-family: 'Raleway', sans-serif;
    font-size: 15px;
    font-weight:700;
    ::placholder{
      color: black;
    }

  }
`;

const PaymentMethodContainer = styled.div`
  width: 100%;
  display:flex;
  flex-direction: column;
  margin-bottom: 30px;
  
  
  label{
    font-family: 'Raleway', sans-serif;
    font-size: 15px;
    margin-top: 30px;
    margin-bottom: 5px;
  
  }

  select{
    width: 80%;
    height 40px;
    border: 1px solid transparent;
    border-radius: 5px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    outline:none;
    text-indent: 10px;
    font-family: 'Raleway', sans-serif;
    font-size: 15px;
    font-weight:700;

    option{
      font-family: 'Raleway', sans-serif;
      font-size: 15px;
      font-weight:700;
  
    }
  }

`;

const ProductContainer = styled.div`
  width: 90%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const ProductDetails = styled.div`
  font-size: 15px;
  font-weight: 700;
  display: flex;
  flex-direction: column;
`;

const Total = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;

  b,
  span {
    font-weight: 700;
  }
`;

const ProductCart = styled.div`
  width: 100%;
  max-width: 300px;
`;

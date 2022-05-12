//Dependencies
import styled from "styled-components";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GoThreeBars } from "react-icons/go";
import { BsArrowBarLeft } from "react-icons/bs";

export default function Header(props) {
  const { isHome } = props;
  return (
    <StyledHeader>
      <HeaderWrapper>
        {isHome ? (
          <GoThreeBars className="icon" />
        ) : (
          <BsArrowBarLeft className="icon" />
        )}
        <h1>Shoes&Shoes</h1>
        <div className="cart-container">
          <AiOutlineShoppingCart id="cart" />
          <span>1</span>
        </div>
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

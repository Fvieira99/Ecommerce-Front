//Dependencies
import styled from "styled-components";

function Product(props) {
  return (
    <ProductContainer>
      <span>Olá</span>
      <span>imagem</span>
      <span>preço</span>
    </ProductContainer>
  );
}

const ProductContainer = styled.div`
  width: 48%;
  height: 200px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 20px;
`;

export default Product;

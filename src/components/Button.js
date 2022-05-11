//Dependencies
import styled from "styled-components";

const Button = styled.button`
  pointer-events: ${props => (props.isLoading ? "none" : "auto")};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 46px;
  background-color: #0f0f0f;
  border-radius: 5px;
  text-align: center;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  color: #ffffff;
  border: none;
  cursor: pointer;
`;

export default Button;

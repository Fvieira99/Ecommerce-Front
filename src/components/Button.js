//Dependencies
import styled from "styled-components";

const Button = styled.button`
  pointer-events: ${props => (props.isLoading ? "none" : "auto")};
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 92%;
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

export default Button;

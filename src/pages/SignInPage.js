//Dependencies
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ThreeDots } from "react-loader-spinner";
//Components
import Form from "../components/Form";
import Input from "../components/Input";
import Button from "../components/Button";
//Services
import { signIn } from "../service/API";

export default function SignInPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState({
    email: "",
    name: "",
    password: "",
    passwordConfirmation: ""
  });

  const navigate = useNavigate();

  function handleSignUp(e) {
    e.preventDefault();

    signIn()
      .then(response => {
        setIsLoading(false);
        navigate("/");
      })
      .catch(error => {
        setIsLoading(false);
        console.log(error);
      });
  }

  return (
    <Wrapper>
      <h1 onClick={() => navigate("/")}>Shoes&Shoes</h1>
      <Form onSubmit={handleSignUp}>
        <Input
          onChange={e => setUser({ ...user, email: e.target.value })}
          value={user.email}
          disabled={isLoading}
          type="email"
          required
          placeholder="Email"
        ></Input>
        <Input
          onChange={e => setUser({ ...user, password: e.target.value })}
          value={user.password}
          disabled={isLoading}
          type="password"
          required
          placeholder="Senha"
        ></Input>

        <Button isLoading={isLoading} onClick={() => setIsLoading(true)}>
          {isLoading ? (
            <ThreeDots color="#fff" height="40" width="40" />
          ) : (
            "Entrar"
          )}
        </Button>
      </Form>
      <Link to="/signin">
        <span>Não tem uma conta? Cadastre-se já!</span>
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;

  h1 {
    font-family: "Koulen", cursive;
    font-weight: 600;
    font-size: 40px;
  }
  span {
    width: 90%;
    font-weight: 700;
    text-align: center;
    text-decoration-line: underline;
    color: black;
    cursor: pointer;
  }
`;

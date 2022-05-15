//Dependencies
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ThreeDots } from "react-loader-spinner";
//Components
import Form from "../components/Form";
import Input from "../components/Input";
import Button from "../components/Button";
//Services
import { signIn } from "../service/API";
import { showErrorAlert } from "../service/Utils";

export default function SignInPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.getItem("token") && navigate("/");
  }, []);

  function handleSignUp(e) {
    e.preventDefault();

    signIn(user)
      .then(response => {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("name", response.data.name);
        setIsLoading(false);
        navigate("/");
      })
      .catch(error => {
        if (error.response.status === 422) {
          showErrorAlert("Não foi possível processar seus dados.");
        } else if (error.response.status === 500) {
          showErrorAlert("Usuário não existe.");
        } else {
          showErrorAlert("As credenciais foram preenchidas incorretamente.");
        }

        setIsLoading(false);
        console.log(error);
      });
  }

  return (
    <Wrapper>
      <h1 onClick={() => navigate("/")}>Shoes&Clothes</h1>
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
      <Link to="/signup">
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

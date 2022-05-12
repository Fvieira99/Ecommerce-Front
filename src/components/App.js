//Dependencies
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
//Pages
import MainPage from "../pages/MainPage";
import SignUpPage from "../pages/SignUpPage";
import SignInPage from "../pages/SignInPage";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/product/:productName"></Route>
        <Route path="/cart"></Route>
        <Route path="/signup" element={<SignUpPage />}></Route>
        <Route path="/signin" element={<SignInPage />}></Route>
        <Route path="/checkout"></Route>
      </Routes>
    </BrowserRouter>
  );
}

const GlobalStyle = createGlobalStyle`
  body{
    box-sizing: border-box;
    font-family: 'Raleway', sans-serif;
  }
`;

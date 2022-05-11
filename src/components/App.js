//Dependencies
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Pages
import MainPage from "../pages/MainPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/product/:productName"></Route>
        <Route path="/cart"></Route>
        <Route path="/signup"></Route>
        <Route path="/signin"></Route>
        <Route path="/checkout"></Route>
      </Routes>
    </BrowserRouter>
  );
}

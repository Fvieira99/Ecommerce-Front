import reactDom from "react-dom";
import "reset-css";
import App from "./components/App";
import AppEcommerce from './context/CartContext'

reactDom.render(<AppEcommerce><App /></AppEcommerce>, document.querySelector(".root"));

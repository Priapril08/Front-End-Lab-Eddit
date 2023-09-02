import logo from "../../assets/logo.svg";
import { useContext } from "react";
import close from "../../assets/close.svg";
import { StylesHeader } from "./stylesHeader";
import { useNavigate, useLocation } from "react-router-dom";
import { goLoginPage } from "../../router/coordinator";
import { GlobalContext } from "../../context/GlobalContext";

function Header() {
  const context = useContext(GlobalContext);
  const navigate = useNavigate();
  const location = useLocation();

  const closeModal = () => {
    context.setModal(false);
    context.setActionModal("");
    context.setUrlPost("");
  };

  const logOut = () => {
    context.setModal(false);
    context.setActionModal("");
    localStorage.clear();
    goLoginPage(navigate);
  };

  return (
    <StylesHeader>
      <div>
        {context.modal && context.actionModal === "post" ? (
          <img src={close} alt="button-closed" onClick={() => closeModal()} />
        ) : (
          ""
        )}
      </div>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div>
        {location.pathname === "/signup" ? (
          <h2>
            <a onClick={() => goLoginPage(navigate)}> Entrar</a>
          </h2>
        ) : (
          <h2>
            <a onClick={() => logOut()}> Logout</a>
          </h2>
        )}
      </div>
    </StylesHeader>
  );
}

export default Header;

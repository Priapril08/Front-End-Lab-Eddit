import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";
import { goHomePage, goSignupPage } from "../../router/coordinator";
import axios from "axios";
import logo from "../../assets/logo2.svg";
import { LoginSignupStyleSection, MainStyle } from "../../constants/stylePages";
import { BASE_URL } from "../../constants/index";

function LoginPage() {
  const navigate = useNavigate();
  const context = useContext(GlobalContext);
  const [form, setForm] = useState({ email: "", password: "" });

  const changeForm = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    const token = window.localStorage.getItem("TokenApi-Labeddit");
    if (token) {
      goHomePage(navigate);
    }
  }, []);

  const userLogin = async () => {
    try {
      let body = {
        email: form.email,
        password: form.password,
      };

      const response = await axios.post(`${BASE_URL}/users/login`, body);
      console.log("response", response);

      window.localStorage.setItem(" TokenApi-Labeddit", response.data.token);
      if (response.data.token !== undefined) {
        goHomePage(navigate);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <MainStyle>
        <LoginSignupStyleSection>
          <div>
            <img src={logo} alt="Logo-Lab" />
            <h3>Labeddit - Projeto de rede social da Labenu</h3>
          </div>
          <div>
            <input
              value={form.email}
              name="email"
              onChange={changeForm}
              placeholder="Email"
            />
            <input
              value={form.password}
              name="password"
              onChange={changeForm}
              type="password"
              placeholder="Senha"
            />
          </div>
          <div>
            <button onClick={() => userLogin()}> Continuar </button>
            <button
              onClick={() => goSignupPage(navigate)}
              className="signupButton"
            >
              Crie uma conta
            </button>
          </div>
        </LoginSignupStyleSection>
      </MainStyle>
    </>
  );
}

export default LoginPage;

import axios from "axios";
import { goHomePage } from "../../router/coordinator";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import { useState } from "react";
import { LoginSignupStyleSection, MainStyle } from "../../constants/stylePages";
import { BASE_URL } from "../../constants/index";

function SignupPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const changeForm = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const signup = async () => {
    try {
      let body = {
        name: form.name,
        email: form.email,
        password: form.password,
      };
      const response = await axios.post(`${BASE_URL}/users/signup`, body);
      window.localStorage.setItem("TokenApi-Labeddit", response.data.token);
      goHomePage(navigate);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header />
      <MainStyle>
        <LoginSignupStyleSection>
          <div>
            <h1>Olá, boas vindas ao LabEddit ;D</h1>
          </div>
          <div>
            <input
              value={form.name}
              name="name"
              onChange={changeForm}
              placeholder="Apelido"
            />
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
              placeholder="Senha"
            />
          </div>
          <div>
            <p>
              Ao continuar, você concorda com o nosso{" "}
              <a href="#">Contrato de usuário</a> e nossa{" "}
              <a href="#">Politica de Privacidade</a>
            </p>
            <span>
              <input className="CheckBox" type="checkbox" />
              <label>
                Eu concordo em receber e-mails sobre coisas legais no Labeddit
              </label>
            </span>
            <p>
              <button onClick={() => signup()}> Cadastrar</button>
            </p>
          </div>
        </LoginSignupStyleSection>
      </MainStyle>
    </>
  );
}
export default SignupPage;

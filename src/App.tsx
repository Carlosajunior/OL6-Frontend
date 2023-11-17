import { useState } from "react";
import "./styles.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <h1 className="login-form-title">OL6</h1>
            <div className="wrap-input-email">
              <input
                className={
                  email !== "" ? "has-value input-email" : "input-email"
                }
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Email"></span>
            </div>

            <div className="wrap-input-password">
              <input
                className={
                  password !== ""
                    ? "has-value input-password"
                    : "input-password"
                }
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Senha"></span>
            </div>

            <div className="container-login-form-btn">
              <button className="login-form-btn">Login</button>
            </div>

            <div className="text-center-login-form">
              <span className="text-for-non-registered-user">
                Não possui conta?
              </span>
              <a href="#" className="link-text-for-signup">
                Criar conta.
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;

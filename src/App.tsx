import "./styles.css";

function App() {
  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <span className="login-form-title">OL6</span>
            <div className="wrap-input-email">
              <input className="input-email" type="email" />
              <span className="focus-input" data-placeholder="Email"></span>
            </div>
            <div className="wrap-input-password">
              <input className="input-password" type="password" />
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

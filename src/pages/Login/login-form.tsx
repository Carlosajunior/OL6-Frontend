import { Link } from "react-router-dom";
import "../../styles/login-styles.css";
import { LayoutComponents } from "../../components/LayoutComponents/layout-components";
import { InputComponent } from "../../components/InputComponents/input-components";

export const LoginForm = () => {
  return (
    <LayoutComponents>
      <form className="login-form">
        <h1 className="login-form-title">OL6</h1>

        <InputComponent
          inputName="email"
          inputType="text"
          inputPlaceholder="Email"
        />
        <InputComponent
          inputName="password"
          inputType="password"
          inputPlaceholder="Password"
        />

        <div className="container-login-form-btn">
          <button className="login-form-btn">Login</button>
        </div>

        <div className="text-center-login-form">
          <span className="text-for-non-registered-user">
            Não possui conta?
          </span>
          <Link className="link-text-for-signup" to="">
            Criar conta.
          </Link>
        </div>
      </form>
    </LayoutComponents>
  );
};
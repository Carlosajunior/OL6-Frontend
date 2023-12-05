import { Link } from "react-router-dom";
import "./login-form-styles.css";
import { LayoutComponents } from "../../components/LayoutComponents/layout-components";
import { InputComponent } from "../../components/InputComponents/input-components";
import { ButtonComponents } from "../../components/ButtonComponents/button-components";
import { FormComponents } from "../../components/FormCoponents/form-components";

export const LoginForm = () => {
  return (
    <LayoutComponents>
      <FormComponents name="login" formTitle="OL6">
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

        <ButtonComponents buttonPlaceholder="Login" />

        <div className="text-center-login-form">
          <span className="text-for-non-registered-user">
            Não possui conta?
          </span>
          <Link className="link-text-for-signup" to="/signup">
            Criar conta.
          </Link>
        </div>
      </FormComponents>
    </LayoutComponents>
  );
};

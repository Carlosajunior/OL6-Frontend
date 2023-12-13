import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LayoutComponents } from "../../components/layout";
import { InputComponent } from "../../components/input";
import { ButtonComponents } from "../../components/button";
import { FormComponents } from "../../components/form";
import { login } from '../../controller/services';
import "./login-form-styles.css";

export const LoginForm = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState<Boolean>(false)
  
  const LoginForm = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setLoading(true);
    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
    };
    const email = target.email.value;
    const password = target.password.value;

    login(email, password)
    .then((data) => {
     if(data)
      navigate("/home")
    })
    .then((err) => {
      console.log(err)
    });
    setLoading(false)
   }

  console.log(loading)
  return (
    <LayoutComponents>
      <FormComponents name="login" formTitle="OL6" submit={LoginForm}>
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
        <ButtonComponents buttonPlaceholder="Login"/>
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

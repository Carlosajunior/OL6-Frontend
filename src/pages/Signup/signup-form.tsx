import { ReactElement } from "react";
import { ButtonComponents } from "../../components/button";
import { InputComponent } from "../../components/input";
import { LayoutComponents } from "../../components/layout";
import { FormComponents } from "../../components/form";
import { Link } from "react-router-dom";
import "./signup-form-styles.css";

export function SignUpForm() {
  const dataArray: Array<{
    inputName: string;
    inputType: string;
    inputPlaceholder: string;
  }> = [
    { inputName: "name", inputType: "text", inputPlaceholder: "Nome completo" },
    { inputName: "email", inputType: "text", inputPlaceholder: "E-mail" },
    {
      inputName: "email-confirmation",
      inputType: "text",
      inputPlaceholder: "Confirme o e-mail",
    },
    { inputName: "phone", inputType: "text", inputPlaceholder: "Telefone" },
    { inputName: "password", inputType: "password", inputPlaceholder: "Senha" },
    {
      inputName: "password-confirmation",
      inputType: "password",
      inputPlaceholder: "Confirme a senha",
    },
  ];

  const inputsArray: Array<ReactElement> = [];
  dataArray.forEach((data) => {
    return inputsArray.push(
      <InputComponent
        inputName={data.inputName}
        inputType={data.inputType}
        inputPlaceholder={data.inputPlaceholder}
      />
    );
  });

  return (
    <LayoutComponents>
      <FormComponents name="signup" formTitle="Cadastro">
        {inputsArray}
        <ButtonComponents buttonPlaceholder="Cadastrar" />
        <div className="text-center-singup-form">
          <span className="text-for-registered-user">Já possui cadastro?</span>
          <Link className="link-text-for-login" to="/login">
            Fazer login.
          </Link>
        </div>
      </FormComponents>
    </LayoutComponents>
  );
}

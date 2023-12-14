import { ReactElement } from "react";
import { ButtonComponents } from "../../components/button";
import { InputComponent } from "../../components/input";
import { LayoutComponents } from "../../components/layout";
import { FormComponents } from "../../components/form";
import { Link } from "react-router-dom";
import "./signup-form-styles.css";
import { createUser } from "../../controller/services";
import { useNavigate } from "react-router-dom";

export function SignUpForm() {
  const navigate = useNavigate()
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

  const CreateUser = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
      phone: { value: string };
      name: {value: string}
    };
    const email = target.email.value;
    const password = target.password.value;
    const phone = target.phone.value;
    const name = target.name.value;

    createUser(email, password, phone, name)
    .then((data) => {
     if(data)
        navigate("/home")
    })
    .then((err) => {
      console.log(err)
    });
   }


  return (
    <LayoutComponents>
      <FormComponents name="signup" formTitle="Cadastro" submit={CreateUser}>
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

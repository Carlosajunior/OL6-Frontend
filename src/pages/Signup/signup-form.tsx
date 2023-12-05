import { ReactElement } from "react";
import { ButtonComponents } from "../../components/ButtonComponents/button-components";
import { InputComponent } from "../../components/InputComponents/input-components";
import { LayoutComponents } from "../../components/LayoutComponents/layout-components";
import { FormComponents } from "../../components/FormCoponents/form-components";

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
        <ButtonComponents buttonPlaceholder="Confirmar" />
      </FormComponents>
    </LayoutComponents>
  );
}

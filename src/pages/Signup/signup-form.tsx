import { ButtonComponents } from "../../components/ButtonComponents/button-components";
import { InputComponent } from "../../components/InputComponents/input-components";
import { LayoutComponents } from "../../components/LayoutComponents/layout-components";

export function SignUpForm() {
  return (
    <LayoutComponents>
      <form className="login-form">
        <h1 className="login-form-title">Cadastro</h1>

        <InputComponent
          inputName="name"
          inputType="text"
          inputPlaceholder="Nome completo"
        />
        <InputComponent
          inputName="email"
          inputType="text"
          inputPlaceholder="E-mail"
        />
        <InputComponent
          inputName="email-confirmation"
          inputType="text"
          inputPlaceholder="Confirme o e-mail"
        />
        <InputComponent
          inputName="phone"
          inputType="text"
          inputPlaceholder="Telefone"
        />
        <InputComponent
          inputName="password"
          inputType="password"
          inputPlaceholder="Senha"
        />
        <InputComponent
          inputName="password-confirmation"
          inputType="password"
          inputPlaceholder="Confirme a senha"
        />
        <ButtonComponents buttonPlaceholder="Confirmar" />
      </form>
    </LayoutComponents>
  );
}

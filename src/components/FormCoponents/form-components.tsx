import "./form-components-styles.css";

export const FormComponents = ({ name, formTitle, children }) => {
  const classNameForm = `form-${name}`.toLocaleLowerCase();
  const classNameH1 = `form-title-${name}`.toLocaleLowerCase();

  return (
    <form className={classNameForm}>
      <h1 className={classNameH1}>{formTitle}</h1>
      <div className="wrap-form">{children} </div>
    </form>
  );
};

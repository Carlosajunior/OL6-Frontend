import "./styles.css";

export const ButtonComponents = ({ buttonPlaceholder }) => {
  const classNameButton = `btn-${buttonPlaceholder}`.toLocaleLowerCase();
  return (
    <div className="container-btn">
      <button className={classNameButton}>{buttonPlaceholder}</button>
    </div>
  );
};

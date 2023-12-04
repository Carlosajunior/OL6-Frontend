import "./button-components-styles.css";

export const ButtonComponents = ({ buttonPlaceholder }) => {
  const className = `btn-${buttonPlaceholder}`.toLocaleLowerCase();
  return (
    <div className="container-btn">
      <button className={className}>{buttonPlaceholder}</button>
    </div>
  );
};

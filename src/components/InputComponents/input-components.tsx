import { useState } from "react";
import "./input-components-styles.css";

export const InputComponent = ({ inputName, inputType, inputPlaceholder }) => {
  const [data, setData] = useState("");
  return (
    <div className="wrap-input">
      <input
        className={
          data !== "" ? `has-value input-${inputName}` : `input-${inputName}`
        }
        type={inputType}
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <span className="focus-input" data-placeholder={inputPlaceholder}></span>
    </div>
  );
};

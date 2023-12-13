import { useState } from "react";
import "./styles.css";

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
        name={inputName}
      />
      <span className="focus-input" data-placeholder={inputPlaceholder}></span>
    </div>
  );
};

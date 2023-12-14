import { useEffect, useState } from "react";
import "./styles.css";

export const InputComponent = ({ inputName, inputType, inputPlaceholder, value="" }) => {
  const [data, setData] = useState("");

  useEffect(()=>{
    if(value)
      setData(value)
  },[value])

  return (
    <div className="wrap-input">
      <input
        className={
          data !== "" ? `has-value input-${inputName} ${value ? `color-font`: ``}` : `input-${inputName}`
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

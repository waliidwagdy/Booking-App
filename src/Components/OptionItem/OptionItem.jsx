import PropTypes from "prop-types";
import { useState } from "react";
import "./optionItem.css";

const OptionItem = ({ text, defaultValue, checkCurrentVal, optionKey }) => {
  const [state, setState] = useState(defaultValue);
  const onClickHandler = (value) => {
    setState(value === "inc" ? state + 1 : state - 1);
    checkCurrentVal(value === "inc" ? state + 1 : state - 1, optionKey);
  };
  return (
    <div className="optionItem">
      <span className="optionText">{text}</span>
      <div className="optionCounter">
        <button
          disabled={state <= defaultValue}
          className="optionCounterButton"
          onClick={() => onClickHandler("dec")}
        >
          -
        </button>
        <span className="optionCounterNumber">{state}</span>
        <button
          className="optionCounterButton"
          onClick={() => onClickHandler("inc")}
        >
          +
        </button>
      </div>
    </div>
  );
};
OptionItem.propTypes = {
  text: PropTypes.string.isRequired,
  defaultValue: PropTypes.number.isRequired,
  checkCurrentVal: PropTypes.func.isRequired,
  optionKey: PropTypes.string.isRequired,
};
export default OptionItem;

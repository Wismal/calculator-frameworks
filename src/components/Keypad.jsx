import PropTypes from "prop-types";

export const Keypad = ({
  onNumberClick,
  onOperationClick,
  onEqualClick,
  onResetClick, 
  onDeleteClick,
}) => {
  return (
    <section className="grid grid-cols-4 grid-rows-5 gap-4 rounded-lg bg-[var(--toggle-bg)] p-8">
      <button onClick={() => onNumberClick("7")} className="btn">
        7
      </button>
      <button onClick={() => onNumberClick("8")} className="btn">
        8
      </button>
      <button onClick={() => onNumberClick("9")} className="btn">
        9
      </button>
      <button onClick={onDeleteClick} id="delButton" className="btn">
        DEL
      </button>

      <button onClick={() => onNumberClick("4")} className="btn">
        4
      </button>
      <button onClick={() => onNumberClick("5")} className="btn">
        5
      </button>
      <button onClick={() => onNumberClick("6")} className="btn">
        6
      </button>
      <button onClick={() => onOperationClick("+")} className="btn">
        +
      </button>

      <button onClick={() => onNumberClick("1")} className="btn">
        1
      </button>
      <button onClick={() => onNumberClick("2")} className="btn">
        2
      </button>
      <button onClick={() => onNumberClick("3")} className="btn">
        3
      </button>
      <button onClick={() => onOperationClick("-")} className="btn">
        -
      </button>

      <button onClick={() => onNumberClick(".")} className="btn">
        .
      </button>
      <button onClick={() => onNumberClick("0")} className="btn">
        0
      </button>
      <button onClick={() => onOperationClick("*")} className="btn">
        ×
      </button>
      <button onClick={() => onOperationClick("/")} className="btn">
        /
      </button>

      <button onClick={onResetClick} id="resetButton" className="btn">
        RESET
      </button>
      <button onClick={onEqualClick} id="equalButton" className="btn">
        =
      </button>
    </section>
  );
};

Keypad.propTypes = {
  onNumberClick: PropTypes.func.isRequired,
  onOperationClick: PropTypes.func.isRequired,
  onEqualClick: PropTypes.func.isRequired,
  onResetClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

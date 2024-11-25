import PropTypes from "prop-types";

export const Display = ({ value }) => {
  const updateDisplay = (val) => {
    const valueInt = parseFloat(val);

    if (
      Math.abs(valueInt) > 1e9 ||
      (Math.abs(valueInt) < 1e-9 && valueInt !== 0)
    ) {
      return valueInt.toExponential(5);
    }
    return val;
  };
  return (
    <section className="flex h-20 items-end justify-end rounded-lg bg-[var(--screen-bg)] px-4 pb-4 pt-6">
      <span className="text-5xl text-[var(--text-specific)]">
        {updateDisplay(value)}
      </span>
    </section>
  );
};

Display.propTypes = {   
  value: PropTypes.string.isRequired,
};

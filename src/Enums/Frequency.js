var FREQUENCY = {
  WEEKLY: { value: 0, name: "Weekly" },
  BI_WEEKLY: { value: 1, name: "Bi-Weekly" },
  MONTHLY: { value: 2, name: "Monthly" },
};

/**
 * Returns name of freqency given the int value.
 * @param {int} value
 */
function getName(value) {
  switch (value) {
    case 0:
      return FREQUENCY.WEEKLY.name;
    case 1:
      return FREQUENCY.BI_WEEKLY.name;
    case 2:
      return FREQUENCY.MONTHLY.name;
  }
}

/**
 * Returns int of a freqency given the string value
 * @param {string} name
 */
function getValue(name) {
  switch (value) {
    case "Weekly":
      return FREQUENCY.WEEKLY.value;
    case "Bi-Weekly":
      return FREQUENCY.BI_WEEKLY.value;
    case "Monthly":
      return FREQUENCY.MONTHLY.value;
  }
}

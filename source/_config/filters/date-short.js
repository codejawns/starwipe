// Import date methods.
const {DateTime} = require("luxon");

// Returns a date in the format of day-month-year. e.g. "2023-01-01".
module.exports = function(dateObj) {
  return DateTime
    .fromISO(dateObj)
    .toFormat("yyyy-MM-dd");
};

// Import date methods.
const {DateTime} = require("luxon");

// Returns a date in the format of day-month-year. e.g. "1 January 2023".
module.exports = function(dateObj) {
  return DateTime
    .fromISO(dateObj)
    .toFormat("d MMM yyyy");
};

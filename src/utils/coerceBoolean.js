// Attempt to convert a string value to a Boolean. Otherwise, return the value
// without modification so Vue can throw a warning.
"use strict";

module["export"] = function (val) {
  return typeof val !== "string" ? val : val === "true" ? true : val === "false" ? false : val === "null" ? false : val === "undefined" ? false : val;
};



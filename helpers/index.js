const { hashSync, genSaltSync, compareSync } = require("bcryptjs");

function hashPassword(password) {
  let salt = genSaltSync(10);
  let hashedPassword = hashSync(password, salt);
  return hashedPassword;
}

function comparePassword(password, hashedPassword) {
  return compareSync(password, hashedPassword);
}

module.exports = { hashPassword, comparePassword };
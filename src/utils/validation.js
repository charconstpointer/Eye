const validator = {
  validateUsername: username => RegExp("^[a-zA-Z]{5,15}").test(username),
  validatePassword: password =>
    RegExp(
      "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
    ).test(password)
};

export default validator;

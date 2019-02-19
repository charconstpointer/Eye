const validator = {
  //username : no special characters, length between 5 and 15
  validateUsername: username => RegExp("[a-zA-Z0-9]{5,15}").test(username),
  //password : At least one upper one lower one special and one digit with length greater than 7
  validatePassword: password =>
    RegExp(
      "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
    ).test(password),
  //
  validateHostAddress: address =>
    RegExp(
      "(https|http)?(://)?(www.)?([a-zA-Z0-9])+(:[0-9]{2,5})?.(com|pl|org|net)?/([a-zA-Z]+)?"
    ).test(address)
};

export default validator;

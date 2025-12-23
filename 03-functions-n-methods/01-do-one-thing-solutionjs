function createUser(email, password) {
  const user = {
    email: email,
    password: password,
  };

  validateInput(user);

  saveUser(user);
}

function validateInput({ email, password }) {
  if (isEmailValid(email) && isPasswordValid(password)) {
    throw new Error("Invalid email or password");
  }
}

function isEmailValid(email) {
  return email && email.includes("@");
}

function isPasswordValid(password) {
  return password && password.trim() !== "";
}

function showError(message) {
  console.log(message);
}

function saveUser(user) {
  database.insert(user);
}

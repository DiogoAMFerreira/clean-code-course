class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  save() {
    database.insert(this);
  }
}

function createUser(email, password) {
  validateInput(email, password);

  saveUser(email, password);
}

function validateInput(email, password) {
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

function saveUser(email, password) {
  const newUser = new User(email, password);

  newUser.save();
}

function createUser(email, password) {
  if (!email || !email.includes("@") || !password || password.trim() === "") {
    console.log("Invalid email or password");
    return;
  }
  const user = {
    email: email,
    password: password,
  };

  database.insert(user);
}

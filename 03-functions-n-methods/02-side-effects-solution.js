function initApp() {
  const success = connectDatabase();
  if (!success) {
    showError("Could not connect to database!");
    return;
  }
  //...
}

function connectDatabase() {
  return database.connect();
}

function showError(message) {
  console.log(message);
}

function determineSupportAgent(ticket) {
  if (ticket.requestType === "unknown") {
    return findStandardAgent();
  }
  return findAgentByRequestType(ticket.requestType);
}

function createUser(email, password) {
  if (!isValid(email, password)) {
    showError("Invalid input!");
    return;
  }
  //...
}

function isValid(email, password) {
  if (!email.includes("@") || password.length < 7) {
    return false;
  }
  return true;
}

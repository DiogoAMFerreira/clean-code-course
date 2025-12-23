// Side effect not expected: logging an error message
function connectDatabase() {
  const didConnect = database.connect();
  if (didConnect) {
    return true;
  }
  console.log("Could not connect to database!");
  return false;
}

function determineSupportAgent(ticket) {
  if (ticket.requestType === "unknown") {
    return findStandardAgent();
  }
  return findAgentByRequestType(ticket.requestType);
}

// Side effect not expected: logging an error message
function isValid(email, password) {
  if (!email.includes("@") || password.length < 7) {
    console.log("Invalid input!");
    return false;
  }
  return true;
}

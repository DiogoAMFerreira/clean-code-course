main();

function main() {
  const transactions = [
    {
      id: "t1",
      type: "PAYMENT",
      status: "OPEN",
      method: "CREDIT_CARD",
      amount: "23.99",
    },
    {
      id: "t2",
      type: "PAYMENT",
      status: "OPEN",
      method: "PAYPAL",
      amount: "100.43",
    },
    {
      id: "t3",
      type: "REFUND",
      status: "OPEN",
      method: "CREDIT_CARD",
      amount: "10.99",
    },
    {
      id: "t4",
      type: "PAYMENT",
      status: "CLOSED",
      method: "PLAN",
      amount: "15.99",
    },
  ];

  processTransactions(transactions);
}

function processTransactions(transactions) {
  if (isEmpty(transactions)) {
    showError("No transactions to process!");
    return;
  }

  for (const transaction of transactions) {
    processTransaction(transaction);
  }
}

function isEmpty(transactions) {
  return !transactions || transactions.length === 0;
}

function showError(message, item) {
  console.log(message);
  if (item) {
    console.log(item);
  }
}

function processTransaction(transaction) {
  if (!isOpen(transaction)) {
    showError("Invalid transaction type!");
    return;
  }

  switch (transaction.type) {
    case "PAYMENT":
      processPayment(transaction);
      break;
    case "REFUND":
      processRefund(transaction);
      break;
    default:
      showError("Invalid transaction type!", transaction);
      break;
  }
}

function isOpen(transaction) {
  return transaction.status === "OPEN";
}

function processPayment(transaction) {
  switch (transaction.method) {
    case "CREDIT_CARD":
      return processCreditCardPayment(transaction);
    case "PAYPAL":
      return processPayPalPayment(transaction);
    case "PLAN":
      return processPlanPayment(transaction);
  }
}

function processRefund(transaction) {
  switch (transaction.method) {
    case "CREDIT_CARD":
      return processCreditCardRefund(transaction);
    case "PAYPAL":
      return processPayPalRefund(transaction);
    case "PLAN":
      return processPlanRefund(transaction);
  }
}

function processCreditCardPayment(transaction) {
  console.log(
    "Processing credit card payment for amount: " + transaction.amount
  );
}

function processCreditCardRefund(transaction) {
  console.log(
    "Processing credit card refund for amount: " + transaction.amount
  );
}

function processPayPalPayment(transaction) {
  console.log("Processing PayPal payment for amount: " + transaction.amount);
}

function processPayPalRefund(transaction) {
  console.log("Processing PayPal refund for amount: " + transaction.amount);
}

function processPlanPayment(transaction) {
  console.log("Processing plan payment for amount: " + transaction.amount);
}

function processPlanRefund(transaction) {
  console.log("Processing plan refund for amount: " + transaction.amount);
}

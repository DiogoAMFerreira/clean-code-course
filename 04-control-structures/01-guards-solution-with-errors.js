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
  try {
    processTransactions(transactions);
  } catch (error) {
    showError(error.message);
  }
}

function processTransactions(transactions) {
  if (isEmpty(transactions)) {
    const error = new Error("No transactions to process!");
    throw error;
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
  try {
    validateTransaction(transaction);

    switch (transaction.type) {
      case "PAYMENT":
        return processPayment(transaction);
      case "REFUND":
        return processRefund(transaction);
    }
  } catch (error) {
    showError(error.message, error.item);
  }
}

function validateTransaction(transaction) {
  if (!isOpen(transaction)) {
    const error = new Error("Invalid transaction type!");
    error.item = transaction;
    throw error;
  }
  if (!isPayment(transaction) && !isRefund(transaction)) {
    const error = new Error("Invalid transaction type!");
    error.item = transaction;
    throw error;
  }
}

function isOpen(transaction) {
  return transaction.status === "OPEN";
}

function isPayment(transaction) {
  return transaction.type === "PAYMENT";
}

function isRefund(transaction) {
  return transaction.type === "REFUND";
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

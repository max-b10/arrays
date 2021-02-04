const account = {
  name: "John Smith",
  expenses: [],
  income: [],
  addExpense: function (description, amount) {
    this.expenses.push({
      description: description,
      amount: amount,
    });
  },
  addIncome: function (description, amount) {
    this.income.push({
      description: description,
      amount: amount,
    });
  },
  getAccountSummary: function () {
    let totalExpenses = 0;
    let totalIncome = 0;
    let accountBalance = 0;

    this.expenses.forEach(function (expense) {
      totalExpenses = totalExpenses + expense.amount;
    });
    this.income.forEach(function (income) {
      totalIncome = totalIncome + income.amount;
    });
    let accountBalance = totalIncome - totalExpenses;
    return `${this.name} has an account balance of:$${accountBalance}.`;
  },
};
// An expense has 2 properties: description and amount.
// The addExpense should add an object to the expenses array.
// It will take 2 arguments: description and amount.
// getAccountSummary: total up all expenses. And print summary message.
// Will need to use forEach() to go through each expense.

// Add an income array to account.
// addIncome method which will have a description and amount.
// Then update getAccountSummary to print the account balance (income-expenses).

// Method calls to test:
account.addExpense("Rent", 950);
account.addExpense("Coffee", 2.5);
account.addIncome("Job", 2000);
console.log(account.getAccountSummary());
// console.log(account);

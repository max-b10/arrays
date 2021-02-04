const account = {
  name: "John Smith",
  expenses: [],
  addExpense: function (description, amount) {
    this.expenses.push({
      description: description,
      amount: amount,
    });
  },
  getAccountSummary: function () {
    let totalExpenses = 0;
    this.expenses.forEach(function (expense) {
      totalExpenses = totalExpenses + expense.amount;
    });
    return `${this.name} has $${totalExpenses} in expenses.`;
  },
};

// An expense has 2 properties: description and amount.
// The addExpense should add an object to the expenses array.
// It will take 2 arguments: description and amount.
// getAccountSummary: total up all expenses. And print summary message.
// Will need to use forEach() to go through each expense.

// Method calls to test:
account.addExpense("Rent", 950);
account.addExpense("Coffee", 2.5);
console.log(account.getAccountSummary());
// console.log(account);

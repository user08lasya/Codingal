let balance = 0;
let income = 0;
let expenses = 0;

document.getElementById('transactionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const description = document.getElementById('description').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const type = document.getElementById('type').value;

    if (type === 'income') {
        balance += amount;
        income += amount;
    } else {
        balance -= amount;
        expenses += amount;
    }

    updateSummary();
    addTransactionToList(description, amount, type);
    this.reset(); // Clear the form
});

function updateSummary() {
    document.getElementById('balance').textContent = balance.toFixed(2);
    document.getElementById('income').textContent = income.toFixed(2);
    document.getElementById('expenses').textContent = expenses.toFixed(2);
}

function addTransactionToList(description, amount, type) {
    const transactionList = document.getElementById('transactionList');
    const newTransaction = document.createElement('li');
    newTransaction.textContent = '${description}: $${amount.toFixed(2)} (${type})';
    transactionList.appendChild(newTransaction);

   
    if (transactionList.firstChild.textContent === 'No transactions added yet.') {
        transactionList.firstChild.remove();
    }
}
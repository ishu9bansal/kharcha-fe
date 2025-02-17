import { useEffect, useState } from 'react';
import './App.css';
import ExpenseForm from './components/ExpenseForm';
import service from './services/backend';

function App() {
  const [loading, setLoading] = useState(false);
  const [expenses, setExpenses] = useState([]);

  const onSaveExpense = async (expense) => {
    setLoading(true);
    await service.addExpense(expense);
    setLoading(false);
    fetchExpenses();
  };

  const fetchExpenses = async () => {
    const expenses = await service.getExpenses();
    setExpenses(expenses);
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <div className="App">
      <h1>Kharcha App</h1>
      <ExpenseForm onSaveExpense={onSaveExpense} disabled={loading} />
      <hr />
      <h2>Recent Expenses</h2>
      <ul style={{ textAlign: 'left' }}>
        {expenses.map((expense) => (
          <li key={expense.id}>
            {expense.timestamp.split('T')[0]}- {expense.amount} - {expense.title}  - {expense.category} - {expense.paymentMode} - {expense.recipient}
          </li>))}
      </ul>
    </div>
  );
}

export default App;

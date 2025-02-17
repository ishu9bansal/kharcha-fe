import { useState } from 'react';
import './App.css';
import ExpenseForm from './components/ExpenseForm';
import service from './services/backend';

function App() {
  const [loading, setLoading] = useState(false);
  const onSaveExpense = async (expense) => {
    setLoading(true);
    await service.addExpense(expense);
    setLoading(false);
  };
  return (
    <div className="App">
      <h1>Kharcha App</h1>
      <ExpenseForm onSaveExpense={onSaveExpense} disabled={loading} />
      {/* <hr />
      <h2>Recent Expenses</h2>
      <ul>
        <li>Placeholder 1</li>
        <li>Placeholder 2</li>
        <li>Placeholder 3</li>
      </ul> */}
    </div>
  );
}

export default App;

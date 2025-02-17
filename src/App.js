import './App.css';
import ExpenseForm from './components/ExpenseForm';

function App() {
  const onSaveExpense = (expense) => {
    console.log(expense);
  };
  return (
    <div className="App">
      <h1>Kharcha App</h1>
      <ExpenseForm onSaveExpense={onSaveExpense} />
    </div>
  );
}

export default App;

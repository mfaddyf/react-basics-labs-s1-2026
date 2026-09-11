import './App.css';
import Task from './components/Task';

function App() {
  return (
    <div className="container">
      <h1>Tasky</h1>
      <Task title="Dishes" deadline="Today" description="Wash dishes & sort them away." />
      <Task title="Laundry" deadline="Tomorrow" description="Fold laundry and put away." />
      <Task title="Tidy" deadline="Today" description="Tidy room & hoover." /> 
    </div>
  );
}

export default App;

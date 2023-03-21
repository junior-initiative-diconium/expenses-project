import Dashboard from "./components/Dashboard";
import FoodDashboard from "./components/FoodDashboard";
import "./index.css";

function App() {
  return (
    <div className="Expenses Project">
      <h1>This is an app to calculate monthly expenses</h1>
      <Dashboard />
      <FoodDashboard />
    </div>
  );
}

export default App;

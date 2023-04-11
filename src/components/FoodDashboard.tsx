import { useState } from "react";
// import ListItem from "./ListItem";

// TODOs
// Add functionality to X to remove item (?) DONE
// Add a way to restore deleted item
// calculate expense total - might need separate button (?) DONE

export default function FoodDashboard() {
  const [expenseList, setExpenseList] = useState([]);
  const [input, setInput] = useState("");

  let totalValue = expenseList
    .map((item) => parseInt(item))
    .reduce(function (x, y) {
      return x + y;
    }, 0);

  function addItem(e: any) {
    e.preventDefault();
    if (input) {
      setExpenseList((prev) => [...prev, input]);
      setInput("");
    }
  }

  function removeItem(index) {
    const newList = expenseList.filter((_, i) => i !== index);
    setExpenseList(newList);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <>
      <div>
        <h1>Food Expenses</h1>
        <p>This month you have spent {totalValue}€ on food</p>
      </div>
      <ul>
        {expenseList.map((expense, index) => (
          <li key={index}>
            <span>
              <button className="item-btn btn">
                {expense}€
                <form onSubmit={handleSubmit}>
                  <input
                    className="expense-description-input"
                    type="text"
                    placeholder="What did you buy?"
                  ></input>
                </form>
                <span className="delete-btn" onClick={() => removeItem(index)}>
                  X
                </span>
              </button>
            </span>
          </li>
        ))}
        <div>
          <form onSubmit={addItem}>
            <input
              className="expense-input"
              type="number"
              value={input}
              placeholder="How much did you spend?"
              onChange={(e) => setInput(e.target.value)}
            />
          </form>
        </div>
      </ul>
    </>
  );
}

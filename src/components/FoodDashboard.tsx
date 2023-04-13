import { useState } from "react";
// import ListItem from "./ListItem";

// TODOs
// Incorporate description into button/expense
// Add a way to restore deleted item (?)
// calculate expense total - might need separate button (?) DONE

export default function FoodDashboard() {
  const [expenseList, setExpenseList] = useState(() => {
    return JSON.parse(localStorage.getItem("expense-list")) || [];
  });
  const [input, setInput] = useState("");
  localStorage.setItem("expense-list", JSON.stringify(expenseList));

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

  function addDescription(e: any) {
    e.preventDefault();
  }

  function removeItem(index) {
    const newList = expenseList.filter((_, i) => i !== index);
    setExpenseList(newList);
  }

  return (
    <>
      <div>
        <h1>Food Expenses</h1>
        <p>
          This month you have spent{" "}
          <span className="total-number">{totalValue}€</span> on food
        </p>
      </div>
      <ul>
        {expenseList.map((expense, index) => (
          <li key={index}>
            <span>
              <button className="item-btn btn">
                <span className="expense-number">{expense}€</span>
                <form onSubmit={addDescription}>
                  <input
                    key={index}
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

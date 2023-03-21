import { useState } from "react";
// import ListItem from "./ListItem";

// TODOs
// Add functionality to X to remove item (?)
// Add a way to restore deleted item
// calulate expense total - might need separate button (?)

export default function FoodDashboard() {
  const [expenseList, setExpenseList] = useState([]);
  const [input, setInput] = useState("");
  console.log(expenseList);

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

  function checkDeletedItem() {}

  function removeItem(e: any) {
    let currentItem = e.target.textContent;
    console.log(currentItem);

    if (expenseList.includes(currentItem)) {
      const newExpenseList = expenseList.filter((item) => item !== currentItem);
      setExpenseList(newExpenseList);
      checkDeletedItem();
    } else setExpenseList([...expenseList, currentItem]);

    const removeItem = expenseList.filter((item) => {
      return item !== currentItem;
    });
    setExpenseList(removeItem);
  }

  return (
    <>
      <div>
        <h1>Food Expenses</h1>
        <p>This month you have spent {totalValue} Euro on food</p>
      </div>
      <ul>
        {expenseList.map((expense) => (
          <li key={expense}>
            <button
              onClick={(e: any) => removeItem(e)}
              className="item-btn btn"
            >
              {expense}
            </button>
          </li>
        ))}
      </ul>
      <div>
        <form onSubmit={addItem}>
          <input
            type="number"
            value={input}
            placeholder="Add a new expense"
            onChange={(e) => setInput(e.target.value)}
          />
        </form>
      </div>
    </>
  );
}

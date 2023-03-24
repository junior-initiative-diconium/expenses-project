import { useState } from "react";
// import ListItem from "./ListItem";

// TODOs
// Add functionality to X to remove item (?)
// Add a way to restore deleted item
// calulate expense total - might need separate button (?)

export default function FoodDashboard() {
  const [expenseList, setExpenseList] = useState([]);
  const [input, setInput] = useState("");
  let initialExpenseId: number = 0;
  let initialDescriptionId: number = 100;
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

  function handleDescriptionInput(e) {
    e.preventDefault();
    console.log("event", e.target.getAttribute("datatest-id"));
    console.log("event", e.target.getAttribute("datatest-id"));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("foo");
  }

  return (
    <>
      <div>
        <h1>Food Expenses</h1>
        <p>This month you have spent {totalValue}€ on food</p>
      </div>
      <ul>
        {expenseList.map((expense) => (
          <li key={initialExpenseId++}>
            <span>
              <button
                onClick={(e: any) => removeItem(e)}
                className="item-btn btn"
                datatest-id={initialExpenseId++}
              >
                {expense}€
                <form onSubmit={handleSubmit}>
                  <input
                    className="expense-description-input"
                    type="text"
                    placeholder="What did you buy?"
                    onChange={(e) => handleDescriptionInput(e)}
                    datatest-id={initialDescriptionId++}
                  ></input>
                </form>
              </button>
            </span>
          </li>
        ))}
      </ul>
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
    </>
  );
}

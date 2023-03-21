// function removeItem(e: any) {
//   console.log("clicked!");
//   let current = e.target;
//   //   current.classList.toggle("colour-test");
//   const removeItem = list.filter((todo) => {
//     return todo.id !== id;
//   });
//   setTodos(removeItem);
// }

export default function ListItem(expense: any) {
  return (
    <li key={expense.item}>
      <button className="item-btn btn">{expense.item}</button>
    </li>
  );
}

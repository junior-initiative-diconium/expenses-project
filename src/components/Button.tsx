import "../index.css";

export default function Button(props: { type: "Add" | "Remove" }) {
  function handleClick(e: any) {
    let current = e.target;
    current.classList.toggle("add-remove-button");
  }

  return (
    <button
      className={""}
      onClick={(e) => {
        handleClick(e);
      }}
    >
      {props.type} expense
    </button>
  );
}

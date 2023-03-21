export default function TextInput(props: any) {
  return (
    <div>
      <input
        type="text"
        value={props.value}
        onChange={(event) => console.log("value changed!")}
      />
      <p>error message</p>
    </div>
  );
}

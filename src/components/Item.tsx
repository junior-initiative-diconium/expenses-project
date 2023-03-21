export default function Item(props: any) {
  return (
    <p>
      {props.item}: {props.amount} Euro
    </p>
  );
}

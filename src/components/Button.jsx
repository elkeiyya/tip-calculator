export default function Button({
  percent,
  index,
}) {
  return (
    <button
      id={index}
      className="text-white bg-veryDarkCyan rounded-md hover:bg-strongCyan hover:text-veryDarkCyan"
    >
      {percent}%
    </button>
  );
}

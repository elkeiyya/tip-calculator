export default function Button({
  percent,
  index,
}) {
  return (
    <button
      key={index}
      className="text-white bg-veryDarkCyan rounded-md hover:bg-strongCyan hover:text-veryDarkCyan"
    >
      {percent}%
    </button>
  );
}

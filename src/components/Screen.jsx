export default function Screen() {
  return (
    <div className="bg-veryDarkCyan text-white p-7 fele flex-col justify-between items-center rounded-md md:w-1/2 h-full">
      <div>
        <Amount
          title={"Tip Amount"}
          amount={"$4.27"}
        />
        <Amount
          title={"Total"}
          amount={"$32.79"}
        />
      </div>
      <button className="text-veryDarkCyan bg-strongCyan rounded-md w-3/4  mx-auto">
        Reset
      </button>
    </div>
  );
}

const Amount = ({ title, amount }) => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h3 className="text-base">{title}</h3>
        <p className="text-sm text-darkGrayishCyan">
          / person
        </p>
      </div>
      <h2 className="text-strongCyan text-3xl">
        {amount}
      </h2>
    </div>
  );
};

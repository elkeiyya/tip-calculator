export default function Input({
  value,
  handleClick,
  image,
}) {
  return (
    <div className="">
      <h2 className="text-base mb-3 text-grayishCyan">
        Bill
      </h2>
      <div className="relative">
        <input
          type="number"
          className="outline-none bg-veryLightGrayishCyan rounded-md px-3 text-right text-veryDarkCyan placeholder-veryDarkCyan w-full"
          value={value}
          onChange={handleClick}
          placeholder="0"
        />
        <img
          src={image}
          className="absolute top-2 left-3"
          alt="Dollar Icon"
        />
      </div>
    </div>
  );
}

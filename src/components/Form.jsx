import { useState } from "react";
import DollarIcon from "../assets/images/icon-dollar.svg";
import Button from "./Button";

export default function Form() {
  const [bill, setBill] = useState("");
  const percentages = [5, 10, 15, 25, 50];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleClick = (e) => {
    setBill(e.target.value);
  };

  return (
    <form
      className="flex flex-col gap-3"
      onSubmit={handleSubmit}
    >
      <div className="">
        <h2 className="text-base mb-3 text-grayishCyan">
          Bill
        </h2>
        <div className="relative">
          <input
            type="number"
            className="outline-none bg-veryLightGrayishCyan rounded-md px-3 text-right text-veryDarkCyan placeholder-veryDarkCyan"
            value={bill}
            onChange={handleClick}
            placeholder="0"
          />
          <img
            src={DollarIcon}
            className="absolute top-2 left-3"
            alt="Dollar Icon"
          />
        </div>
      </div>
      <div className="">
        <h2 className="text-base mb-3 text-grayishCyan">
          Select Tip %
        </h2>
        <div className="grid gap-3 grid-cols-3">
          {percentages.map((percent, index) => (
            <Button
              percent={percent}
              index={index}
            />
          ))}
          <input
            type="number"
            placeholder="Custom"
            className="text-center text-veryDarkCyan outline-none bg-veryLightGrayishCyan rounded-md"
          />
        </div>
      </div>
    </form>
  );
}

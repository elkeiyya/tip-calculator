import { useState } from "react";
import DollarIcon from "../assets/images/icon-dollar.svg";
import PersonIcon from "../assets/images/icon-person.svg";
import Button from "./Button";
import Input from "./Input";

export default function Form() {
  const [bill, setBill] = useState("");
  const [people, setPeople] = useState("");
  const percentages = [5, 10, 15, 25, 50];

  const handleSubmit = e => {
    e.preventDefault();
  };

  const handleBill = e => {
    setBill(e.target.value);
  };

  const handlePeople = e => {
    setPeople(e.target.value);
  };

  return (
    <form
      className="flex flex-col gap-3 md:w-1/2"
      onSubmit={handleSubmit}
    >
      <Input
        value={bill}
        handleClick={handleBill}
        image={DollarIcon}
      />
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
      <Input
        value={people}
        handleClick={handlePeople}
        image={PersonIcon}
      />
    </form>
  );
}

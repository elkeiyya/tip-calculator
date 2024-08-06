import { useState } from "react";
import Form from "./Form";
import Screen from "./Screen";

export default function Calculator() {
  const [tip, setTip] = useState("");
  const [total, setTotal] = useState("");
  return (
    <div className="bg-white p-6 rounded-lg flex gap-3 items-center justify-start max-w-[800px]">
      <Form />
      <Screen />
    </div>
  );
}

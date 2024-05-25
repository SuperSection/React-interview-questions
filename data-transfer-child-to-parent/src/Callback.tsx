import { useState } from "react";

const Callback = ({ getColor }: { getColor: CallableFunction }) => {
  const [activeColor, setActiveColor] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setActiveColor(value);
    getColor(value);
  };

  return (
    <input
      type="text"
      id="input"
      aria-label="input"
      onChange={handleChange}
      value={activeColor}
      className="px-2.5 py-1.5 border-2 rounded border-gray-400"
    ></input>
  );
};

export default Callback;
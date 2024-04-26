import { useMemo, useState } from "react";
import "./App.css";


type InputEvent = React.ChangeEvent<HTMLInputElement>;

const callAPI = (e: InputEvent) => {
  console.log("Calling API: ", e.target.value);
};

type DebounceFunction = (e: InputEvent) => void;

const debounce = (func: DebounceFunction, delay: number) => {
  let timer: number;
  return (args: InputEvent) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(args);
    }, delay);
  };
};

// const debouncedAPIcall = debounce(callAPI, 1000);


export default function App() {

  const [inputValue, setInputValue] = useState("");

  const debouncedAPIcall = useMemo(() => debounce(callAPI, 1000), []);

  return (
    <>
      <h2 className="text-3xl mb-5 font-medium">Debouncing in React</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
          debouncedAPIcall(e);
        }}
        className="border-2 border-gray-400 rounded-md px-3 py-2 w-full"
      />
    </>
  );
}

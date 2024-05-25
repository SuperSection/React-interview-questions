import { SetStateAction, useState } from "react";
import Callback from "./Callback";

export default function App() {
  const [UIcolor, setUIcolor] = useState(null);

  // callback function
  const getColor = (color: SetStateAction<null>) => {
    setUIcolor(color);
  };

  return (
    <div>
      <div
        className="h-[300px] border-white border-2 my-7 -mt-10"
        style={{ background: `${UIcolor}` }}
      ></div>
      <Callback getColor={getColor} />
    </div>
  );
}
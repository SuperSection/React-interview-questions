import { useEffect } from "react";

function FunctionalCounter({ number }) {
  useEffect(() => {
    console.log("Functional component: Mounting...");
  });

  useEffect(() => {
    console.log("Functional component: Updating...");
  }, [number]);

  return (
    <div>
      <h2>{number}</h2>
    </div>
  );
}

export default FunctionalCounter;

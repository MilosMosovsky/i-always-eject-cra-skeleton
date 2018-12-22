import * as React from "react";

const Icon = (props) => {
  const [counter, setCounter] = React.useState(0);

  return (
    <>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      Counter is: {counter}
    </>
  );
};

export default Icon;

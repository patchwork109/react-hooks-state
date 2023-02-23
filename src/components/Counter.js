import React, { useState } from "react";


function Counter () {
  const [count, setCount] = useState(0);
  
  const incrementCounter = () => {
    setCount((count) => count + 1);
    console.log("I've been clicked");
  }

  return (
    <div>
      <button onClick={incrementCounter}>I have been clicked {count} times</button>
    </div>
  )
}

// function Counter() {
//   const [count, setCount] = useState(0);

//   function increment() {
//     setCount(count + 1);
//   }

//   return <button onClick={increment}>I have been clicked {count} times</button>;
// }

export default Counter;

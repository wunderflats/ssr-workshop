import React, { useState } from "react";

const App: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Hello world</h1>
      <button onClick={() => setCount((prevState) => prevState + 1)}>
        Click
      </button>
      Count: {count}
    </div>
  );
};

export default App;

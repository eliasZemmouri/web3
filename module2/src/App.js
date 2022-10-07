import { useState } from "react";
import { Display } from "./Display";
import { Button } from "./Button";

const App = () => {
  const [counter, setCounter] = useState(0);
  const changeCount = (delta) => {
    setCounter(counter + delta);
  };

  return (
    <div>
      <Display counter={counter} />
      <Button delta="+1" changeCount={changeCount} text="plus" />
      <Button delta="-1" changeCount={changeCount} text="moins" />
      <Button
        delta={-counter.toString()}
        changeCount={changeCount}
        text="zero"
      />
    </div>
  );
};
export default App;

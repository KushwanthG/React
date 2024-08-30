import { useState } from "react";
import * as math from "mathjs";
import Button from "./button";
import Input from "./input";

const Calculators = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const addToText = (val) => {
    setText((prevText) => prevText + val);
  };

  const calculateResult = () => {
    try {
      const input = text;
      setResult(math.evaluate(input));
    } catch (error) {
      setResult("Error");
    }
  };

  const resetInput = () => {
    setText("");
    setResult("");
  };

  const buttonColor = "#f2a33c";

  const buttons = [
    ["7", "8", "9", "/"],
    ["4", "5", "6", "*"],
    ["1", "2", "3", "+"],
    ["0", ".", "=", "-"]
  ];

  return (
    <div className="App">
      <div className="calc-wrapper">
        <Input text={text} result={result} />
        {buttons.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((symbol) => (
              <Button key={symbol} symbol={symbol} handleClick={symbol === "=" ? calculateResult : addToText} color={["/", "*", "+", "-"].includes(symbol) ? buttonColor : undefined}/>
            ))}
          </div>
        ))}
        <Button symbol="Clear" color="red" handleClick={resetInput} />
      </div>
    </div>
  );
};

export default Calculators;

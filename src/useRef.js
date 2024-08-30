import { useEffect, useRef } from "react"

export default function Timerref() {
  const inputRef = useRef(2);

  const handleButtonClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
      console.log(inputRef.current)
      console.log(inputRef.current.value)
    }
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
     <button onClick={handleButtonClick}>CLICK</button>
    
    </div>
  );
}

import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
  const [value, setValue] = useState(0);
  const [precentage, setPrecentage] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setValue((val) => val + 1);
    }, 1000);

    setPrecentage(Math.min(100, Math.max(value, 0)));
  }, [value]);
  return (
    <div className="App">
      <h1>Progress Bar</h1>

      <div className="progress">
        <div className="progressBar">
          <div className="loading" style={{ width: `${precentage}%` }}>
            <span
              style={{
                color: precentage > 49 ? "white" : "black"
              }}
            >
              {precentage}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

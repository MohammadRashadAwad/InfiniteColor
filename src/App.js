import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [box, setBox] = useState([{ bg: "#777" }]);
  const RandomColor = "#" + ((Math.random() * 0xffffff) << 0).toString(16);
  useEffect(() => {
    const time = setTimeout(() => {
      setBox([...box, { bg: RandomColor }]);
      return () => clearTimeout(time);
    }, 100);
  }, [box]);
  const [toggel, setToggel] = useState(false);

  return (
    <div className="App">
      <h1 style={{ color: RandomColor }}> Infinite Color </h1>
      <div className="container">
        {box.map((ele, index) => (
          <div
            className="box"
            key={index}
            style={{ backgroundColor: ele.bg }}
            onClick={() => {
              setToggel(!toggel);
            }}
          >
            <p> {toggel ? ele.bg : index}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

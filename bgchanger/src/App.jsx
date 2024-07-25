import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-1000"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-xl">
          <button
            className="outline-none px-4 rounded-2xl text-white shadow-lg"
            style={{ backgroundColor: "red" }}
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className="outline-none px-4 rounded-2xl text-white shadow-lg"
            style={{ backgroundColor: "green" }}
            onClick={() => setColor("green")}
          >
            Greed
          </button>
          <button
            className="outline-none px-4 rounded-2xl text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
            onClick={() => setColor("blue")}
          >
            Blue
          </button>
          <button
            className="outline-none px-4 rounded-2xl text-white shadow-lg"
            style={{ backgroundColor: "black" }}
            onClick={() => setColor("black")}
          >
            Black
          </button>
          <button
            className="outline-none px-4 rounded-2xl text-white shadow-lg"
            style={{ backgroundColor: "purple" }}
            onClick={() => setColor("purple")}
          >
            Purple
          </button>
          <button
            className="outline-none px-4 rounded-2xl text-black shadow-lg"
            style={{ backgroundColor: "yellow" }}
            onClick={() => setColor("yellow")}
          >
            Yellow
          </button>
          <button
            className="outline-none px-4 rounded-2xl text-black shadow-lg"
            style={{ backgroundColor: "white" }}
            onClick={() => setColor("white")}
          >
            White
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

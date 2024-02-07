import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numAllowed, charAllowed]);

  const copy = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current.select();
  };

  useEffect(() => {
    generatePassword();
  }, [length, charAllowed, numAllowed]);

  return (
    <div className="w-full max-w-md mx-auto px-4 py-4 my-10 rounded-2xl bg-gray-700 text-orange-500	shadow-2xl d-flex justify-center text-xs">
      <h1 className="text-3xl font-bold mb-2 text-center">
        Password Generator
      </h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button
          className="text-white px-2 py-1 bg-blue-700 outline-none shrink-0"
          onClick={copy}
        >
          Copy
        </button>
      </div>
      <div className="flex flex-wrap text-sm gap-x-2">
        {/* range */}
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            min={8}
            max={20}
            className="cursor-pointer"
            name=""
          />
          <label>Length : {length}</label>
        </div>
        {/* numbers */}
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numAllowed}
            onChange={() => {
              setNumAllowed((prev) => !prev);
            }}
          />
          <label>Number</label>
        </div>
        {/* characters */}
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />
          <label>Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;

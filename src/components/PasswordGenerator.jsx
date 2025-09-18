import { useState, useCallback, useEffect, useRef } from "react";

const PasswordGenerator = () => {
  const [Length, setLength] = useState(8);
  const [NumberAllowed, setNumberAllowed] = useState(false);
  const [SpecialChar, setSpecialChar] = useState(false);
  const [Password, setPassword] = useState("");

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (NumberAllowed) str += "0123456789";
    if (SpecialChar) str += "!@#$%^&*()_+";

    for (let i = 1; i <= Length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [Length, NumberAllowed, SpecialChar]);

  useEffect(() => {
    generatePassword();
  }, [Length, NumberAllowed, SpecialChar, generatePassword]);

  const PasswordRef = useRef(null);

  const CopyPasswordToClipboard = useCallback(() => {
    navigator.clipboard.writeText(Password);
    PasswordRef.current?.select();
  }, [Password]);

  return (
    <div className="w-full max-w-lg mx-auto shadow-xl rounded-xl px-8 py-8 my-12 bg-white border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
      <h1 className="text-gray-900 text-center text-3xl font-bold my-6 tracking-tight">Generate Your Password</h1>
      <div className="flex shadow-lg rounded-xl overflow-hidden mb-8 bg-gray-50 border border-gray-200">
        <input
          type="text"
          value={Password}
          className="outline-none w-full py-4 px-6 text-gray-800 font-mono text-lg bg-transparent"
          placeholder="Your secure password"
          readOnly
          ref={PasswordRef}
        />
        <button onClick={CopyPasswordToClipboard} className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white py-4 px-6 shrink-0 font-semibold transition-all duration-200 hover:shadow-lg">
          Copy
        </button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 text-gray-700">
        <div className="flex flex-col items-center gap-2">
          <label className="text-sm font-medium">Length: {Length}</label>
          <input
            type="range"
            min={6}
            max={20}
            value={Length}
            className="cursor-pointer w-full h-2 bg-gray-200 rounded-lg appearance-none"
            onChange={(e) => setLength(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={NumberAllowed}
            onChange={() => setNumberAllowed((prev) => !prev)}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
          />
          <label className="text-sm font-medium">Include Numbers</label>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={SpecialChar}
            onChange={() => setSpecialChar((prev) => !prev)}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
          />
          <label className="text-sm font-medium">Special Characters</label>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;
import { useState, useEffect } from "react";

export const ChangeButton = ({ func, children }) => {
  return (
    <button
      className="p-0 border border-gray-800 rounded aspect-square w-12"
      onClick={func}
    >
      {children}
    </button>
  );
};

export default function NameChange() {
  const [name, setName] = useState({
    firstName: "",
    lastName: "",
  });

  const handleFirstName = (firstName) => {
    setName((prev) => ({ ...prev, firstName }));
  };

  const handleLastName = (lastName) => {
    setName((prev) => ({ ...prev, lastName }));
  };

  useEffect(() => {
    console.log("useEffectが実行されました");
  }, [name.firstName, name.lastName]);

  return (
    <div className="App">
      <h1>Learn useEffect</h1>
      <h2>Name:{`${name.firstName} ${name.lastName}`}</h2>
      <div className="grid grid-cols-2 w-max gap-x-2">
        <ChangeButton func={() => handleFirstName("John")}>John</ChangeButton>
        <ChangeButton func={() => handleLastName("Joe")}>Joe</ChangeButton>
      </div>
    </div>
  );
}

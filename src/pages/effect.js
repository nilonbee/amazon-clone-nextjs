import React, { useEffect, useState } from "react";
import ForExample from "../components/Example";

function effect() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  

  const handleName = (e) => {
    const { value } = e.target;

    setName(value);
  };

  const handleAge = (e) => {
    const { value } = e.target;

    setAge(value);
  };

  useEffect(() => {
    console.log("effect");
    console.log({
      name,
      age,
    });

    return () => {
      console.log("cleaned up");
      console.log({
        name,
        age,
      });
    };
  }, [age]);

  return (
    <div>
      <form className="flex items-center bg-yello-200 w-full mx-auto">
        <input onChange={handleName} value={name} type='text' />
        <input onChange={handleAge} value={age} type="text" />
      </form>
      <h1>
        {name}
      </h1>
      <h1>
        {age}
      </h1>
    </div>
  );
}

export default effect;

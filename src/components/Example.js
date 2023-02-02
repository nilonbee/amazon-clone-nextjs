import react, { useState, useEffect } from "react";

export default function ForExample() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    console.log("effect");
    console.log({
      name,
      username,
    });

    return () => {
      console.log("cleaned up");
      console.log({
        name,
        username,
      });
    };
  }, [username]);

  const handleName = (e) => {
    const { value } = e.target;

    setName(value);
  };

  const handleUsername = (e) => {
    const { value } = e.target;

    setUsername(value);
  };

  return (
    <div className="flex center-items bg-yellow-500 w-full ">
      <div>
        <input value={name} onChange={handleName} />
        <input value={username} onChange={handleUsername} />
      </div>
      <div>
        <div>
          <h1>{name}</h1>
        </div>
        <div>
          <h1>{username}</h1>
        </div>
      </div>
    </div>
  );
}

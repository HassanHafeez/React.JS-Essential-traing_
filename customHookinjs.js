import { useState } from "react";

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  return [
    {
      value,
      onChange: (e) => setValue(e.target.value)
    },
    () => setValue(initialValue)
  ];
};

const ManagingState4 = () => {
  const [titleProps, resetTitle] = useInput("");
  const [color, setColor] = useState("#000000");

  const submit = (e) => {
    e.preventDefault();
    alert(`${titleProps.value}: ${color}`);

    resetTitle();
    setColor("#000000");
  };

  return (
    <>
      <hr />
      <p>This is custom hook!</p>
      <form onSubmit={submit}>
        <input
          {...titleProps}
          placeholder="Enter title"
        />
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <button type="submit">ADD</button>
      </form>
      <hr />
      <hr />
    </>
  );
}

export default ManagingState4;


/*
CUSTOM HOOK:

always start with key work use. useInput().
-------------------------------------------

for the following code
{
  value: "",  // the current state of the input value
  onChange: (e) => setValue(e.target.value)  // function to update the state
}
  
use can use...
With ... SPREAD the code is
 <input
  {...titleProps}  // Spreading titleProps here
  placeholder="Enter title"
  />

Without Spread the cod eis

<input
  value={titleProps.value}
  onChange={titleProps.onChange}
  placeholder="Enter title"
/>


*/

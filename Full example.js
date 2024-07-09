// The condition if(data) in your code is checking if the data variable is truthy. 
// If data is truthy, it will render a <pre> element that contains a pretty-printed JSON string representation of the data.

// Explanation:
// Truthy Check:

// The condition if(data) checks whether data is truthy. In JavaScript, the following values are considered falsy:
// false
// 0
// "" (empty string)
// null
// undefined
// NaN
// Any other value (including non-empty objects, arrays, and non-zero numbers) is considered truthy.
// Rendering JSON:

// If data is truthy, it returns a JSX expression:
// jsx
// Copy code
// <pre>{JSON.stringify(data, null, 3)}</pre>
// JSON.stringify(data, null, 3) converts the data object to a JSON string with a 3-space indentation for pretty printing.
// The <pre> tag is used to display preformatted text. It preserves both spaces and line breaks, making it suitable for displaying code or JSON data in a readable format.
// Example:
// Let's assume data is an object like this:

// js
// Copy code
// const data = {
//   name: "John Doe",
//   age: 30,
//   address: {
//     city: "New York",
//     state: "NY"
//   }
// };
// If data is truthy, the rendered output will be:

// html
// Copy code
// <pre>
// {
//    "name": "John Doe",
//    "age": 30,
//    "address": {
//       "city": "New York",
//       "state": "NY"
//    }
// }
// </pre>
// Full Example in Context:
// Here’s a complete example including the conditional rendering:

// jsx
// Copy code
// import React, { useState, useEffect } from 'react';

// const DataDisplay = () => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     // Simulate fetching data
//     setTimeout(() => {
//       setData({
//         name: "John Doe",
//         age: 30,
//         address: {
//           city: "New York",
//           state: "NY"
//         }
//       });
//     }, 1000);
//   }, []);

//   if (data) {
//     return (
//       <pre>{JSON.stringify(data, null, 3)}</pre>
//     );
//   }

//   return <div>Loading...</div>;
// }

// export default DataDisplay;
// In this example:

// Initially, data is null.
// After 1 second, data is set to an object.
// When data becomes truthy, it renders the JSON representation of data inside a <pre> element.
// If data is falsy (before the timeout completes), it renders "Loading...".

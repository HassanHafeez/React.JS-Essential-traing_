import { useReducer, useState } from "react";

function managingState2(){
    // const [checked, setChecked] = useState(false);
    const reducer = (checked) => !checked;
    const [checked, toggleChecked] = useReducer(reducer, false);


    return(
        <>
        <p>This is useReducer</p>
        <input
            type="checkbox"
            value={checked} 
            onChange={toggleChecked}
            // use this UseState
            // onChange={()=>
            //     setChecked((checked)=> !checked)}

        />
        <label>{checked ? "Checked" : "Not Checked"} </label>
        </>
    )

}
export default managingState2;


/*
useReducer: 
takes two arguments
 the 1st is function (use to update our State...)
 and 2nd is

*/

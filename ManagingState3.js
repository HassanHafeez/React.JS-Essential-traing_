//Form handling with useRef
import { useRef } from "react";

function ManagingState3() {
    const txtTitle = useRef();
    const hexColor = useRef();   
    
    const submit = (e) => {
        e.preventDefault(); // Prevents default form submission
        // console.log("Title:", txtTitle.current.value); // Accesses the value of txtTitle
        // console.log("Color:", hexColor.current.value); // Accesses the value of hexColor (color in hex format)

        const Title=txtTitle.current.value;
        const color=hexColor.current.value;

        alert(`${Title}:${color}`);
        
        txtTitle.current.value="";
        hexColor.current.value="";
    };

    return (
        <>
            <p>This is useRef</p>
            <form onSubmit={submit}>
                <input 
                    ref={txtTitle}
                    type="text"
                    placeholder="color title"
                />
                <input
                    ref={hexColor}
                    type="color"
                />
                <button type="submit">ADD</button>
            </form>
        </>
    );
}

export default ManagingState3;




/*   //rnfe
    const manageState=()>{
        return(
        )
    }
useRef:

as being a hook that us going to reach out to some sort of UI element and get its value.


*/

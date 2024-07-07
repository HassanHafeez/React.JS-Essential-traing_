import './index.css'
import {useState,useEffect} from "react";

function ManagingState()
{   

    const [emotion, setEmotion]=useState("?");
    const [secondary,setSecondary]=useState("?");

    useEffect(()=>{
        console.log(`It's is useEffect & i'm ${emotion} right now!`)
        },[emotion]);
    
        useEffect(()=>{
            console.log(`It's is useEffect & i'm ${secondary} right now!`)
            },[secondary]);    

    return(
        <>
            <p>This is State.</p>
            <p>Current State: {emotion} </p>
            {/* Happy */}
            <button
                onClick={()=>setEmotion("😃")} 
                className="button-happy">
                
                HAPPY
             </button>

            {/* Sad */}
            <button
                onClick={()=>setEmotion("😔")} 
                className="button-sad">
                
                SAD
            </button>
            <hr/>
            <p>Secondary Mood: {secondary} </p>
            <button
            onClick={()=>setSecondary("🤕")}
                className="button-sad">
                
                SAR DARD
            </button>  
            <button
                onClick={()=>setSecondary("🤯")} 
                className="button-happy">
                
                BALAH BALAH
             </button>

        </>    
        );
}

export default ManagingState;

/* 

1. Simple
const Cities=["Lahore", "Islamabad", "karachi", "Gilgit"];
console.log(Cities[0]);
console.log(Cities[1]);

2. State
const [firstCity, secondCity]=["karachi", "Lahore", "Islamabad", "Gilgit"];
console.log(firstCity);
console.log(secondCity);

3. Import useState, then initialize it as function
--------------------------------------------------------------------------

// -----------------STATE NOTES:----------------------//
const myState=useState();
    console.log(myState);

This console log print: A Array having two values (undeined Value and a function)

=> 1. Value is undefined,
(This is State value Currently, when we run the app 1st time)

Example# 
const myState=useState("happy");
console.log(myState); 
this will print Happy as a 1st value

=> 2.  This Value is a Function
(the is used to update the state)

function ManagingState()
{   

    const [emotion, setEmotion]=useState("?");

    return(
        <>
            <p>This is State.</p>
            <p>Current State: {emotion} </p>
            
            <button
                onClick={()=>setEmotion("Happy Happy Happy😃")} 
                className="button-happy">
                
                HAPPY
             </button>

           
            <button
                onClick={()=>setEmotion("Dukhi Atama 😔")} 
                className="button-sad">
                
                SAD
             </button>
        </>    
        );
}
-------------------------------------------------------------
2.  Use-EFFECT

Use-EFFECT is use to manage side effects,
that are related to a components render.
e.g. thing line console messages, loading data, working with Animation are benefits from useEffect.

import and use it in as a funtion.
useEffect(()=>{
    console.log(`It's is useEffect & i'm ${emotion} right now!`)
    })
See the Ans in Console...

useEffect Hook actually takes into Arguments...
    => 1st is:
        Function that going to be called whenever we want our effect to happen.
    => 2nd is:
        When the effect is Actually being called.
        we will passed into this an empty array.

    useEffect(()=>{ This is 1st one },[This is 2nd one]);

    if pass in empty array this is that the effect will not happen,
     => this is depency Array
            We can use it to define when this should be called,

            if want to change the effect then pass a value in it...
*/

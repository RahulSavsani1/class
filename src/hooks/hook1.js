import { useState } from "react";

const Myhook1 = () => {
    let citylist = ["bangalore", "mumbai", "pune", "chennai"];
    const[bangalore,mumbai,c,d] = citylist;

    // console.log( useState())  //[undefined,f]
    // let [abc,xyz]=[undefined,f];
    // abc = undefined
    // xyz = f
    
    let[counter,updateCounter] = useState(1000);
    let[msg,updatemsg] = useState("");
    // let[user,updateuser]= useState(['Alex', 'Ganesh', 'Ravi', 'Mohit', 'Sam']);

    const one = () => {
        updateCounter(counter+10)
        updatemsg("The counter is increased : " + counter)
    }
    const two = () => {
        updatemsg(counter-5)
        updatemsg("The counter is decreased : " + counter)
    }
    // let rate = 10;
    return(
        <div className="container">
            <h1> How to use useState() Hooks and what is state Management</h1>
            <p> {citylist[0]} </p>
            <p> {bangalore} </p>
            <p> {mumbai} </p>
            <p> {c} </p>
            <p> {d} </p>
            <h1> The counter is : {counter} </h1>
            <button onClick={one}> Click To + by 10 </button>
            <button onClick={two}> Click To - by 5 </button>
            
            <h2> {msg} </h2>
{/*         
            <p> {rate * counter} </p>
            <p> {rate * counter + 50} </p>
            <p> {rate * 50 + counter} </p> */}

            {/* {
                user.map((name,index) => {
                    return(
                        <p key={index}> {name} </p>
                    )
                })
            } */}
        </div>
    )
}

export default Myhook1;
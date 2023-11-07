import { useState, useEffect } from "react";

const MyApi1 = () => {
    let [citylist, updatecity] = useState([]);

    const getCity = () => {
        fetch("city.json")
        .then(response => response.json())
        .then(cityArray => {
            updatecity(cityArray)
        })
    }

    let [itemlist, updateitem] = useState([]);
    useEffect(()=>{
        getitem();    
    })
    const getitem = () => {
        fetch("item.json")
        .then(response => response.json())
        .then(itemArray => {
            updateitem(itemArray)
        })
    }
    return(
        <div className="container">
            <h1 align='center'> React fetch(), useState() example </h1>
            <button onClick={getCity}> Load City </button>
            <fieldset>
                <legend> Total City : {citylist.length} </legend>
                {
                    citylist.map((cityname,index)=>{
                        return(
                            <p key={index}> {cityname} </p>
                        )
                    })
                }
            </fieldset>
            <fieldset>
                <legend> Total Items : {itemlist.length} </legend>
                {
                    itemlist.map((itemname,index)=>{
                        return(
                            <p key={index}> {itemname} </p>
                        )
                    })
                }
            </fieldset>
        </div>
    )
}

export default MyApi1;
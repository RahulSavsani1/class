import React from "react";

function Myitem (){
    let allitem = [
        { name: "Apple", price: "300", qty: "100", seller: "Amlesh"},
        { name: "Banana", price: "400", qty: "400", seller: "Khirod"},
        { name: "Mango", price: "500", qty: "300", seller: "Rahul"},
        { name: "Watermelon", price: "300", qty: "50", seller: "Swarno"},
        { name: "Orange", price: "200", qty: "200", seller: "Pratik"}
    ];
    return(
        <div className="container">
            <h1> Item List : {allitem.length} </h1>
            <table className="myTable">
                <thead>
                    <tr>
                        <th> Item Name </th>
                        <th> Item Price </th>
                        <th> Item Quantity </th>
                        <th> Item Seller </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allitem.map((item,index)=>{
                            return(
                                <tr key={index}>
                                    <td> {item.name} </td>
                                    <td> {item.price} </td>
                                    <td> {item.qty} </td>
                                    <td> {item.seller} </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Myitem;
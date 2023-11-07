import React, { useState } from 'react'
import Myhook5 from './hook5';

const Myhook4 = () => {
    let temp = { name: "Apple", price: 200, qty: 10, seller: "khirodjr" };

    let [itemlist, updateItem] = useState([temp]);
    let [itemname, pickName] = useState("");
    let [itemPrice, pickPrice] = useState("")
    let [itemQty, pickQty] = useState("")
    let [itemSeller, pickSeller] = useState("")

    const save = () => {
        // alert(itemname+ itemPrice + itemQty+ itemSeller)
        let newitem = { name: itemname, price: itemPrice, qty: itemQty, seller: itemSeller };
        updateItem(itemlist = [...itemlist, newitem])
        pickName("")
        pickPrice("")
        pickQty("")
        pickSeller("")
    }
    // const delitem = (index) => {
    //     itemlist.splice(index, 1)
    //     updateItem(itemlist = [...itemlist])
    // }
    return (
        <div className='container'>
            <h1 align='center'> Props in react </h1>
            <table cellPadding="15" align="center">
                <tbody>
                    <tr>
                        <td>Item Name</td>
                        <td><input type="text" onChange={obj => pickName(obj.target.value)} value={itemname} /></td>
                    </tr>
                    <tr>
                        <td>Item Price</td>
                        <td><input type="number" onChange={obj => pickPrice(obj.target.value)} value={itemPrice}/></td>
                    </tr>
                    <tr>
                        <td>Item Quantity</td>
                        <td><input type="number" onChange={obj => pickQty(obj.target.value)} value={itemQty}/></td>
                    </tr>
                    <tr>
                        <td>Seller Name</td>
                        <td><input type="text" onChange={obj => pickSeller(obj.target.value)} value={itemSeller}/></td>
                    </tr>
                    <tr>
                        <td align="center" colSpan="2">
                            <button onClick={save}>Save Item</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <h2 align='center'> Available Items : {itemlist.length} </h2>

            {
                itemlist.map((item, index) => {
                    return (
                        <Myhook5
                            key={index}
                            productName={item.name}
                            productPrice={item.price}
                            productQty={item.qty}
                            productSeller={item.seller}
                        />
                    )
                })
            }
        </div>
    )
}

export default Myhook4;
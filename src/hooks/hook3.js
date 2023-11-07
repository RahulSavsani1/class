import React,{useState} from 'react'

const Myhook3 = () => {
    let temp = {name:"Apple",price:200,qty:10,seller:"khirodjr"};
    
    let[itemlist, updateItem] = useState([temp]);
    let[itemname, pickName] = useState("");
    let[itemPrice,pickPrice] = useState("") 
    let[itemQty,pickQty] = useState("") 
    let[itemSeller,pickSeller] = useState("") 

    const save = ()  => {
        // alert(itemname+ itemPrice + itemQty+ itemSeller)
        let newitem = {name:itemname,price:itemPrice,qty:itemQty,seller:itemSeller};
        updateItem(itemlist = [...itemlist, newitem])
    }
    const delitem = (index) => {
        itemlist.splice(index,1)
        updateItem(itemlist = [...itemlist])
    }
  return (
    <div className='container'>
        <h1>Array of object - Add, List,Delete using [...]spread operator </h1>
            <table cellPadding="15" align="left">
                <tbody>
                    <tr>
                        <td>Item Name</td>
                        <td><input type="text" onChange={obj=>pickName(obj.target.value)}/></td>
                    </tr>
                    <tr>
                        <td>Item Price</td>
                        <td><input type="number" onChange={obj=>pickPrice(obj.target.value)}/></td>
                    </tr>
                    <tr>
                        <td>Item Quantity</td>
                        <td><input type="number" onChange={obj=>pickQty(obj.target.value)}/></td>
                    </tr>
                    <tr>
                        <td>Seller Name</td>
                        <td><input type="text" onChange={obj=>pickSeller(obj.target.value)}/></td>
                    </tr>
                    <tr>
                        <td align="center" colSpan="2">
                            <button onClick={save}>Save Item</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <table cellPadding="15" align="right">
            <thead>
                <tr>
                    <th>Item Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Seller</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    itemlist.map((item,index)=>{
                        return(
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.qty}</td>
                                <td>{item.seller}</td>
                                <td>
                                    <button onClick={delitem.bind(this,index)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default Myhook3;

import React from 'react'

const Myhook5 = (iteminfo) => {
    return (
        <fieldset>
            <legend> {iteminfo.productName} </legend>
            <p> Rs. : {iteminfo.productPrice} </p>
            <p> instock : {iteminfo.productQty} </p>
            <p> Seller : {iteminfo.productSeller} </p> 

        </fieldset>
    )
}

export default Myhook5;
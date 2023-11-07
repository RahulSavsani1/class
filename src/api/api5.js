import { useState, useEffect } from "react";

const MyApi5 = () => {
    let [userlist, updateUser] = useState([])

    const getuser = () => {
        fetch("http://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(userArray => {
            updateUser(userArray);
            updateInfo(userArray[0])
        })
    }

    useEffect(() => {
        getuser();
    }, [])

    let temp = {
        
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
            "address": {
              "street": "Kulas Light",
              "suite": "Apt. 556",
              "city": "Gwenborough",
              "zipcode": "92998-3874",
              "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
              }
            },
            "phone": "1-770-736-8031 x56442",
            "website": "hildegard.org",
            "company": {
              "name": "Romaguera-Crona",
              "catchPhrase": "Multi-layered client-server neural-net",
              "bs": "harness real-time e-markets"
            }
    }

    let [fullinfo, updateInfo] = useState( temp );
    const getDetails = (userinfo) => {
        updateInfo(userinfo)
    }

    return (
        <div className="container">
            <h1 align='center'> User List : {userlist.length} </h1>
            <table align="left" cellPadding="10">
                <thead>
                    <tr>
                        <th> Full Name </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userlist.map((user, index) => {
                            return (
                                <tr key={index}>
                                    <td onClick={getDetails.bind(this, user)}> {user.name} </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <table align="right" cellPadding="20">
                <tbody>
                    <tr>
                        <td colSpan="2"> {fullinfo.name} </td>
                    </tr>

                    <tr> <td> User ID </td> <td> {fullinfo.id} </td> </tr>
                    <tr> <td> User Name </td> <td> {fullinfo.username} </td> </tr>
                    <tr> <td> Email </td> <td> {fullinfo.email} </td> </tr>
                    <tr> <td> Phone </td> <td> {fullinfo.phone} </td> </tr>
                    <tr> <td> Website </td> <td> {fullinfo.website} </td> </tr>
                    <tr> <td> City </td> <td> {fullinfo.address.city} </td> </tr>
                    <tr> <td> Street </td> <td> {fullinfo.address.street} </td> </tr>
                    <tr> <td> Suite </td> <td> {fullinfo.address.suite} </td> </tr>
                    <tr> <td> Zipcode </td> <td> {fullinfo.address.zipcode} </td> </tr>
                    <tr> <td> GEO lat </td> <td> {fullinfo.address.geo.lat} </td> </tr>
                    <tr> <td> GEO lng </td> <td> {fullinfo.address.geo.lng} </td> </tr>

                </tbody>
            </table>
        </div>
    )
}

export default MyApi5;
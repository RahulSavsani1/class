import { useState, useEffect } from "react";

const MyApi4 = () => {
    let [userlist, updateUser] = useState([])

    const getuser = () => {
        fetch("http://localhost:1234/user")
            .then(response => response.json())
            .then(userArray => {
                updateUser(userArray);
                updateInfo(userArray[0])
            })
    }

    useEffect(() => {
        getuser();
    }, [])

    let [fullinfo, updateInfo] = useState({});
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
                        <td colSpan="2"> <h1> {fullinfo.name} </h1> </td>
                    </tr>

                    <tr> <td> User ID </td> <td> {fullinfo.id} </td> </tr>
                    <tr> <td> Age </td> <td> {fullinfo.age} </td> </tr>
                    <tr> <td> Education </td> <td> {fullinfo.edu} </td> </tr>
                    <tr> <td> City </td> <td> {fullinfo.city} </td> </tr>
                </tbody>
            </table>
        </div>
    )
}

export default MyApi4;
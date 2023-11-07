import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";

const MyApi3 = () => {
    let [userlist, updateUser] = useState([])

    const getuser = () => {
        fetch("http://localhost:1234/user")
        .then(response => response.json())
        .then(userArray => {
            updateUser(userArray);
        })
    }

    useEffect(() => {
        getuser();
    }, [])

    const deleteuser = (id,name) => {
        let url = "http://localhost:1234/user/"+id;
        let postdata= {
            'method':"delete"
        }
        fetch(url, postdata)
        .then(response => response.json())
        .then(emptyresponse => {
            swal(name, "Deleted Successfully...", "success")
            getuser()
        })
    }
    return(
        <div className="container">
            <h1 align='center'> User List : {userlist.length} </h1>
            <p>
                <Link to="/newuser"> Add User </Link>
            </p>
            <table className="mytable">
                <thead>
                    <tr>
                        <th> User Id </th>
                        <th> Full Name </th>
                        <th> Age </th>
                        <th> Education </th>
                        <th> City </th>
                        <th> Edit </th>
                        <th> Delete </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userlist.map((user,index) => {
                            return(
                                <tr key={index}>
                                    <td> {user.id} </td>
                                    <td> {user.name} </td>
                                    <td> {user.age} </td>
                                    <td> {user.edu} </td>
                                    <td> {user.city} </td>
                                    <td> <Link to={`/edituser/${user.id}`}> Edit </Link> </td>
                                    <td> <button onClick={deleteuser.bind(this, user.id,user.name)}> Delete </button> </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default MyApi3;
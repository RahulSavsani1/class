import { useState, useEffect } from "react";
import swal from "sweetalert";
import { useParams } from "react-router-dom";

const EditMyUser = () => {
    let {userid} = useParams()

    let [fullname,pickName] = useState("")
    let [age,pickAge] = useState("")
    let [education,pickEdu] = useState("")
    let [cityname,pickCity] = useState("")

    const getinfo = () => {
        let url = "http://localhost:1234/user/"+userid;
        fetch(url)
        .then(response=>response.json())
        .then(userinfo=>{
            pickName(userinfo.name)
            pickAge(userinfo.age)
            pickEdu(userinfo.edu)
            pickCity(userinfo.city)
        })
    }
    useEffect(() => {
        getinfo();
    }, [])

    const save = () => {
        let url = "http://localhost:1234/user/"+userid

        let newuser= {
            "name":fullname,
            "city":cityname,
            "age":age,
            "edu":education
        }

        let postdata = {
            headers:{'Content-Type':'application/json'},
            method:'PUT',
            body:JSON.stringify(newuser)
        }
        fetch(url,postdata)
        .then(response=>response.json())
        .then(userInfo=>{
            swal(fullname,"Updated Successfully...","Success")

            pickName("")
            pickAge("")
            pickEdu("")
            pickCity("")

            window.location.href="#api3"
        })

    }

    return(
        <div className="container">
            <h1> Read user id : {userid}</h1>
            <table align="center">
                <thead>
                    <tr>
                        <th> Full Name </th>
                        <td> <input type="text" onChange={obj=>pickName(obj.target.value)} value={fullname}/> </td>
                    </tr>
                    <tr>
                        <th> Age </th>
                        <td> <input type="text" onChange={obj=>pickAge(obj.target.value)} value={age}/> </td>
                    </tr>
                    <tr>
                        <th> Education </th>
                        <td> <input type="text" onChange={obj=>pickEdu(obj.target.value)} value={education}/> </td>
                    </tr>
                    <tr>
                        <th> City </th>
                        <td> <input type="text" onChange={obj=>pickCity(obj.target.value)} value={cityname}/> </td>
                    </tr>
                    <tr>
                        <td colspan="2" align="center"> 
                            <button onClick={save}> Update User </button>
                        </td>
                    </tr>
                </thead>
            </table>
        </div>
    )
}   

export default EditMyUser
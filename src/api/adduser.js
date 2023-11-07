import { useState } from "react";
import swal from "sweetalert";

const NewUser = () => {
    let [fullname,pickName] = useState("")
    let [age,pickAge] = useState("")
    let [education,pickEdu] = useState("")
    let [cityname,pickCity] = useState("")

    const save = () => {
        let url = "http://localhost:1234/user"

        let newuser= {
            "name":fullname,
            "city":cityname,
            "age":age,
            "edu":education
        }

        let postdata = {
            headers:{'Content-Type':'application/json'},
            method:'POST',
            body:JSON.stringify(newuser)
        }
        fetch(url,postdata)
        .then(response=>response.json())
        .then(userInfo=>{
            swal(fullname,"Added Successfully...","Success")

            pickName("")
            pickAge("")
            pickEdu("")
            pickCity("")

            window.location.href="#api3"
        })

    }
    return(
        <div className="container">
            <h1 align='center'> Enter User Details </h1>
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
                            <button onClick={save}> Save User </button>
                        </td>
                    </tr>
                </thead>
            </table>
        </div>
    )
}

export default NewUser;
import {useState} from 'react'

const Myhook2 = () => {
    let [booklist, updateBook] = useState(["html", "css", "node", "php", "java"])
    let [msg, updatemsg] = useState("")
    let [newbook, pickbook] = useState("")

    const save = () => {
        updateBook(booklist = [...booklist,newbook])
        updatemsg(newbook + " Added Successfully !")
        
    }
    const delbook = (index, name) => {
        booklist.splice(index,1)
        updateBook(booklist = [...booklist])
        updatemsg(name + " Deleted Successfully !")
    }
  return (
    <div className='container'>
        <h1> useState(), [...]spread operator example </h1>
        <p> Book is : {newbook} </p>
        <p> Enter Book Name : <input type='text' onChange={ xyz => pickbook(xyz.target.value)}/>
            <button onClick={save}> Save Book </button>
        </p>
        <p align='center'>
            {msg}
        </p>
        {
            booklist.map((bookname,index)=>{
                return(
                    <p key={index} className='four'> {bookname}
                        <br/>
                        <button onClick={ delbook.bind(this, index, bookname) }> Delete </button>
                    </p>
                )
            })
        }
    </div>
  )
}

export default Myhook2;

import React from 'react'

const Booklist = () => {
  let booklist = ["HTML", "CSS", "Bootstrap", "React", "Node", "MongoDB", "MySql", "PHP"];
  return (
    <div className="container">
        <h1> Manage Books : { booklist.length} </h1>
        {
          booklist.map((bookname,index) => {
            return(
              <p key={index} className='four'> {index} # {bookname} </p>
            )
          })
        }
    </div>
  )
}

export default Booklist;
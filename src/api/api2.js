import { useState, useEffect } from "react";

const MyApi2 = () => {
    let [bloglist,updateblog] = useState([])

    const getblog = () => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(blogArray => {
            updateblog(blogArray)
        })
    }
    useEffect(() => {
        getblog()
    }, [])

    return(
        <div className="container">
            <h1 align="center"> Recent Blogs : {bloglist.length} </h1>
            {
                bloglist.map((blog,index) => {
                    return(
                        <div className="two" key={index}>
                            <h3> {blog.title} </h3>
                            <p> {blog.body} </p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default MyApi2;
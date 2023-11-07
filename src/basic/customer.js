import React from 'react'

const Customerlist = () =>{
  let allcustomer = [
    { 
      city: "Bangalore", 
      user:['Rahul', 'Amlesh', 'Pratik']
    },
    { 
      city: "Mumbai", 
      user:['Pritam', 'Abani', 'Khirod', 'Paplu']
    },
    { 
      city: "Pune", 
      user:['Swarno', 'Dalla']
    },
    { 
      city: "Chennai", 
      user:['Hi', 'Hlo', 'How Are You', 'fine']
    },
  ];
  return (
    <div className="container">
        <h1> Customer List : {allcustomer.length} </h1>
        {
          allcustomer.map((customer,index)=> {
            return(
              <fieldset key={index}>
                <legend> {customer.city} </legend>
                {
                  customer.user.map((fullname,index2)=> {
                    return(
                      <p key={index2}> {fullname} </p>
                    )
                  })
                }
              </fieldset>
            )
          })
        }

    </div>
  )
}

export default Customerlist;

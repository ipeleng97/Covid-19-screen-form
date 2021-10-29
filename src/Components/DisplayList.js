import React, { useState } from 'react';

function DisplayList(props) {
  function handleDelete(id){
    props.Delete(id)
  }
  return(
    <div className="container bg-dark mb-2 ml-2">
      <div className="row">
        {props.data.map(item=>(
          <div className="col-sm-6 mt-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h6 key={item.FirstName}>FirstName:{item.FirstName}</h6>
                <h6 key={item.LastName}>LastName:{item.LastName}</h6>
                <h6 key={item.ID}>ID:{item.ID}</h6>
                <h6 key={item.Address}>Address:{item.Address}</h6>
                <h6 key={item.PhoneNumber}>PhoneNumber:{item.PhoneNumber}</h6>
                <h6 key={item.Temperture}>Temperture:{item.Temperture}</h6>
                <h6 key={item.radio}>Have you been in close contact with anyone who has tested positive for Covid-19?:{item.radio}</h6>
                <h6 key={item.radio}>Have you been tested positive for Covid-19 in the past 14 days?:{item.radio}</h6>
                <h6 key={item.radio}>Which of the following symtoms do you have?</h6>
                <button
               onClick={()=>handleDelete(item.id)}
                type="button" 
                className="btn btn-success ml-10"  
               >Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DisplayList;

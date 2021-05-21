import React from 'react';

export const Question=({data})=>{
    console.log('we are in a question display')
    console.log(data)
    return(
        <>
          {
            data && data.map((d)=>{
               return(
                    <div className="container">
                        <h1>yesssssssssssssssss</h1>
                        <h4><b>{d.id_question}</b></h4> 
                        <p>{d.content_question}</p> 
                    </div>
               )
           })
          }
        </>
    )
}
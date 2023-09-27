import { useState,useEffect } from "react";


function Button(props)
{
    const [count,counter]=useState(0);
    const [text,change]=useState('')
    const [id,setid]=useState('general')
    const arry=[1,2,3,4]
  

    return(
        <>
            {count}

            <button onClick={()=>{counter(count+1)}}>{props.message}</button>
            
            <ol>{arry.map((a,i)=>{
                return(
                    
                        <li key={i}>{a}</li>
                    

                )
            })}
            </ol>
            {text}
            <input onChange={(e)=>{change(e.target.value)}}></input>
            {id}

            
            <select value={id} onChange={(e)=>setid(e.target.value)}>
                <option>'general'</option>
                <option>'travel'</option>
            </select>
            
        </>
    )
}
export default Button;
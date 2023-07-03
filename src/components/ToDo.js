import React, { useState } from 'react'
import '../index.css';

export default function ToDo() {
    const [inputlist,setInputlist]=useState("");

    const [items,setItems]=useState([]);

    let inputEvent=(event)=>{
        setInputlist(event.target.value);
    }

    let deleteItems=(id)=>{
        setItems((olditem)=>{
            return olditem.filter((arr,index)=>{
                return index!==id
            })
        })
        console.log("deleted")
    }

    let listItems=()=>{
        setItems((old)=>{
            return [...old,inputlist]
        })
         setInputlist("");
    }

    let listItemskey=(event)=>{
        if(event.keyCode===13){
            setItems((old)=>{
                return [...old,inputlist]
            })
             setInputlist("");
        }
    }
  return (
    <div className='main_div'>
        <div className='center_div'>
            <div style={{backgroundColor:"blueviolet",marginTop:"40px"}}>
            <hr/>
            <h1 style={{color:"white"}} >To Do List</h1>
            <hr/>
            </div>
            <input className='inptd'  onKeyDown={listItemskey} value={inputlist} placeholder='enter item' onChange={inputEvent}  />
            <button onClick={listItems} >+</button>

            <ol>
                {items.map((item,index)=>{
                    return (
                        <>
                        <div>
                    <li id={index} key={index}>  {item}  
                    <p onClick={()=>{
                        deleteItems(index)
                    }} style={{marginLeft:"20px", cursor:"pointer",  marginTop:"15px",color:"red"}}  >Delete </p>
                     </li> 
                    </div>
                    </>
                    )
                })}
            </ol>
        </div>
      
    </div>
  )
}

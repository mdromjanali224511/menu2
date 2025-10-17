
import React, { useEffect, useState } from 'react';
import { CiMenuFries } from "react-icons/ci";


const Fetchdata = () => {

const [add,setAdd]=useState([])

    useEffect(()=>{
        fetch("button.json")
        .then(res=>res.json())
        .then(data=>setAdd(data))
       
        
    },[])
const [open,setOpen]=useState(true)
    return (
        <div className='flex justify-between mx-10' >
           <span className='text-2xl flex gap-3' onClick={()=>setOpen(!open)}>
          <h1>Navabr</h1>
           {
           !open ? 
           <span className='md:hidden '>X </span> 
           : <span className='md:hidden' ><CiMenuFries/>
           
           
           </span> }
       
           
           </span>
            <ul className='hidden md:flex gap-5 justify-center'>
{
    add.map(menu=><li key={menu.id}>{menu.name}</li>)
}
            </ul>
            <h1>logout</h1>
        </div>
    );
};

export default Fetchdata;
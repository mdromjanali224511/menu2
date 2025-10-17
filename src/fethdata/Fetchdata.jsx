
import React, { useEffect, useState } from 'react';

const Fetchdata = () => {

const [add,setAdd]=useState([])

    useEffect(()=>{
        fetch("button.json")
        .then(res=>res.json())
        .then(data=>setAdd(data))
       
        
    },[])

    return (
        <div>
            <ul className='flex gap-5 justify-center'>
{
    add.map(menu=><li key={menu.id}>{menu.name}</li>)
}
            </ul>
        </div>
    );
};

export default Fetchdata;
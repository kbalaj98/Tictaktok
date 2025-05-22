import { useState } from "react"

export default function Player({name,symbol,isActive,nameUpdate})
{
    const[isEdit,setIsEdit] = useState(false)
    

    function updatePlayer(val)
    {
        setIsEdit(val)
    }

    function setName(tname)
    {
        nameUpdate(tname,symbol)
    }


    return <>
       <li className={isActive?"active":undefined}>
        {!isEdit && <span className='player'>
                <span className='player-name'>{name}</span>
                <span className='player-symbol'>{symbol}</span>
                <button onClick={()=>updatePlayer(true)}>Edit</button>
              </span>}
        
        {isEdit && <span className='player'>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
                <input type="text" value={symbol} disabled/>
                <button onClick={()=>updatePlayer(false)}>Save</button>
              </span>}        
        </li> 
    </>
}


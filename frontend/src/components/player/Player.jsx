import { useState } from "react"

export default function Player({name,symbol,isActive,nameUpdate})
{
    const[player,setPlayer] = useState(name)
    const[isEdit,setIsEdit] = useState(false)
    

    function updatePlayer(val)
    {
        if(val === false)
        {
            nameUpdate(symbol,player)
        }
        
        setIsEdit(val)
    }


    return <>
       <li className={isActive?"active":undefined}>
        {!isEdit && <span className='player'>
                <span className='player-name'>{player}</span>
                <span className='player-symbol'>{symbol}</span>
                <button onClick={()=>updatePlayer(true)}>Edit</button>
              </span>}
        
        {isEdit && <span className='player'>
                <input type="text" value={player} onChange={(e)=>setPlayer(e.target.value)}/>
                <input type="text" value={symbol} disabled/>
                <button onClick={()=>updatePlayer(false)}>Save</button>
              </span>}        
        </li> 
    </>
}


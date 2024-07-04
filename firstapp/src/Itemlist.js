import React from 'react'
import Lineitems from './Lineitems';

const Itemlist = ({items,handleCheck,handleDelete}) => {
  return (
    <ul>
    {items.map((item)=>(
        <Lineitems
        item={item}
        key={item.id}// Since this component is responsible for lists key have to passed along
        handleCheck={handleCheck}
        handleDelete={handleDelete}/>
      
   ) )}
  </ul>
    
  )
}

export default Itemlist
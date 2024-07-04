import React from 'react'
import {useRef} from 'react'// useRef hook is used for focus Shifting


const AddItem = ({newItem,setNewItem,handleSubmit}) => {
  const inputRef=useRef()
  return (
    <form className='addForm' action="AddItem"onSubmit={handleSubmit}>
        <label htmlFor="addItem">AddItem</label>
        <input type="text" 
        id="additem"
        autoFocus
        ref={inputRef}
        placeholder='Add Items'
        required
        value={newItem}
        onChange={(e)=>setNewItem(e.target.value)}/>

        <button type='submit'
        onClick={()=>inputRef.current.focus()}>
        {/* <FaPlus /> */}
        </button>

    </form>
  )
}

export default AddItem
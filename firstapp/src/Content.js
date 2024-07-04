import React from 'react'
import Itemlist from './Itemlist'


const Content = ({items,handleCheck,handleDelete}) => {
    // const[items,setItems]=useState([
    //      {id:'1',
    //      checked:true,
    //      item:'Define the problem'},
    //      {id:'2',
    //      checked:false,
    //      item:'Practice Coding'},
    //      {id:'3',
    //      checked:false,
    //      item:'Complete the problem'}
    //       ])
    // const[name,setName]=useState("Construct");
    // function handleNameChange(){
    //     const names=['develop','build','construct']
    //     const index=Math.floor(Math.random()*3)
    //     setName(names[index]) 
    //   }
    //   const handleClick=(e)=>{
    //     console.log(e.target.innerText)
    //   }
    //   const handleclick2=(name)=>{
    //     console.log(`hello,${name}`)
    //   }
    //   const name=()=>{
    //     console.log("hi i am raja")
    //   }
    //   const[count,setCount]=useState(99);
    //   const[personname,setPersonName]=useState(()=>name());//while calling function inside a use state it will be executed for all the usestates which is listed above so usage of anonymous function is prefferd
        // function incrementfunction(){
        //     setCount(previouscount=>previouscount+1)
        // }
        // function decrementfunction(){
        //     setCount(previouscount=>previouscount-1)
        // }
      //Understanding maps
      // const Numbers=[-2,-4,-5,6,8,9]
      // const Items=Numbers.filter(n=>n>=0).map(n=>({Number:n}))// in filter im just filtering and retuing nothing
      // console.log(Items)
      // const handlecheck=(id)=>{
      //   console.log(`id: ' ${id}`)
      // }
      // const handleCheck=(id)=>{
      //   const listitems=items.map((item)=>item.id===id
      //   ?{...item,checked:!item.checked}:item)
      //   setItems(listitems)
      //   localStorage.setItem("todo_list",JSON.stringify(listitems))
      // }

        
      
      // const handleDelete=(id)=>{//You can use the filter function to filterout the elements other than the deleted elements easily
      //  const listitems=items.filter((item)=>item.id!==id)
      //  setItems(listitems)
      //  localStorage.setIte[m("todo_list",JSON.stringify(listitems))
      // }
   



  return (
    <>
      {(items.length)?(
    
      <Itemlist 
      items={items}
      handleCheck={handleCheck}
      handleDelete={handleDelete}/>
      ):(
        <p>Your List is Empty</p>
      )
      
  }
  <img src="logo192.png" alt="nirai"/>
  </>// This is Called Fragments
  )
}

export default Content

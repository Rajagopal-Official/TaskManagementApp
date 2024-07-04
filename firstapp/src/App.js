import Content from "./Content";
import Header from "./Header";
import Footer from "./Footer";
import React, { useState,useEffect } from 'react';
import './App.css'
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";
import apiRequest from "./apiRequest";


function App() {
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
    //       ]);
          const[items,setItems]=useState([])
          const[newItem,setNewItem]=useState('');
          const API_URL='http://localhost:3500/item'
          const[fetchError,setFetchError]=useState(null)
          const[isLoading,setIsLoading]=useState(true)
          useEffect(()=>{
            // JSON.parse(localStorage.getItem("todo_list"))// From Local storage if it is loaded one time in the sense it will be enough.
            const fetchitems=async()=>{
              try{
                const response=await fetch(API_URL)
                if(!response.ok)throw Error("Data Not Received")
                const listitems=await response.json()
                console.log(listitems)   
                setItems(listitems)
                setFetchError(null)

              }
              catch(err){
              setFetchError(err.message)

              }finally{
                setIsLoading(false)
              }
            }
            setTimeout(()=>{
              (async()=>await fetchitems())()//Async Functions have to be called with async keyword only
          },2000)
            },[])
          //   (async()=>await fetchitems())()//Async Functions have to be called with async keyword only
          // },[])// UseEffect is used for not rendering everytime a particular block when it is not depend upon anything
          // if you want to render anything if the state changes you can opt useEffect
          // This use state is to get input for adding input from the user
          const[search,setSearch]=useState('')
          const addItem=async (item)=>{
           const id= items.length?items[items.length-1].id+1:1
           const addnewItem={id,checked:false,item}
           const listitems=[...items,addnewItem]
           setItems(listitems)
           
           
          
          const postOptions={//block of code which is responsibe for syncing
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(addnewItem)

          }
          const result=await apiRequest(API_URL,postOptions)
          if(result)setFetchError(result) 
        }
          
    const handleCheck=async (id)=>{
            const listitems=items.map((item)=>item.id===id
            ?{...item,checked:!item.checked}:item)
            setItems(listitems)
            const myItem=listitems.filter((item)=>item.id===id)
            const updateOptions={
              method:'PATCH',//PATCH-UPDATE
              headers:{'Content-Type':'application/json'},
              body:JSON.stringify({checked:myItem[0].checked})

            }
            const reqUrl=`${API_URL}/${id}`// While updating the url has to be sent wit id to update a particular property in a item
            const result=await apiRequest(reqUrl,updateOptions)
            if(result)setFetchError(result)

          }
    
            
          
     const handleDelete=async(id)=>{//You can use the filter function to filterout the elements other than the deleted elements easily
           const listitems=items.filter((item)=>item.id!==id)
           setItems(listitems)
           const deleteOptions={
            method:'DELETE'
           }
           const reqUrl=`${API_URL}/${id}`
           const result=await apiRequest(reqUrl,deleteOptions)
           if(result)setFetchError(result)
           
          }
          const handleSubmit=(e)=>{
            e.preventDefault()
            if(!newItem) return;
            console.log(newItem)
            addItem(newItem)
            setNewItem("")
          }


 
  return (
    <div className="App">
      <Header title="Hello Raja"/>
      <AddItem
       newItem= {newItem} 
       setNewItem={setNewItem}
       handleSubmit={handleSubmit}/>
       <SearchItem 
       search={search}
       setSearch={setSearch}/>
       <main>
        {isLoading&&<p>LoadingItems...</p>}
        {fetchError&&<p>{`Error : ${fetchError}`}</p>}
        {!isLoading &&!fetchError&&<Content 
        items={items.filter((item)=>((item.item).toLowerCase()).includes(search.toLowerCase()))}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        />}
      </main>
      <Footer
      length={items.length}/>
    </div>
  );
}



export default App;

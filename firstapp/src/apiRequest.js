const apiRequest=async (url='',optionsObj=null,errMsg=null)=>{
    try{
        const response =await fetch(url,optionsObj)
        if(!response.ok) throw Error("Please Reload App!")
        const listitems=response.json()

    }catch(error){
        errMsg=error.Message

    }finally{
        return errMsg

    }

}
export default apiRequest
import { createContext, useEffect, useState } from "react";

const API_URL=`https://www.omdbapi.com/?apikey=a82bd60b&s=titanic`


const AppContext=createContext()



const AppProvider=({children})=>{

    const [isLoading,SetIsLoading]=useState(true)
    const [movie,SetMovie]=useState([])
    const [isError,setIsError]=useState({show:false,msg:""})

    const getMovies=async(url)=>{

        try{

            const res=await fetch(url)
            const data=await res.json()
            console.log(data);

            if(data.Response==="True"){
                SetIsLoading(false)
                SetMovie(data.Search)
            }
            else{
                setIsError({
                    show:true,
                    msg:data.error
                })
            }

        }
        catch(err){
            console.log(err);
        }

    }


useEffect(()=>{
    

    getMovies(API_URL)

},[])

    return <AppContext.Provider value={{isError,isLoading,movie}}>{children}</AppContext.Provider>
};

export {AppContext,AppProvider}
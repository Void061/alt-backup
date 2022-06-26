import Router from "next/router"
import { useEffect } from "react"
export default function cat_all(){



    useEffect(() => {
        Router.push('/category/all')
    })

    
    return(
        <>
        
        </>
    )
}
import Router from "next/router"
import { useEffect } from "react"
export default function Cat_all(){



    useEffect(() => {
        Router.push('/category/all')
    })

    
    return(
        <>
        
        </>
    )
}
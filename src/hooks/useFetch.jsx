import { request } from "@/api"
import { useEffect, useState } from "react"

export const useFetch = (endpoint) => {
    const [data , setData] = useState(null)
    const [loading ,setLoading] = useState(false)
    const [error ,setError] = useState(null)

    useEffect(() => {
        setLoading(true)
        request
         .get(endpoint)
         .then(res => setData(res.data))
         .catch(err => setError(err.response.data))
         .finally(() => setLoading(false))
    }, [])
    
    return { data, loading, error }
}
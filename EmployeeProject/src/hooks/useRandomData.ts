import axios from "axios"
import { useEffect, useRef, useState } from "react"


const useRandomData = () => {

    const [data, updateData] = useState(0)
    const [error, updateError] = useState(null)
    const [isLoading, updateLoading] = useState(false)

    // to call api and update view
    const ref = useRef({})
    useEffect(() => {
        axios.get("localhost:5278/admin")
            .then((res) => {
                ref.current = res.data
                updateError(null)
            })
            .catch((err) => updateError(err.message))
            .finally(() => updateLoading(false))
        updateLoading(true)
    }, [data])

    return ({ data, error, updateData, ref, isLoading })
}

export default useRandomData
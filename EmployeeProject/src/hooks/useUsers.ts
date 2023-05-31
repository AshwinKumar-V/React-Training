import axios from "axios"
import { useEffect, useState } from "react"


const useUsers = () => {

    const [data, updateData] = useState(null)
    const [error, updateError] = useState("")
    const [isLoading, updateLoading] = useState("")

    // fetch users from backend
    useEffect(() => {
        updateLoading("Loading...")
        axios.get("http://localhost:5278/users")
            .then((res) => {
                updateData(res.data)
                updateError("")
            })
            .catch((err) => {
                updateError(err.message)
                updateData("")
            })
            .finally(() => {
                updateLoading("")
            })
    }, [])

    return ({ data, error, isLoading })
}

export default useUsers
import axios from "axios"
import { useEffect, useState } from "react"
import { client, user } from "../components/List"

const useUsers = () => {

    const [list, updateList] = useState<Array<client | user>>([])
    const [error, updateError] = useState(null)
    const [isLoading, updateLoading] = useState("")

    // fetch users from backend
    useEffect(() => {
        updateLoading("Loading...")
        axios.get("http://localhost:5278/users")
            .then((res) => {
                updateList(res.data)
                updateError(null)
            })
            .catch((err) => {
                updateError(err.message)
                updateList([])
            })
            .finally(() => {
                updateLoading("")
            })
    }, [])

    return ({ list, error, isLoading, updateList })
}

export default useUsers
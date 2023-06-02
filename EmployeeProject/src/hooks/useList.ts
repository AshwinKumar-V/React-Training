import axios from "axios"
import { useEffect, useState } from "react"
import { client, user } from "../components/List"


const useList = (listType: string) => {

    const [list, updateList] = useState<Array<client | user>>([])
    const [error, updateError] = useState(null)
    const [isLoading, updateLoading] = useState("")

    // fetch users from backend
    useEffect(() => {
        updateLoading("Loading...")
        axios.get(`${import.meta.env.VITE_BACKEND_ADDRESS}/${listType}`)
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
    }, [listType])

    return ({ list, error, isLoading })
}

export default useList
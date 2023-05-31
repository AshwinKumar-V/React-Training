import axios from "axios"
import { useEffect } from "react"

const Help = () => {

    useEffect(() => {
        axios.get("http://localhost:5278/admin")
            .then((res) => {
                console.log(res.data);

                // updateError(null)
            })
        // .catch((err) => updateError(err.message))
        // .finally(() => updateLoading(false))
        // updateLoading(true)
    }, [])

    return (
        <h1>Help</h1>
    )
}

export default Help
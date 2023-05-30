import axios from "axios"
import { useEffect, useRef, useState } from "react"

export const About = () => {

    const [data, updateData] = useState(0)
    const [error, updateError] = useState(null)

    // to call api and update view
    const ref = useRef({})
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos/" + data)
            .then((res) => {
                ref.current = res.data
                updateError(null)
            })
            .catch((err) => updateError(err.message))
    })

    return (
        <>
            <h1>About</h1>
            <button onClick={() => updateData(data + 1)}>Change</button>
            {Object.keys(ref.current).map((x) => (<h4 key={x}>{x} : {ref.current[x]}</h4>))}
            <p>{error}</p>
        </>

    )
}

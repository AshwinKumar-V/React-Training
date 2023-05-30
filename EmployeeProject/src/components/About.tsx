import axios from "axios"
import { useEffect, useRef, useState } from "react"

export const About = () => {

    const [data, updateData] = useState(1)
    const ref = useRef({})
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos/" + data)
            .then((res) => {
                ref.current = res.data
            })
            .catch((err) => console.error(err))
    })

    return (
        <>
            <h1>About</h1>
            <button onClick={() => updateData(data + 1)}>Change</button>
            {Object.keys(ref.current).map((x) => (<h4 key={x}>{x} : {ref.current[x]}</h4>))}
        </>

    )
}

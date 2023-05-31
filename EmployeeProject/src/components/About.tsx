import axios from "axios"
import { useEffect, useRef, useState } from "react"
import useRandomData from "../hooks/useRandomData"

export const About = () => {

    const { data, error, updateData, ref, isLoading } = useRandomData()

    return (
        <>
            <h1>About</h1>
            <button onClick={() => updateData(data + 1)}>Change</button>
            {isLoading ? <h4>Loading...</h4> : (error ? <p>{error}</p> : Object.keys(ref.current).map((x) => (<h4 key={x}>{x} : {ref.current[x]}</h4>)))}
        </>

    )
}

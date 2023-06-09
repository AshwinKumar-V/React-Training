import { useLocation } from "react-router-dom"

const Details = () => {

    // get client/user details passed through props
    const location = useLocation()
    const details = location.state

    return (
        <>
            <h1>Details</h1>
            <br />
            {Object.keys(details).map((x) => (<h4 key={x}>{x} : {details[x]}</h4>))}
        </>
    )
}



export default Details
import { useLocation } from "react-router-dom"

interface Props {
    type: string,
}

interface user {
    user_id: string,
    user_name: string,
    company_id: string,
    company_name: string,
    user_permission: string,
    user_type: string
}

interface client {
    client_id: string,
    client_name: string,
    client_permission: string,
    client_type: string
}

const Details = ({ type }: Props) => {

    const location = useLocation()
    const details = location.state

    return (
        <>
            {Object.keys(details).map((x) => (<h4>{x} : {details[x]}</h4>))}
        </>
    )
}



export default Details
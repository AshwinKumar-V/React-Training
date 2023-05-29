import { useNavigate } from 'react-router-dom'
import clients from '../assets/clients.json'
import users from '../assets/users.json'

interface Props {
    listType: string
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

const List = ({ listType }: Props) => {

    const naviagte = useNavigate()

    let list = null
    let path = ""
    if (listType === 'Client') {
        list = clients
        path = "/dashboard/client-details"
    }
    else if (listType === 'User') {
        list = users
        path = "/dashboard/user-details"
    }

    const showDetails = (item: any) => {
        naviagte(path, { state: item })
    }

    return (
        <>
            <h1>{listType} list</h1>
            <table className='table'>
                <thead>
                    <tr>
                        {Object.keys(list[0]).map((x, i) => (
                            <th key={i}>{x}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {list?.map((x) => (
                        <tr>
                            {Object.values(x).map((data, i) => (<td key={i}>{data}</td>))}
                            <td onClick={() => showDetails(x)}><u className='details'>Details</u></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default List
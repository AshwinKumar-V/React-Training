import { Link, useNavigate } from 'react-router-dom'
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

    const navigate = useNavigate()

    let list = null
    if (listType === 'Client') {
        list = clients
    }
    else if (listType === 'User') {
        list = users
    }

    const showDetails = (item: any) => {
        navigate(Object.values(item)[0], { state: item })
    }

    return (
        <>
            <h1>{listType} list</h1>
            {listType === 'User' ? <Link to='AddUser'>Add User</Link> : null}
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
                        <tr key={Object.values(x)[0]}>
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
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

    let list = null
    if (listType === 'Client') {
        list = clients
    }
    else if (listType === 'User') {
        list = users
    }

    return (
        <>
            <h1>{listType} list</h1>
            <table className='table'>
                <thead>
                    <tr>
                        {Object.keys(list[0]).map((x) => (
                            <th>{x}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {list?.map((x) => (
                        <tr> {Object.values(x).map((data) => (<td>{data}</td>))}</tr>
                    ))}
                </tbody>
            </table>
            {/* {list?.map((x) => (<p key={x.user_id}>x</p>))} */}
            {/* {list?.map((x) => (<p key={x.user_id}>{x.user_name}</p>))} */}
        </>
    )
}

export default List
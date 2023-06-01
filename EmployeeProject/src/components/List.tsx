import { Link, useNavigate } from 'react-router-dom'
import clients from '../assets/clients'
import { useEffect } from 'react'
import useUsers from '../hooks/useUsers'

interface Props {
    listType: string
}

export interface client {
    client_id: string,
    client_name: string,
    client_permission: string,
    client_type: string
}

export interface user {
    user_id: string,
    user_name: string,
    comapny_id: string,
    company_name: string,
    user_permission: string,
    user_type: string
}


const List = ({ listType }: Props) => {

    const navigate = useNavigate()
    const { list, error, isLoading, updateList } = useUsers()


    // check if client-list or user-list is loaded
    useEffect(() => {
        if (listType === 'Client') {
            updateList(clients)
        }
        else if (listType === 'User') {
            updateList([])
        }
    }, [])



    // redirect to client/user details page
    const showDetails = (item: client | user) => {
        navigate(Object.values(item)[0], { state: item })
    }

    return (
        <>
            <h1>{listType} list</h1>
            {listType === 'User' ? <button className='btn'><Link to='add-user'>Add User</Link></button> : null}

            {isLoading ? <h4>Loading...</h4> : (list.length == 0 ? <p>{error}</p> :
                <table className='table'>
                    <thead>
                        <tr>
                            {Object.keys(list[0]).map((x, i) => (
                                <th key={i}>{x}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {list.map((x) => (
                            <tr key={Object.values(x)[0]}>
                                {Object.values(x).map((data, i) => (<td key={i}>{data}</td>))}
                                <td onClick={() => showDetails(x)}><u className='details'>Details</u></td>
                            </tr>
                        ))}
                    </tbody>
                </table>)}
        </>
    )
}

export default List
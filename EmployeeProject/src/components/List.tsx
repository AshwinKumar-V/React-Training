import { Link, useNavigate } from 'react-router-dom'
import clients from '../assets/clients'
import useUsers from '../hooks/useUsers'
import { useEffect } from 'react'
// import users from '../assets/users'

interface Props {
    listType: string
}

const List = ({ listType }: Props) => {

    const navigate = useNavigate()
    const { data, error, isLoading } = useUsers()

    // check if client-list or user-list is loaded
    let list = null
    useEffect(() => {
        if (listType === 'Client') {
            list = clients
        }
        else if (listType === 'User' && data) {
            list = data
        }
    }, [data])



    // redirect to client/user details page
    const showDetails = (item: any) => {
        navigate(Object.values(item)[0], { state: item })
    }

    return (
        <>
            <h1>{listType} list</h1>
            {listType === 'User' ? <button className='btn'><Link to='add-user'>Add User</Link></button> : null}

            {isLoading ? <h4>Loading...</h4> : (error ? <p>{error}</p> :
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
                </table>)}
        </>
    )
}

export default List
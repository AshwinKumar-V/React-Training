import { FormEvent } from 'react'
import users from '../assets/users'
import { useNavigate } from 'react-router-dom'

export const AddUser = () => {
    const navigate = useNavigate()

    const add = (e: FormEvent) => {
        e.preventDefault()
        users.push(Object.fromEntries(new FormData(e.target).entries()))
        navigate('/dashboard/users')
    }

    return (
        <>
            <form method="post" onSubmit={add} className="flex_column">
                <h1>Add user</h1>
                <div className="mb-3">
                    <label className="form-label">User ID</label>
                    <input type="text" className="form-control" id="user_id" name="user_id" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label className="form-label">User name</label>
                    <input type="text" className="form-control" id="user_name" name="user_name" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Company ID</label>
                    <input type="text" className="form-control" id="company_id" name="company_id" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Company name</label>
                    <input type="text" className="form-control" id="company_name" name="company_name" />
                </div>
                <div className="mb-3">
                    <label className="form-label">User permission</label>
                    <input type="text" className="form-control" id="user_permission" name="user_permission" />
                </div>
                <div className="mb-3">
                    <label className="form-label">User type</label>
                    <input type="text" className="form-control" id="user_type" name="user_type" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}

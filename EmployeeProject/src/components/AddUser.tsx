import { FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export const AddUser = () => {
    const navigate = useNavigate()

    // add user data from add-user form into users array
    const add = (e: FormEvent) => {
        e.preventDefault()

        // extract form data from event
        const formData = Object.fromEntries(new FormData(e.target).entries())
        formData.userID = ""

        // post form data to backend
        axios.post(`${import.meta.env.VITE_BACKEND_ADDRESS}/users`, formData, {
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(() => console.log("Successfully added user"))
            .catch((err) => console.error(err))

        navigate('/dashboard/users')
    }

    return (
        <>
            <form method="post" onSubmit={add} className="flex_column">
                <h1>Add user</h1>
                <div className="mb-3">
                    <label className="form-label">User name</label>
                    <input type="text" className="form-control" id="user_name" name="userName" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Company ID</label>
                    <input type="text" className="form-control" id="company_id" name="companyID" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Company name</label>
                    <input type="text" className="form-control" id="company_name" name="companyName" />
                </div>
                <div className="mb-3">
                    <label className="form-label">User permission</label>
                    <input type="text" className="form-control" id="user_permission" name="userPermission" />
                </div>
                <div className="mb-3">
                    <label className="form-label">User type</label>
                    <input type="text" className="form-control" id="user_type" name="userType" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}

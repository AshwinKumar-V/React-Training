import { FormEvent, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export const AddClient = () => {

    const navigate = useNavigate()
    const clientNameRef = useRef<HTMLInputElement>(null)
    const clientPermissionRef = useRef<HTMLInputElement>(null)
    const clientTypeRef = useRef<HTMLInputElement>(null)


    // add client data from add-client form into users array
    const add = (e: FormEvent) => {
        e.preventDefault()

        // extract form data from event
        // const formData = Object.fromEntries(new FormData(e.target).entries())
        // formData.userID = ""

        const addClientForm = {
            clientID: "",
            clientName: clientNameRef.current?.value,
            clientPermission: clientPermissionRef.current?.value,
            clientType: clientTypeRef.current?.value,
        }

        // post form data to backend
        axios.post(`${import.meta.env.VITE_BACKEND_ADDRESS}/clients`, addClientForm)
            .then(() => console.log("Successfully added client"))
            .catch((err) => console.error(err))

        navigate('/dashboard/clients')
    }

    return (
        <>
            <form method="post" onSubmit={add} className="flex_column">
                <h1>Add client</h1>
                <div className="mb-3">
                    <label className="form-label">Client name</label>
                    <input type="text" ref={clientNameRef} className="form-control" id="client_name" name="clientName" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Client permission</label>
                    <input type="text" ref={clientPermissionRef} className="form-control" id="client_permission" name="clientPermission" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Client type</label>
                    <input type="text" ref={clientTypeRef} className="form-control" id="client_type" name="clientType" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}

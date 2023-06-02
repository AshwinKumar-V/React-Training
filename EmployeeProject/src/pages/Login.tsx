import { FormEvent, useEffect, useState, useRef } from "react"
import { useNavigate } from "react-router-dom"
import Alert from "../components/Alert"
import axios from "axios"

const Login = () => {

    const [alert, updateAlert] = useState(false)
    const navigate = useNavigate()

    // useEffect to focus on username textbox
    const focusRef = useRef<HTMLInputElement>(null)
    useEffect(() => {
        if (focusRef.current) {
            focusRef.current.focus()
        }
    })


    // login validation
    const login = (e: FormEvent) => {
        e.preventDefault()

        const credentials = {
            username: e.target.username.value,
            password: e.target.password.value
        }

        axios.post(`${import.meta.env.VITE_BACKEND_ADDRESS}/login`, credentials)
            .then(() => {
                localStorage.setItem("loggedIn", "true")
                localStorage.setItem("username", e.target.username.value)
                navigate('/dashboard')
            })
            .catch(() => updateAlert(true))
    }

    return (
        <>
            {alert ? <Alert alertMessage="Invalid Credentials!" /> : null}
            <form method="post" onSubmit={login} className="flex_column">
                <h1>Login</h1>
                <div className="mb-3">
                    <label className="form-label">Username</label>
                    <input ref={focusRef} type="text" data-testid="username" className="form-control" id="username" name="username" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" data-testid="password" className="form-control" id="password" name="password" />
                </div>
                <button type="submit" data-testid="submitButton" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}

export default Login

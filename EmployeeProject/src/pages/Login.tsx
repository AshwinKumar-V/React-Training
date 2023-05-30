import { FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom"
import Alert from "../components/Alert"

const Login = () => {
    // const [username, updateUsername] = useState("")
    // const [pswd, updatePswd] = useState("")
    const [alert, updateAlert] = useState(false)
    const navigate = useNavigate()

    // login validation
    const login = (e: FormEvent) => {
        e.preventDefault()
        if ((e.target.username.value === 'admin') && (e.target.password.value === 'admin')) {
            // if valid credentials
            // updateUsername(e.target.username.value)
            localStorage.setItem("loggedIn", "true")
            localStorage.setItem("username", e.target.username.value)
            navigate('/dashboard')
        }
        else {
            // if invalid credentials
            updateAlert(true)
        }
    }

    return (
        <>
            {alert ? <Alert /> : null}
            <form method="post" onSubmit={login} className="flex_column">
                <h1>Login</h1>
                <div className="mb-3">
                    <label className="form-label">Username</label>
                    <input type="text" className="form-control" id="username" name="username" aria-describedby="emailHelp" />
                    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}

export default Login
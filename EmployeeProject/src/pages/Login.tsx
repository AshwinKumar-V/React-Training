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
            <form method="post" onSubmit={login}>
                <h1>HTML Training</h1>
                <div className="form-control">
                    <label>username</label>
                    <input type="text" id="username" name="username" />
                </div>
                <div className="form-control">
                    <label>Password</label>
                    <input type="password" id="password" name="password" />
                </div>
                <input type="submit" value="Submit" />
            </form>
        </>
    )
}

export default Login
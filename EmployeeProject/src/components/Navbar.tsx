import { Link, useNavigate } from "react-router-dom"

const Navbar = () => {

    const logout = () => {
        localStorage.setItem("loggedIn", "false")
        localStorage.setItem("username", "")
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid d-flex justify-content-between">
                    <a className="navbar-brand">Navbar</a>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <Link className="nav-link active" aria-current="page" to=''>Dashboard</Link>
                        <Link className="nav-link" aria-current="page" to='client-list'>Client</Link>
                        <Link className="nav-link" aria-current="page" to='user-list'>User</Link>
                        <Link className="nav-link" aria-current="page" to='about'>About</Link>
                        <Link className="nav-link" aria-current="page" to='help'>Help</Link>
                    </ul>
                </div>
                <Link className="nav-link" aria-current="page" onClick={logout} to='/login'>Logout</Link>
            </nav>
        </>
    )
}

export default Navbar
import { Link, Outlet } from "react-router-dom"

export const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li><Link to='/'>home</Link></li>
                    <li><Link to='/About'>about</Link></li>
                    <li><Link to='/ContactUs'>contact-us</Link></li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}




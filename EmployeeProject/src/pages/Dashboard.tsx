import { Outlet, useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar"
import { useEffect } from "react"

const Dashboard = () => {

    const navigate = useNavigate()
    useEffect(() => {
        if (localStorage.getItem("loggedIn") == "false") {
            navigate("/")
        }
    })

    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default Dashboard
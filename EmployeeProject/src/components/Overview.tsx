
const Overview = () => {

    // get username from localstorage after login
    const username = localStorage.getItem("username")

    return (
        <>
            <h1>Dashboard</h1>
            <h3>Hi {username},</h3>
        </>
    )
}

export default Overview
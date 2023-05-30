// Invalid login credentials alert
const Alert = () => {
    return (
        <div className="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>Invalid Credentials!</strong>
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    )
}

export default Alert
interface Props {
    alertMessage: string
}

// Invalid login credentials alert
const Alert = ({ alertMessage }: Props) => {
    return (
        <div className="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>{alertMessage}</strong>
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    )
}

export default Alert
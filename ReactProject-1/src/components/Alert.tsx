interface Props {
    alertMessage: string,
    updateAlert: any
}

const Alert = ({ alertMessage, updateAlert }: Props) => {
    return (
        <div id="notification" className='alert alert-danger m-0 d-none flex_row'>{alertMessage}
            <button type="button" className="btn btn-outline-primary" onClick={() => updateAlert(false)}>X</button>
        </div>
    )
}

export default Alert
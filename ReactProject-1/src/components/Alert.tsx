const Alert = (props: any) => {
    return <div id="notification" className='alert alert-danger m-0 d-none'>{props.alertMessage}</div>
}

export default Alert
const Alert = (props: any) => {
    return (
        <div id="notification" className='alert alert-danger m-0 d-none flex_row'>{props.alertMessage}
            <button type="button" className="btn btn-outline-primary" onClick={() => document.getElementById("notification")?.classList.add("d-none")}>X</button>
        </div>
    )
}

export default Alert
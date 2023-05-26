import BackgroundColor from "./BackgroundColor"

interface Props {
  alertText: string
}

function Navbar({ alertText }: Props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Account</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Actions
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Action 1</a></li>
                  <li><a className="dropdown-item" href="#">Action 2</a></li>
                  <li><a className="dropdown-item" href="#">Action 3</a></li>
                </ul>
              </li>
              <li className="nav-item"><BackgroundColor /></li>
              <li className="nav-item"><button type="button" className="btn btn-outline-primary" onClick={() => document.getElementById("notification")?.classList.toggle("d-none")}>{alertText}</button></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
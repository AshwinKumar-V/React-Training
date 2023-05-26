function Content() {
    const content = "Continue watching..."

    return (
        <div className="content">
            <p>{content}</p>
            <div className="card">
              {/* <img src="..." className="card-img-top" alt="..."> */}
              <div className="card-body">
                <h5 className="card-title">Random Movie</h5>
                <p className="card-text">Some random movie description.</p>
                <a href="#" className="btn btn-primary">Watch Now</a>
              </div>
            </div>
        </div>
    )
}

export default Content;

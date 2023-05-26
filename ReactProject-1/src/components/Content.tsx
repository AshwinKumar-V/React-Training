function Content() {
  const content = "Continue watching..."
  const movies = ['Inception', 'Interstellar', 'Tenet', 'Oppenheimer']

  return (
    <div className="content">
      <h4>{content}</h4>

      <div className="flex_row flex-wrap">
        {movies.map((movie) => (
          <div className="card m-2" key={movie}>
            {/* <img src="..." className="card-img-top" alt="..."> */}
            <div className="card-body">
              <h5 className="card-title">{movie}</h5>
              <p className="card-text">Some random movie description.</p>
              <a href="#" className="btn btn-primary">Watch Now</a>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Content;

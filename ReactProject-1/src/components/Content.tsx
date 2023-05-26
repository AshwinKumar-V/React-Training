import { MouseEvent } from "react"

function Content() {
  const default_msg = "No new movies."
  const movies = ['Inception', 'Interstellar', 'Tenet', 'Oppenheimer']

  const handleEvent = (event: MouseEvent) => {
    console.log(event.type)
  }

  return (
    <div className="content">
      {movies.length == 0 ? <p>{default_msg}</p> : null}
      <div className="flex_row flex-wrap">
        {movies.map((movie) => (
          <div className="card m-2" key={movie}>
            {/* <img src="..." className="card-img-top" alt="..."> */}
            <div className="card-body">
              <h5 className="card-title">{movie}</h5>
              <p className="card-text">Some random movie description.</p>
              <a href="#" className="btn btn-primary" onClick={handleEvent}>Watch Now</a>
            </div>
          </div>
        ))}
      </div>

    </div >
  )
}

export default Content;

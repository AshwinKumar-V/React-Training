function Menu() {
  return (
    <>
      <ul className="list-group menu">
        <li className="list-group-item active" aria-current="true">Home</li>
        <li className="list-group-item" aria-disabled="true">Movies</li>
        <li className="list-group-item" aria-disabled="true">Series</li>
        <li className="list-group-item" aria-disabled="true">Favorites</li>
        <li className="list-group-item" aria-disabled="true">Upcoming</li>
      </ul>
    </>
  )
}

export default Menu;

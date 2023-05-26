function Menu() {
  const menu_items = ['Home', 'Movies', 'Series', 'favorites', 'Upcoming']

  return (
    <>
      {menu_items.length == 0 ? "Menu not available" : null}
      <ul className="list-group menu">
        {menu_items.map((item) => (<li className="list-group-item" aria-current="true" key={item} onClick={() => console.log(item)}>{item}</li>))}
      </ul>
    </>
  )
}

export default Menu;

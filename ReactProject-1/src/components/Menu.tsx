import { useState } from "react";

function Menu() {
  const menu_items = ['Home', 'Movies', 'Series', 'favorites', 'Upcoming']
  const [itemSelected, updateSelectedItem] = useState('Home')

  return (
    <>
      {menu_items.length == 0 ? "Menu not available" : null}
      <ul className="list-group menu">
        {menu_items.map((item) => (<li className={itemSelected === item ? "list-group-item active" : "list-group-item"} aria-current="true" key={item} onClick={() => updateSelectedItem(item)}>{item}</li>))}
      </ul>
    </>
  )
}

export default Menu;

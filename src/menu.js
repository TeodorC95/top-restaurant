function menu() {
  const html = `
  <nav>
    <div class="nav-container">
      <ul>
        <li><a class="nav-link" href="#">Home</a></li>
        <li class="active"><a class="nav-link" href="">Menu</a></li>
        <li><a class="nav-link" href="">Contact</a></li>
      </ul>
    </div>
  </nav>
  <h1>Menu</h1>
  <p>Have a look</p>
  <div class="menu">
    <ul class="menu-list">
      <li class="menu-item">Air Fryer Crispy Potatoes</li>
      <li class="menu-item">Loaded Slow-Cooker Potatoes</li>
      <li class="menu-item">Perfect Mashed Potatoes</li>
      <li class="menu-item">Fried Mashed Potato Balls</li>
      <li class="menu-item">Garlic Smashed Potatoes</li>
    </ul>
  </div>
  `;
  return html;
}

export default menu;

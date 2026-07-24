const menuItems = [
  {
    name: "Classic Pancake Stack",
    description:
      "Three fluffy buttermilk pancakes served with whipped butter and warm maple syrup.",
    price: "$9.99",
  },
  {
    name: "Smash Burger & Fries",
    description:
      "Double beef patty with melted American cheese, pickles, and special sauce on a toasted bun.",
    price: "$12.49",
  },
  {
    name: "All-American Breakfast",
    description:
      "Two eggs any style, crispy bacon strips, hash browns, and buttered toast.",
    price: "$11.00",
  },
  {
    name: "Homemade Chili Bowl",
    description:
      "Slow-cooked beef chili topped with shredded cheddar cheese, sour cream, and diced green onions.",
    price: "$8.50",
  },
  {
    name: "Fresh Apple Pie",
    description:
      "A slice of warm, cinnamon-spiced apple pie served with a scoop of vanilla bean ice cream.",
    price: "$6.00",
  },
  {
    name: "Bottomless Diner Coffee",
    description:
      "Freshly brewed dark roast coffee with free refills throughout your meal.",
    price: "$3.50",
  },
];

export default function loadMenu() {
  const menuTitle = document.createElement("h2");
  menuTitle.textContent = "Our Menu";
  menuTitle.classList.add("menu-title");

  const menuContainer = document.createElement("div");

  menuContainer.appendChild(menuTitle);
  menuItems.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("menu-card");

    const name = document.createElement("h2");
    name.textContent = item.name;

    const description = document.createElement("p");
    description.textContent = item.description;

    const price = document.createElement("p");
    price.textContent = item.price;

    card.appendChild(name);
    card.appendChild(description);
    card.appendChild(price);
    menuContainer.appendChild(card);
  });
  return menuContainer;
}

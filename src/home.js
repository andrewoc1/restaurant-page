export default function loadHome() {
  const container = document.createElement("div");
  container.classList.add("home-container");

  const welcome = document.createElement("h2");
  welcome.textContent = "Welcome to the Delicious Diner!";

  const tagline = document.createElement("p");
  tagline.classList.add("tagline");
  tagline.textContent = "Classic Comfort Food • Hot Coffee • Friendly Faces";

  const description = document.createElement("p");
  description.classList.add("description");
  description.textContent =
    "Serving up hot stacks of pancakes, juicy smash burgers, and homemade pies cooked fresh to order. Stop by for a table or grab a stool at the counter!";

  const hoursSection = document.createElement("div");
  hoursSection.classList.add("description");

  const hoursOperation = document.createElement("h3");
  hoursOperation.textContent = "Hours of Operation";

  const monThurs = document.createElement("p");
  monThurs.textContent = "Mon – Thu: 6:00 AM – 9:00 PM";
  const friSat = document.createElement("p");
  friSat.textContent = "Fri – Sat: 6:00 AM – 11:00 PM";
  const sun = document.createElement("p");
  sun.textContent = "Sun: 7:00 AM – 8:00 PM";

  hoursSection.append(hoursOperation);
  hoursSection.append(monThurs);
  hoursSection.append(friSat);
  hoursSection.append(sun);

  const location = document.createElement("p");
  location.classList.add("location");
  location.textContent = "📍 123 Main Street, Flavor Town";

  container.append(welcome);
  container.append(tagline);
  container.append(description);
  container.append(hoursSection);
  container.append(location);

  return container;
}

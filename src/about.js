const aboutData = {
  title: "Our Story",
  text: "Founded in 1952, The Delicious Diner started with a simple grill and a dream to serve the best smash burgers in town. Over 70 years later, we are still family-owned, still pouring bottomless coffee, and still flipping pancakes exactly the way our grandparents did.",
};

export default function loadAbout() {
  const aboutContainer = document.createElement("div");
  aboutContainer.classList.add("about-container");

  const title = document.createElement("h2");
  title.textContent = aboutData.title;

  const text = document.createElement("p");
  text.textContent = aboutData.text;

  aboutContainer.append(title);
  aboutContainer.append(text);

  return aboutContainer;
}

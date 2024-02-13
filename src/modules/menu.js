import JollofImage from "../images/jollof.jpg";

export default (function Menu() {
  const menu = document.createElement("div");
  const heading = document.createElement("h3");
  const menuInnerContainer = document.createElement("div");
  const menuTxt = document.createElement("div");
  const menuList = document.createElement("ul");
  const image = document.createElement("img");

  const listItems = [
    "Jollof Rice",
    "Banku And Tilapia",
    "Waakye",
    "Fufu",
    "Light Soup",
    "Groundnut Soup",
    "Palmnut Soup",
  ];
  menu.id = "menu";
  menu.classList += "container menu";
  heading.textContent = "We Serve";
  menuInnerContainer.classList += "horizontal img-section";
  menuTxt.classList = "menu-txt";
  image.src = JollofImage;
  image.alt = "Image of Jollof";

  listItems.forEach((dish) => {
    const Item = document.createElement("li");
    Item.textContent = dish;
    menuList.appendChild(Item);
  });

  menuTxt.appendChild(menuList);
  menuInnerContainer.appendChild(menuTxt);
  menuInnerContainer.appendChild(image);
  menu.appendChild(heading);
  menu.appendChild(menuInnerContainer);

  return menu;
})();

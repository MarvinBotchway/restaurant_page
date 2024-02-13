export default (function Home() {
  let home = document.createElement("div");
  let actionTxt = document.createElement("div");
  let heading1 = document.createElement("h1");
  let heading2 = document.createElement("h2");

  home.id = "home";
  home.classList += "container";
  actionTxt.id = "action-txt";
  heading1.innerText = "Small Chops Restaurant";
  heading2.innerText = "We Serve Delicious Ghanaian Dishes With A Side Of Love";

  actionTxt.appendChild(heading1);
  actionTxt.appendChild(heading2);
  home.appendChild(actionTxt);

  return home;
})();

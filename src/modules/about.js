import StaffImage from "../images/staff.jpg";

export default (function About() {
  const about = document.createElement("div");
  const heading = document.createElement("h3");
  const text = document.createElement("p");
  const imageContainer = document.createElement("div");
  const image = document.createElement("img");

  about.id = "about";
  about.classList += "container about";
  heading.textContent = "Who We Are";
  text.textContent =
    "Authentic Meals In A Homely Environment Find Us In THe Beautiful City Of Accra";
  imageContainer.classList += "img-section";
  image.src = StaffImage;
  image.alt = "staff-image";

  imageContainer.appendChild(image);
  about.appendChild(heading);
  about.appendChild(text);
  about.appendChild(imageContainer);

  return about;
})();

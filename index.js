const elements = document.querySelectorAll('.project-item');

let projects = [{
  h: "Content management site for south African public schools",
  p: "A blog site serves as an online platform where individuals, businesses, or organizations share a diverse range of content, providing insights, information, and perspectives on various topics. These digital spaces have become instrumental in fostering communication and community engagement. A well-designed blog site often features a user-friendly interface, allowing readers to easily navigate through a collection of articles, opinion pieces, and multimedia content. It serves as a dynamic space for writers to express their thoughts, expertise, and creativity while fostering interaction through comments and social media integration. Whether focusing on lifestyle, technology, business, or personal narratives, a blog site acts as a virtual forum.",
  imgUrl: `./assets/portfolio-images/blogpost.jpg`
},
{
  h: "My personal blog ",
  p: "A blog site serves as an online platform where individuals, businesses, or organizations share a diverse range of content, providing insights, information, and perspectives on various topics. These digital spaces have become instrumental in fostering communication and community engagement. A well-designed blog site often features a user-friendly interface, allowing readers to easily navigate through a collection of articles, opinion pieces, and multimedia content. It serves as a dynamic space for writers to express their thoughts, expertise, and creativity while fostering interaction through comments and social media integration. Whether focusing on lifestyle, technology, business, or personal narratives, a blog site acts as a virtual forum.",
  imgUrl: "./assets/portfolio-images/Customer-Service-Software.jpg"
},
{
  h: "A landing page for Dronoticz",
  p: "A blog site serves as an online platform where individuals, businesses, or organizations share a diverse range of content, providing insights, information, and perspectives on various topics. These digital spaces have become instrumental in fostering communication and community engagement. A well-designed blog site often features a user-friendly interface, allowing readers to easily navigate through a collection of articles, opinion pieces, and multimedia content. It serves as a dynamic space for writers to express their thoughts, expertise, and creativity while fostering interaction through comments and social media integration. Whether focusing on lifestyle, technology, business, or personal narratives, a blog site acts as a virtual forum.",
  imgUrl: "./assets/portfolio-images/diagnostics.jpg"
},
{
  h: "A website for people to create and share surveys.",
  p: "A blog site serves as an online platform where individuals, businesses, or organizations share a diverse range of content, providing insights, information, and perspectives on various topics. These digital spaces have become instrumental in fostering communication and community engagement. A well-designed blog site often features a user-friendly interface, allowing readers to easily navigate through a collection of articles, opinion pieces, and multimedia content. It serves as a dynamic space for writers to express their thoughts, expertise, and creativity while fostering interaction through comments and social media integration. Whether focusing on lifestyle, technology, business, or personal narratives, a blog site acts as a virtual forum.",
  imgUrl: "./assets/portfolio-images/market-research-intellect.png"
},
{
  h: "A simple react file upload site.",
  p: "A blog site serves as an online platform where individuals, businesses, or organizations share a diverse range of content, providing insights, information, and perspectives on various topics. These digital spaces have become instrumental in fostering communication and community engagement. A well-designed blog site often features a user-friendly interface, allowing readers to easily navigate through a collection of articles, opinion pieces, and multimedia content. It serves as a dynamic space for writers to express their thoughts, expertise, and creativity while fostering interaction through comments and social media integration. Whether focusing on lifestyle, technology, business, or personal narratives, a blog site acts as a virtual forum.",
  imgUrl: "./assets/portfolio-images/technical-illustration-software.png"
},
{
  h: "A react clock",
  p: "A blog site serves as an online platform where individuals, businesses, or organizations share a diverse range of content, providing insights, information, and perspectives on various topics. These digital spaces have become instrumental in fostering communication and community engagement. A well-designed blog site often features a user-friendly interface, allowing readers to easily navigate through a collection of articles, opinion pieces, and multimedia content. It serves as a dynamic space for writers to express their thoughts, expertise, and creativity while fostering interaction through comments and social media integration. Whether focusing on lifestyle, technology, business, or personal narratives, a blog site acts as a virtual forum.",
  imgUrl: "./assets/portfolio-images/UML-diagrams.png"
},
]

for (let i = 0; i < projects.length; i++) {
  elements[i].addEventListener("mouseover", () => {
    document.getElementById("h").textContent = projects[i].h
    // elements[i].style.width = 
    document.getElementById("p").textContent = projects[i].p
    document.getElementById("imgUrl").style.display = "inline"
    document.getElementById("imgUrl").src = projects[i].imgUrl
  })
}

for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener("mouseout", () => {
    document.getElementById("h").textContent = "3 years of React and Java"
    document.getElementById("p").textContent = `Default. A blog site serves as an online platform where individuals,
    businesses, or organizations share a diverse range of content, providing insights, information, and perspectives
    on various topics. These digital spaces have become instrumental in fostering communication and community
    engagement. A well-designed blog site often features a user-friendly interface, allowing readers to easily
    navigate through a collection of articles, opinion pieces, and multimedia content. It serves as a dynamic space
    for writers to express their thoughts, expertise, and creativity while fostering interaction through comments and
    social media integration.`
    document.getElementById("imgUrl").style.display = "none"
  })
}

const checkbox = document.getElementById("checkbox");
const home__nav__menu = document.getElementById("home");

checkbox.addEventListener("click", function () {
  // Code to be executed when the checkbox is clicked
  if (home__nav__menu.style.display != "block") {
    home__nav__menu.style.display = "block";
  } else {
    home__nav__menu.style.display = "none";
  }
  console.log("Hello");
});
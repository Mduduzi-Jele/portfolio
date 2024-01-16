const elements = document.querySelectorAll('.project-item');

let projects = [{
  h: "blog site site for south African public schools",
  p: "This school blog site is the first phase of a large system aimed at improving the quality of education in south african public schools. For this part, the school blog acts as a dynamic showcase for the school's achievements, talents, and academic prowess, contributing to its positive online presence and attracting prospective students and educators. The end goal for this system is to provide student with everything they need for a better education and a brighter future",
  imgUrl: `./assets/portfolio-images/thuto.png`,
  projectUrl: "https://jazzy-pie-6d71dc.netlify.app/",
  timeframe: "2023-Present",
},
{
  h: "My personal blog ",
  p: "In this platform, I aim to write about all things tech and the businesses behind some of the greatest innovations in the technology sector.I plan to delve into the world of technology and the businesses driving significant innovations in the sector. From the latest advancements in artificial intelligence to the entrepreneurial landscape shaping startups, my blog aims to provide an in-depth exploration of the ever-changing tech scene. Based in Johannesburg, South Africa, and with a background in software development, my perspective will offer a global outlook, considering regional impacts and contributing to a well-rounded understanding of the tech ecosystem",
  imgUrl: "./assets/portfolio-images/matterhorn.png",
  projectUrl: "https://blog-production-8bc9.up.railway.app/",
  timeframe: "2023-Present"
},
{
  h: "A landing page for Dronoticz",
  p: "This is a landing page for a robotics start based in joburg.The client wanted a simple, minimal design that would tell people what they are about.",
  imgUrl: "./assets/portfolio-images/dronoticz.png",
  projectUrl: "https://mduduzi-jele.github.io/website-two/",
  timeframe: "2023-Present"
},
{
  h: "A website for people to create and share surveys.",
  p: "This is a react project where users can create surveys and share them with thier audiences. The main objective for this project was to improve my design skills. This is a react project and when ever I build a project to improve my skills I make sure to learn atleast one new thing about the technologies I'm using and apply them in the project.",
  imgUrl: "./assets/portfolio-images/savvy.png",
  projectUrl: "https://savvvy.netlify.app/",
  timeframe: "2023-Present"
},
{
  h: "A simple react file upload site.",
  p: "This is a simple website I built to improve my skills of designing user interfaces and also implement some react js concepts that I learned during this time.",
  imgUrl: "./assets/portfolio-images/stream.png",
  projectUrl: "https://streamm.netlify.app/",
  timeframe: "2023-Present"
},
{
  h: "A react clock",
  p: "Named after one of my favorite watches the rolex white face aka panda, this is the first project I have ever built by myself. The purpose of this project was to implement programming logic skills that I learned in school. This is a time",
  imgUrl: "./assets/portfolio-images/panda.png",
  projectUrl: "https://cheerful-marigold-88c03d.netlify.app/",
  timeframe: "2020-Present"
},
]

for (let i = 0; i < projects.length; i++) {
  elements[i].addEventListener("mouseover", () => {
    document.getElementById("h").textContent = projects[i].h
    document.getElementById("p").textContent = projects[i].p
    document.getElementById("time").textContent = projects[i].timeframe
    document.getElementById("imgUrl").style.display = "inline"
    document.getElementById("imgUrl").src = projects[i].imgUrl
  })
}

for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener("mouseout", () => {
    document.getElementById("h").textContent = "3 years of javascript and Java"
    document.getElementById("time").textContent = "2020-Present"
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
});
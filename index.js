let background = document.getElementById("background");
let h = document.getElementById("h");
let p = document.getElementById("p");
let a = document.getElementById("a");

function removeAllChildElements() {
  const myDiv = document.getElementById("skills");

  while (myDiv.firstChild) {
    myDiv.removeChild(myDiv.firstChild);
  }
}

function addTuls(arr) {
  console.log("Adding tools...");
  removeAllChildElements();
  arr.map((tul, index) => {
    // create a div for every image logo
    var imgDiv = document.createElement("div");
    imgDiv.className = "skills__image";
    imgDiv.id = `skillsImage${index}`;

    //append the div to skills div
    var skills = document.getElementById("skills");
    skills.appendChild(imgDiv);

    //create and Image element
    var img = document.createElement("img");
    img.src = `./assets/logos/${tul}`;

    // append the Image element to the myDiv element
    var skillsImage = document.getElementById(`skillsImage${index}`);
    skillsImage.appendChild(img);
  });
  console.log("Finnishing adding tools...");
}

const content = [
  {
    h: `Survey Site`,
    p: `This is a survey site that collects data from a user and saves that data to a database.The site asks simple quetions about a user's preferences. The site is built using Nodejs(expressjs), I used a templete engine named ejs for the frontend and MySql`,
    a: `https://github.com`,
    background: `../../assets/project-one.png`,
    tul: ["HTML5.svg", "CSS3.svg", "expressjs.svg", "mysql.svg"],
  },
  {
    h: `Clock`,
    p: `This is a timer. In this timer you set the duration of your activity and you also get to set the duration of the break you want to take. This is a React project using javascript html and css`,
    a: `https://googgle.com`,
    background: `../../assets/project-two.png`,
    tul: ["HTML5.svg", "CSS3.svg", "React.svg"],
  },
  {
    h: `Dronoticz`,
    p: `This is a landing page for an organization that "creates intelligent machines that seamlessly integrate into daily life, enhancing productivity, safety, and efficiency.Join us on this exciting journey as we unlock new frontiers, solve complex challenges, and shape a future where intelligent machines work hand-in-hand with humans. Discover the power of robotics and be part of the revolution". This is built using html css and a little javascript`,
    a: `https://mduduzi-jele.github.io/website-two/`,
    background: `../../assets/project-three.png`,
    tul: ["HTML5.svg", "CSS3.svg", "javascript.svg"],
  },
];

background.style.backgroundImage = `url(${content[0].background})`;
h.innerText = content[0].h;
p.innerText = content[0].p;
a.href = content[0].a;

addTuls(content[0].tul);

function next() {
  console.log("executing...");

  let arr = Array.from(background.classList);
  let no = parseInt(arr[1]);

  if (no < 2) {
    let count = no + 1;
    background.style.backgroundImage = `url(${content[count].background})`;
    h.innerText = content[count].h;
    p.innerText = content[count].p;
    a.href = content[count].a;
    background.classList.remove(`${no}`);
    background.classList.add(`${count}`);

    addTuls(content[count].tul);
  }
  console.log("hello")
}

function prev() {
  console.log("executing...");
  let arr = Array.from(background.classList);
  let no = parseInt(arr[1]);

  if (no > 0) {
    let count = no - 1;
    background.style.backgroundImage = `url(${content[count].background})`;
    h.innerText = content[count].h;
    p.innerText = content[count].p;
    a.href = content[count].a;
    background.classList.remove(`${no}`);
    background.classList.add(`${count}`);
    addTuls(content[count].tul);
  }
}

const checkbox = document.getElementById("checkbox");
const home__nav__menu = document.getElementById("home");

checkbox.addEventListener("click", function() {
  // Code to be executed when the checkbox is clicked
  if(home__nav__menu.style.display != "block"){
    home__nav__menu.style.display = "block"
  } else {
    home__nav__menu.style.display = "none"
  }
  console.log("Hello")
});
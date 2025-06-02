/*------------------------------------------------------------------------------------
 * Hero Section
 *-------------------------------------------------------------------------------------*/
// Function to fetch data from the local JSON file
async function fetchHeroData() {
  try {
    const response = await fetch("data/hero.json");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    // console.log(data);
    return data.hero;
  } catch (error) {
    console.error("Error fetching hero text:", error);
    return [];
  }
}

// API-style function to get Hero section text (uses fetchHeroData internally)
async function getHeroText() {
  const hero = await fetchHeroData();
  return hero;
}

//add data to card template
function addHero(hero) {
  const template = document
    .getElementById("hero-template")
    .content.cloneNode(true);
  template.querySelector("#hero-image").src = hero.image;
  template.querySelector(".hero-h1").innerText = hero.title;
  template.querySelector(".hero-h2").innerText = hero.tagline;
  template.querySelector(".hero-body").innerText = hero.subtagline;
  document.querySelector("#hero-text").appendChild(template);
}

/*------------------------------------------------------------------------------------
 * About Section
 *-------------------------------------------------------------------------------------*/
// Function to fetch data from the local JSON file
async function fetchAboutData() {
  try {
    const response = await fetch("data/about.json");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    // console.log(data);
    return data.about;
  } catch (error) {
    console.error("Error fetching courses:", error);
    return [];
  }
}

// API-style function to get courses (uses fetchCoursesData internally)
async function getAbout() {
  const about = await fetchAboutData();
  return about;
}

//add data to card template
function addAbout(about) {
  const template = document
    .getElementById("about-template")
    .content.cloneNode(true);
  template.querySelector("#about-image").src = about.image;
  template.querySelector(".about-title").innerText = about.title;
  template.querySelector(".about-body").innerText = about.body;
  template.querySelector(".option-1").innerText = about.options.option1;
  template.querySelector(".option-2").innerText = about.options.option2;
  template.querySelector(".option-3").innerText = about.options.option3;
  document.querySelector("#about-text").appendChild(template);
}

/*------------------------------------------------------------------------------------
 * Courses
 *-------------------------------------------------------------------------------------*/
// Function to fetch data from the local JSON file
async function fetchCoursesData() {
  try {
    const response = await fetch("data/courses.json");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    return data.courses;
  } catch (error) {
    console.error("Error fetching courses:", error);
    return [];
  }
}

// API-style function to get courses (uses fetchCoursesData internally)
async function getCourses() {
  const courses = await fetchCoursesData();
  return courses;
}

//add data to card template
function addCard(course) {
  const template = document
    .getElementById("course-template")
    .content.cloneNode(true);
  template.querySelector("#image").src = course.image;
  template.querySelector(".card-title").innerText = course.name;
  template.querySelector(".card-duration").innerText = course.duration;
  template.querySelector(".card-description").innerText = course.skills;
  template.querySelector(".card-tutor").innerText = course.tutor;
  document.querySelector("#course-list").appendChild(template);
}

/*------------------------------------------------------------------------------------
 * Trainers
 *-------------------------------------------------------------------------------------*/
// Function to fetch trainer data from the local JSON file
async function fetchTrainerData() {
  try {
    const response = await fetch("data/trainers.json");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    return data.trainers;
  } catch (error) {
    console.error("Error fetching trainers data:", error);
    return [];
  }
}

// API-style function to get courses (uses fetchCoursesData internally)
async function getTrainers() {
  const trainers = await fetchTrainerData();
  return trainers;
}

//add data to card template
function addTrainers(trainer) {
  const template = document
    .getElementById("trainers-template")
    .content.cloneNode(true);
  template.querySelector("#trainer-image").src = trainer.image;
  template.querySelector(".trainer-name").innerText = trainer.name;
  template.querySelector(".trainer-course").innerText = trainer.course;
  template.querySelector(".trainer-description").innerText =
    trainer.description;
  document.querySelector("#trainer-list").appendChild(template);
}

// Run after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  //fetch the data for hero section
  getHeroText().then((hero) => {
    hero.forEach((heroText) => addHero(heroText));
  });

  //fetch the data for about section
  getAbout().then((about) => {
    about.forEach((aboutText) => addAbout(aboutText));
  });

  //fetch the data for courses section in the landing page.
  getCourses().then((courses) => {
    courses.slice(0, 3).forEach((course) => addCard(course)); //select only the first 3 courses
  });

  //fetch the data for courses section
  getTrainers().then((trainers) => {
    trainers.forEach((trainer) => addTrainers(trainer));
  });
});

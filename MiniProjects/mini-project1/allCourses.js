/*------------------------------------------------------------------------------------
 * All Courses
 *-------------------------------------------------------------------------------------*/
let courses = []; // Global variable to store fetched courses

// Function to fetch data from the local JSON file
async function fetchCoursesData() {
  try {
    const response = await fetch("data/courses.json");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.courses;
  } catch (error) {
    console.error("Error fetching courses:", error);
    return [];
  }
}

// API-style function to get courses (uses fetchCoursesData internally)
async function getCourses() {
  courses = await fetchCoursesData();
  return courses;
}

//add category to the dropdowm option
function addCategory(course) {
  const selectedCategory = document.getElementById("selectedCategory");
  // Check if option already exists to prevent duplicates
  if (
    [...selectedCategory.options].some((opt) => opt.value === course.category)
  ) {
    return;
  }
  // Populate dropdown select options
  const option = document.createElement("option");
  option.value = course.category;
  option.textContent =
    course.category.charAt(0).toUpperCase() + course.category.slice(1);
  selectedCategory.appendChild(option);
}

//add data to card template
function addCard(course) {
  const template = document
    .getElementById("course-template")
    .content.cloneNode(true);
  template.querySelector("#image").src = course.image;
  template.querySelector(".card-title").innerText = course.name;
  template.querySelector(".card-category").innerText = course.category;
  template.querySelector(".card-title").innerText = course.name;
  template.querySelector(".card-duration").innerText = course.duration;
  template.querySelector(".card-tutor").innerText = course.tutor;
  template.querySelector(".card-description").innerText = course.skills;
  document.querySelector("#course-list").appendChild(template);
}

// Clear existing cards
function clearCards() {
  document.querySelector("#course-list").innerHTML = "";
}

// Filter function by category and search Key
function search() {
  const category = document.getElementById("selectedCategory").value;
  const searchKey = document.getElementById("searchInput").value.toLowerCase();

  const filteredCourses = courses.filter((course) => {
    const categoryMatch = category === "all" || course.category === category;
    const searchMatch = course.name.toLowerCase().includes(searchKey);
    return categoryMatch && searchMatch;
  });

  console.log(filteredCourses);
  clearCards();
  filteredCourses.forEach((course) => addCard(course));
}

// Filter function by category and search Key
function sort() {
  const sortby = document.getElementById("sortby").value; //gets the selected value from  the input
  let sortedCourses = [...courses]; // Create a shallow copy to avoid mutating the original product

  if (sortby === "name") {
    sortedCourses.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
      //-1 - nameA should come before nameB,
      // 1 - nameA should come after nameB
      // 0 - equal (no change in order)
    });
  } else if (sortby === "tutor") {
    sortedCourses.sort((a, b) => {
      const tutorA = a.tutor.toLowerCase();
      const tutorB = b.tutor.toLowerCase();
      return tutorA < tutorB ? -1 : tutorA > tutorB ? 1 : 0;
    });
  }
  clearCards();
  // addCard(sortedCourses); // display card for the filtered courses
  sortedCourses.forEach((course) => addCard(course));
}

// Run after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", async () => {
  await getCourses(); // wait for courses to load before proceeding

  courses.forEach((course) => addCard(course)); // load all courses initially
  courses.forEach((course) => addCategory(course)); // load all categories <seclect option>

  document.getElementById("searchButton").addEventListener("click", search);
  document.getElementById("sortby").addEventListener("change", sort); //tigger search function if button clicked
});

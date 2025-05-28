async function fetchCategories() {
  try {
    const response = await fetch(
      "https://fakestoreapi.com/products/categories"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch categories");
    }
    const categories = await response.json();
    const selectedCategory = document.getElementById("selectedCategory");

    //populate the dropdown select options
    categories.forEach((category) => {
      const option = document.createElement("option");
      option.value = category;
      option.textContent = category.charAt(0).toUpperCase() + category.slice(1); //Capatilize the first letter
      selectedCategory.appendChild(option);
    });
    // console.log(categories);
  } catch (error) {
    console.error("Error loading categories:", error);
  }
}

// Fetch products from FakeStore API
async function fetchProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) {
      throw new Error("Server error");
    }

    products = await response.json();
    addCard(products); // add card using add addCard function
  } catch (error) {
    console.error("Couldn't fetch the data:", error);
  }
}

// Function to render cards from a product list
function addCard(products) {
  const cardList = document.getElementById("card-list");
  cardList.innerHTML = ""; // Clear existing cards

  products.forEach((product) => {
    const template = document
      .getElementById("card-template")
      .content.cloneNode(true);
    template.querySelector("#image").src = product.image;
    template.querySelector("#image").alt = product.title;
    template.querySelector(".card-title").innerText = product.title;
    template.querySelector(".card-text").innerText = product.description;
    template.querySelector(".card-price").innerText = `A$ ${product.price}`;
    cardList.appendChild(template);
  });

  if (products.length === 0) {
    cardList.innerHTML = `<p class="text-center">No products found.</p>`;
  }
}

// Filter function by category and search Key
function search() {
  const category = document.getElementById("selectedCategory").value; //gets the selected category from input
  const searchKey = document.getElementById("searchInput").value.toLowerCase(); //gets the searchkey in lowercase from Search Input Field

  const productFound = products.filter((product) => {
    const categoryFound = category === "all" || product.category === category; //true if -all- or category is found in the product.category
    const searchKeyFound = product.title.toLowerCase().includes(searchKey); // true if searchkey is found in the title
    return categoryFound && searchKeyFound; // return the boolean (true or false) of the results
  });
  addCard(productFound); // display card for the filtered products
}

// Filter function by category and search Key
function sort() {
  const sortby = document.getElementById("sortby").value; //gets the selected value from  the input

  let sorted = [...products]; // Create a shallow copy to avoid mutating the original product

  if (sortby === "title") {
    sorted.sort((a, b) => {
      const titleA = a.title.toLowerCase();
      const titleB = b.title.toLowerCase();
      return titleA < titleB ? -1 : titleA > titleB ? 1 : 0;
    });
  } else if (sortby === "price") {
    sorted.sort((product1, product2) => product1.price - product2.price);
  }

  addCard(sorted); // display card for the filtered products
}

// Event listeners - tigger search function
document.getElementById("selectedCategory").addEventListener("change", search); //tigger search function if selectedCategory in the dropdown changes
document.getElementById("searchButton").addEventListener("click", search); //tigger search function if button clicked
document.getElementById("sortby").addEventListener("change", sort); //tigger search function if button clicked

//call the functions
fetchCategories();
fetchProducts();

let products = [];

//fetchCategories
async function fetchCategories() {
  try {
    // Call your backend route using browser fetch
    const response = await fetch("/api/categories");

    // Handle non-OK HTTP response
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Parse response body as JSON
    const categories = await response.json();

    // Populate the dropdown
    const selectedCategory = document.getElementById("selectedCategory");
    categories.forEach((category) => {
      const option = document.createElement("option");
      option.value = category;
      option.textContent = category.charAt(0).toUpperCase() + category.slice(1);
      selectedCategory.appendChild(option);
    });
  } catch (error) {
    console.error("Error loading categories:", error);
  }
}

//fetchProducts
async function fetchProducts() {
  try {
    const response = await fetch("/api/products");

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    products = data;
    addCard(products);
  } catch (error) {
    console.error("Couldn't fetch the data:", error);
  }
}

function addCard(products) {
  const cardList = document.getElementById("card-list");
  cardList.innerHTML = "";

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

function search() {
  const category = document.getElementById("selectedCategory").value;
  const searchKey = document.getElementById("searchInput").value.toLowerCase();

  const filtered = products.filter((product) => {
    const categoryMatch = category === "all" || product.category === category;
    const titleMatch = product.title.toLowerCase().includes(searchKey);
    return categoryMatch && titleMatch;
  });

  addCard(filtered);
}

function sort() {
  const sortby = document.getElementById("sortby").value;
  let sorted = [...products];

  if (sortby === "title") {
    sorted.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortby === "price") {
    sorted.sort((a, b) => a.price - b.price);
  }

  addCard(sorted);
}

document.getElementById("selectedCategory").addEventListener("change", search);
document.getElementById("searchButton").addEventListener("click", search);
document.getElementById("sortby").addEventListener("change", sort);

fetchCategories();
fetchProducts();

let news = [
  {
    id: 1,
    title: "Election Results",
    content: "Newly elected minister...",
  },

  { id: 2, title: "Sporting Success", content: "World Cup winners..." },
  {
    id: 3,
    title: "Tornado Warning",
    content: "Residents should prepare...",
  },
];

//Function to add card
function addCard(item) {
  // clone the template
  const template = document
    .getElementById("card-template")
    .content.cloneNode(true);

  template.querySelector(".card-title").innerText = item.title;
  template.querySelector(".card-description").innerText = item.content;

  // include the populated template into the page
  document.querySelector("#card-list").appendChild(template);
}

//Function to load the News
function loadNews() {
  const cardList = document.querySelector("#card-list");
  cardList.innerHTML = ""; // Clear existing news cards
  // iterate through the array
  news.forEach((item) => {
    addCard(item);
  });
}

//load the all news
loadNews();

// Refresh every 5 seconds to load new News Items
let refreshInterval = setInterval(loadNews, 5000);

// Stop stop Refresh
function stopRefresh() {
  clearInterval(refreshInterval);
}

//  Form to add News
function addNewsItem() {
  const titleInput = document.getElementById("news-title");
  const contentInput = document.getElementById("news-content");

  const title = titleInput.value;
  const content = contentInput.value;

  const newItem = {
    id: news.length + 1,
    title,
    content,
  };

  news.push(newItem);

  // Reset form
  titleInput.value = "";
  contentInput.value = "";
}

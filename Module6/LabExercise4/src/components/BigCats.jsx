import SingleCat from "./SingleCat";
import "../App.css";
import { useState } from "react";

function BigCats() {
  const cats = [
    {
      id: 1,
      name: "Cheetah",
      latinName: "Acinonyx jubatus",
      image: "/images/cheetah.jpg",
    },
    {
      id: 2,
      name: "Cougar",
      latinName: "Puma concolor",
      image: "/images/cougar.jpg",
    },
    {
      id: 3,
      name: "Jaguar",
      latinName: "Panthera onca",
      image: "/images/jaguar.jpg",
    },
    {
      id: 4,
      name: "Leopard",
      latinName: "Panthera pardus",
      image: "/images/leopard.jpg",
    },
    {
      id: 5,
      name: "Lion",
      latinName: "Panthera leo",
      image: "/images/lion.jpg",
    },
    {
      id: 6,
      name: "Snow leopard",
      latinName: "Panthera uncia",
      image: "/images/snowleopard.jpg",
    },
    {
      id: 7,
      name: "Tiger",
      latinName: "Panthera tigris",
      image: "/images/tiger.jpg",
    },
  ];

  const [currentCats, setCurrentCats] = useState(cats);

  const catItems = currentCats.map((cat) => (
    <SingleCat
      key={cat.id}
      name={cat.name}
      latinName={cat.latinName}
      image={cat.image}
    />
  ));

  //Function to sort arraylist
  function handleSort() {
    const sortedCats = [...currentCats];
    sortedCats.sort((a, b) => a.name.localeCompare(b.name));
    setCurrentCats(sortedCats);
  }

  //Function to reverse array list
  function handleReverse() {
    const reversedCats = [...currentCats];
    reversedCats.reverse();
    setCurrentCats(reversedCats);
  }

  //Function to findPanthera list
  function handleFindPanthera() {
    const pantheraCats = cats.filter((cat) =>
      cat.latinName.startsWith("Panthera")
    );
    setCurrentCats(pantheraCats);
  }

  //All cats
  function handleAllCats() {
    setCurrentCats(cats);
  }

  return (
    <>
      <h1>Big Cats</h1>
      <div className="container">
        <button onClick={handleAllCats}>All Cats</button>
        <button onClick={handleSort}>Sort</button>
        <button onClick={handleReverse}>Reverse</button>
        <button onClick={handleFindPanthera}>Find Panthera family</button>
      </div>
      <div className="row">{catItems}</div>
    </>
  );
}

export default BigCats;

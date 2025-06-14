import SingleCat from "./SingleCat";
import "../App.css";
import { useState } from "react";
import AddCatForm from "./AddCatForm";

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

  //function to add new cat
  const handleAddCat = (newCat) => {
    newCat.id = currentCats.length + 1;
    setCurrentCats([...currentCats, newCat]);
  };

  //functon to delete cat
  const handleDeleteCat = (idToDelete) => {
    setCurrentCats(currentCats.filter((cat) => cat.id !== idToDelete));
  };

  const catItems = currentCats.map((cat) => (
    <SingleCat
      key={cat.id}
      id={cat.id}
      name={cat.name}
      latinName={cat.latinName}
      image={cat.image}
      onDelete={handleDeleteCat}
    />
  ));

  return (
    <>
      <div className="container">
        <div className="sidebar">
          <h1>Add Cat</h1>
          <AddCatForm onAddCat={handleAddCat} />
        </div>
        <div>
          <h1>Big Cats</h1>
          <div className="row">{catItems}</div>
        </div>
      </div>
    </>
  );
}

export default BigCats;

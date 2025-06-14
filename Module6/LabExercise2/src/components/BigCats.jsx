import SingleCat from "./SingleCat";

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

  const catItems = cats.map((cat) => (
    <SingleCat
      key={cat.id}
      name={cat.name}
      latinName={cat.latinName}
      image={cat.image}
    />
  ));

  return (
    <>
      <h1>Big Cats</h1>
      <div>{catItems}</div>
    </>
  );
}

export default BigCats;

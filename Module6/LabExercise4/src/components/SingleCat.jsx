import "../App.css";

function SingleCat({ name, latinName, image }) {
  return (
    <>
      <div className="item ">
        <img src={image} alt={`${name}`} />
        <div className="cat-details">
          {name} - {latinName}
        </div>
      </div>
    </>
  );
}

export default SingleCat;

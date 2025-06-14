import "../App.css";

function SingleCat({ id, name, latinName, image, onDelete }) {
  //Function to delete from a array
  function handleDelete() {
    onDelete(id);
  }

  return (
    <>
      <div className="item ">
        <img src={image} alt={`${name}`} />
        <div className="cat-details">
          {name} - {latinName}
        </div>
        <button className="btn-red bottom" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </>
  );
}

export default SingleCat;

import { useState } from "react";

function AddCatForm({ onAddCat }) {
  const [name, setName] = useState("");
  const [latinName, setLatinName] = useState("");
  const [image, setImage] = useState("");

  //form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCat({ name, latinName, image });
  };

  //clear input fields
  const handleClear = () => {
    setName("");
    setLatinName("");
    setImage("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="py-10">
          <div>
            <label> Name</label>
          </div>
          <input
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="py-10">
          <div>
            <label>Latin Name</label>
          </div>
          <input
            name="latinName"
            type="text"
            value={latinName}
            onChange={(e) => setLatinName(e.target.value)}
          />
        </div>

        <div className="py-10">
          <div>
            <label>Image</label>
          </div>
          <input
            name="image"
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <button className="btn-gray" type="submit">
          Add Cat
        </button>
      </form>
      <button className="btn-green" onClick={handleClear}>
        Clear
      </button>
    </>
  );
}

export default AddCatForm;

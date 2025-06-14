function SingleCat({ name, latinName, image }) {
  return (
    <>
      <div>
        <img
          src={image}
          alt={`${name}`}
          style={{ width: "300px", height: "auto", borderRadius: "8px" }}
        />
      </div>
      <div style={{ fontWeight: "bold", paddingBottom: "20px" }}>
        {name} - {latinName}
      </div>
    </>
  );
}

export default SingleCat;

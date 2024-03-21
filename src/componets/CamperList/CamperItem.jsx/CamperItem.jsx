import CSS from "./CamperItem.module.css";
const CamperItem = ({ camper }) => {
  const firstImage = camper.gallery[0];

  const text = camper.description.split(" ").slice(0, 11).join(" ");

  return (
    <div className={CSS.itemContainer}>
      <img className={CSS.imageItem} src={firstImage} alt="Camper Preview" />
      <div className={CSS.infoContainer}>
        <div className={CSS.info1}>
          <p>{camper.name}</p>
          <p>€{camper.price}</p>
        </div>
        <div className={CSS.info2}>
          <p>{camper.rating}</p>
          <p>{camper.location}</p>
        </div>

        <p>{text}...</p>
        <button className={CSS.showBtn}>Show more</button>
      </div>
    </div>
  );
};
export default CamperItem;

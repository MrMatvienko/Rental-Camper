import CSS from "./CamperItem.module.css";

const CamperItem = ({ camper, toggleModal }) => {
  const firstImage = camper.gallery[0];
  const text = camper.description.split(" ").slice(0, 11).join(" ");

  return (
    <div className={CSS.itemContainer}>
      <img className={CSS.imageItem} src={firstImage} alt="Camper Preview" />
      <div className={CSS.infoContainer}>
        <div className={CSS.info1}>
          <p className={CSS.fistLineInfo}>{camper.name}</p>
          <p className={CSS.fistLineInfo}>€{camper.price}</p>
        </div>
        <div className={CSS.info2}>
          <p>{camper.rating}</p>
          <p>{camper.location}</p>
        </div>
        <p className={CSS.description}>{text}...</p>
        <ul className={CSS.listDateils}>
          <li className={CSS.camperDetailsItem}>{camper.adults} adults</li>
          <li className={CSS.camperDetailsItem}>
            {camper.transmission.charAt(0).toUpperCase() +
              camper.transmission.substring(1)}
          </li>
          <li className={CSS.camperDetailsItem}>
            {camper.engine.charAt(0).toUpperCase() + camper.engine.substring(1)}
          </li>
          {camper.details.kitchen === 1 && (
            <li className={CSS.camperDetailsItem}>Kitchen</li>
          )}
          {camper.details.beds > 0 && (
            <li className={CSS.camperDetailsItem}>
              {camper.details.beds} beds
            </li>
          )}
          {camper.details.TV === 1 && (
            <li className={CSS.camperDetailsItem}>TV </li>
          )}
          {camper.details.airConditioner === 1 && (
            <li className={CSS.camperDetailsItem}>AC </li>
          )}
        </ul>
        <button
          type="button"
          onClick={() => toggleModal(camper)}
          className={CSS.showBtn}
        >
          Show more
        </button>
      </div>
    </div>
  );
};
export default CamperItem;

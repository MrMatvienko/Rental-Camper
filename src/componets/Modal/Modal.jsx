import CSS from "./Modal.module.css";
const Modal = ({ camper }) => {
  return (
    <>
      <div className={CSS.modalBackdrop}></div>
      <div className={CSS.modalContainer}>
        <h2 className={CSS.title}>{camper.name}</h2>
        <div>
          <p>Rating: {camper.rating}</p>
          <p>Location: {camper.location}</p>
        </div>
        <p>Price: €{camper.price}</p>
        <div className={CSS.imageContainer}>
          {camper.gallery.map((image, index) => (
            <img
              className={CSS.image}
              key={index}
              src={image}
              alt={`Camper Preview ${index + 1}`}
            />
          ))}
        </div>
        <p className={CSS.description}>{camper.description}</p>
        <div className={CSS.infoContainer}>
          <p>Features</p>
          <p>Reviews</p>
        </div>
      </div>
    </>
  );
};
export default Modal;

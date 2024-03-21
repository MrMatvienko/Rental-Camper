import CamperList from "../../componets/CamperList/CamperList";
import Filter from "../../componets/Filter/Filter";
import CSS from "./Rental.module.css";
const Rental = () => {
  return (
    <div className={CSS.rentalContainer}>
      <Filter />
      <CamperList />
    </div>
  );
};

export default Rental;

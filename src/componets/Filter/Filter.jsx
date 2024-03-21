import SearchBtn from "../Button/SearchBtn/SearchBtn";
import Equipment from "./Equipment/Equipment";
import Location from "./Location/Location";
import VehicleTypeType from "./VehicleType/VehicleType";

const Filter = () => {
  return (
    <>
      <Location />
      <Equipment />
      <VehicleTypeType />
      <SearchBtn />
    </>
  );
};

export default Filter;

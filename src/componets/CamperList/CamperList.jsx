import React, { useState, useEffect } from "react";
import CamperItem from "./CamperItem.jsx/CamperItem";
import CSS from "./CamperList.module.css";
import { getAdvertList } from "../../API/api";

const CamperList = () => {
  const [camperData, setCamperData] = useState([]);

  useEffect(() => {
    const fetchCamperData = async () => {
      try {
        const data = await getAdvertList();
        setCamperData(data);
      } catch (error) {
        console.error("Error fetching camper data:", error);
      }
    };

    fetchCamperData();
  }, []);

  return (
    <div className={CSS.camperList}>
      {camperData.length > 0 ? (
        camperData.map((camper) => (
          <CamperItem key={camper._id} camper={camper} />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CamperList;

import React, { useCallback, useEffect, useState } from "react";
import DonarHome from "../components/home/DonorHome";

const DonarPage = () => {
  const [allDonar, setAllDonar] = useState();
  const fetchAllDonars = useCallback(async () => {
    try {
      const setting = {
        method: "GET",
        type: "cors",
      };

      const response = await fetch("http://localhost:3300/donar/", setting);
      const data = await response.json();
      setAllDonar(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    if (!allDonar) {
      fetchAllDonars();
    }
  }, [allDonar, fetchAllDonars]);

  return <DonarHome data={allDonar || []} />;
};

export default DonarPage;

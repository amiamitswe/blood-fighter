import React, { useCallback, useEffect, useState } from "react";
import DonarHome from "../components/home/DonorHome";

const DonarPage = () => {
  const [allDonar, setAllDonar] = useState();
  const [searchName, setSearchName] = useState<string>("");

  const fetchAllDonars = useCallback(async (name: string) => {
    try {
      const setting = {
        method: "GET",
        type: "cors",
      };

      const response = await fetch(
        process.env.REACT_APP_API_URL + "/donar?name=" + name,
        setting
      );
      const data = await response.json();
      setAllDonar(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    // console.log(searchName);

    if (!allDonar) {
      fetchAllDonars(searchName as string);
    }
  }, [allDonar, fetchAllDonars, searchName]);

  return <DonarHome data={allDonar || []} setSearchName={setSearchName} />;
};

export default DonarPage;

import React from "react";

const PrivetRouter = (props: any) => {
  console.log(process.env.REACT_APP_API_URL);

  return <div>{props.children}</div>;
};

export default PrivetRouter;

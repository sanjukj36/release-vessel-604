import React from "react";
import errorImg from '@/assets/images/data_not_found.png';

const DataNotFound = () => {

   
  return (
    <div className="flex flex-col items-center justify-center h-screen px-10 text-destructive text-center">
      <img className="imgEffect" src={errorImg} alt="Error" />
      <h1 className="text-9xl">No Data Found</h1>
      <h1 className="text-4xl font-bold mb-4">Oops! Something went wrong.</h1>
      <p className="text-lg mb-8">
        We couldn't find the page you were looking for.
      </p>
     
    </div>
  );
};

export default DataNotFound;

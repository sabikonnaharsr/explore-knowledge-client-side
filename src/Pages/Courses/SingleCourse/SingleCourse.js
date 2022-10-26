import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleCourse = () => {
    const bookDetails = useLoaderData();
    console.log(bookDetails)
    const {title, name, description,image, price, rating} = bookDetails[0];
    
  console.log(bookDetails);
  return (
    <div>
      <div className="max-w-lg p-4 shadow-md mb-7 mt-6 dark:bg-gray-900 dark:text-gray-100">
        <div className="flex justify-between pb-4 border-bottom">
          <div className="flex items-center">
            <a
              rel="noopener noreferrer"
              href="#"
              className="mb-0 capitalize dark:text-gray-100"
            >
              
            </a>
          </div>
          <a rel="noopener noreferrer" href="#">
       
          </a>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <img
              src={image}
              alt=""
              className="block object-cover object-center w-full  h-full dark:bg-gray-500"
            />
            <div className="flex items-center text-xs">
              <span>Rating:{rating}</span>
            </div>
          </div>
          <div className="space-y-2">
            <a rel="noopener noreferrer" href="#" className="block">
              <h3 className="text-xl font-semibold dark:text-violet-400">
                {title}
              </h3>
            </a>
            <p className="leading-snug dark:text-gray-400">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCourse;

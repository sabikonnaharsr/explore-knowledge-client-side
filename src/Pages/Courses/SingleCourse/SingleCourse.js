import React, { useRef } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { useReactToPrint } from "react-to-print";

const SingleCourse = () => {
  const bookDetails = useLoaderData();
  console.log(bookDetails);
  const { title, name, description, image, price, rating } = bookDetails[0];

  const componentRef = useRef();
  const reactPdfPrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "CourseDetails",
    onafterprint: () => alert("Print Success"),
  });

  return (
    <div className="lg:p-20">
      <div className="lg:w-8/12 w-10/12 mx-auto  shadow-md mb-16 mt-6 lg:p-12">
        <div className="flex items-center justify-center mb-5">
          <button
            className="btn btn-ghost text-white bg-amber-400"
            onClick={reactPdfPrint}
          >
            PDF Download
          </button>
        </div>

        <div
          ref={componentRef}
          style={{ width: "100%", height: window.innerHeight }}
          className="space-y-4"
        >
          <div className="space-y-2">
            <img
              src={image}
              alt=""
              className="block object-cover object-center w-1/3 mx-auto  h-full dark:bg-gray-500"
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
            <p className="leading-snug dark:text-gray-400">{description}</p>
          </div>

          <Link to="/checkout">
            <button className="text-slate-50 bg-rose-600 font-bold mt-5 text-md rounded-md px-4 py-2">
              Check Out
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleCourse;

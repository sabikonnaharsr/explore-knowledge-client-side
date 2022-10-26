import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseDetails from "../CourseDetails/CourseDetails";
import LeftSideNav from "../LeftSideNav/LeftSideNav";

const Courses = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <section class="bg-[url(https://c1.wallpaperflare.com/preview/741/52/995/old-books-book-books-old.jpg)] bg-cover bg-center bg-no-repeat">
        <div className="grid grid-cols-9">
          <div className=" grid grid-cols-3 gap-16 col-span-7 bg-purple-400">
            {data.map((card) => (
              <CourseDetails key={card.uid} card={card}></CourseDetails>
            ))}
          </div>
          <div className="grid col-span-2 bg-amber-200">Slide Bar</div>
        </div>
      </section>
    </div>
  );
};

export default Courses;

import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthProvider } from "../../../contexts/AuthContextProvider/AuthContextProvider";
import CourseDetails from "../CourseDetails/CourseDetails";
import LeftSideNav from "../LeftSideNav/LeftSideNav";

const Courses = () => {
  const data = useLoaderData();
  const {books} = useContext(AuthProvider);
  const [category, setCategory] = useState([])
  useEffect( () => {
     fetch('https://router-firebase-assignments-10-server.vercel.app/categories')
     .then(res => res.json())
     .then(data => setCategory(data))
  }, []) 
  console.log(category)
  return (
    <div>
      <section class="bg-[url(https://c1.wallpaperflare.com/preview/741/52/995/old-books-book-books-old.jpg)] bg-cover bg-center bg-no-repeat">
        <div className="grid grid-cols-9">
          <div className=" grid grid-cols-3 gap-16 col-span-7 p-12">
            {data.map((card) => (
              <CourseDetails key={card.uid} card={card}></CourseDetails>
            ))}
          </div>
          <div className="grid col-span-2 bg-slate-800">
          <ul class="mt-4 space-y-2">
            {
              category.map(cd => <LeftSideNav key={cd.id} cd= {cd}></LeftSideNav>)
            }
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;

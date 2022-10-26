import React, { useContext } from "react";
import  { AuthProvider } from "../../../contexts/AuthContextProvider/AuthContextProvider";

const CourseDetails = ({ card }) => {
  const {handleCard} = useContext(AuthProvider)
  const { image, description} = card;
  return (
    <div>
      {/* <a href="/" class="group relative block bg-black">
        <img
          alt="Developer"
          src={card.image}
          class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
        />

        <div class="relative p-8">
          <p class="text-sm font-medium uppercase tracking-widest text-pink-500">
            {card.name}
          </p>

          <p class="text-2xl font-bold text-white">{card.title}</p>

          <div class="mt-64">
            <div class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
              <p class="text-sm text-white">{}</p>
            </div>
          </div>
        </div>
      </a> */}

      
<div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    <div className="h-[300px]">
        <img class="rounded-t-lg h-full w-full" src={image} alt=""/>
    </div>
    <div class="p-5">
        <a href="/">
            <h5 class="mb-2 text-2xl text-start font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 text-start dark:text-gray-400">{description.slice(0, 75)}</p>
        <a  onClick={() => handleCard(card)} class="inline-flex py-2 px-3 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
    </div>
</div>

    </div>
  );
};

export default CourseDetails;

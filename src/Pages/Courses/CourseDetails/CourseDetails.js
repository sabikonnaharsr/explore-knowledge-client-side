import React from "react";
import SingleCourse from "../SingleCourse/SingleCourse";

const CourseDetails = ({ card }) => {
  const { title, name, image, details, price } = card;
  return (
    <div>
      <a href="#" class="group relative block bg-black">
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
      </a>
    </div>
  );
};

export default CourseDetails;

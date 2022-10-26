import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSideNav = ({ cd }) => {
  console.log(cd);
  // const { title, rating } = cd;
  return (
    <li>
      <a
        href="/"
        class="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600"
      >
        <strong class="font-medium text-white">
          <NavLink to= '/' >{cd.name}</NavLink>
        </strong>

        <p class="mt-1 text-xs font-medium text-gray-300"></p>
      </a>
    </li>
  );
};

export default LeftSideNav;

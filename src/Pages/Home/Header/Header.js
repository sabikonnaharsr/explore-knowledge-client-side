import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <section class="relative bg-[url(https://c1.wallpaperflare.com/preview/741/52/995/old-books-book-books-old.jpg)] bg-cover bg-center bg-no-repeat">
 
        <div class="absolute inset-0"></div>

        <div class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div class="max-w-xl text-center sm:text-left">
            <h1 class="text-3xl font-extrabold sm:text-5xl">
              Let us find your
              <strong class="block font-extrabold text-rose-700">
                Forever Knowledge.
              </strong>
            </h1>

            <p class="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
              The phrase ‘Knowledge is Power’ generally implies that with
              knowledge and education the potential of a person increases. The
              power of knowledge is certainly unmatched. Being well learned and
              sharing knowledge is widely recognized as the core of increasing
              one’s influence and gaining respect. One can achieve greatest
              heights of success in life with the power of knowledge!
            </p>

            <div class="mt-8 flex flex-wrap gap-4 text-center">
              <Link
                to="/courses"
                class="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                Get Started
              </Link>

              <Link
                to="/books"
                class="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;

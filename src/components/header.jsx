import React from "react";

export default function Header() {
  return (
    <div
      className="header relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 min-h-screen flex items-center justify-center"
      id="home"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center">
          <div
            className="sm:w-2/3 pr-8 pl-8"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h1 className="text-4xl font-bold text-white">
              Lorem ipsum dolor sit amet.
            </h1>
            <p className="mt-4 text-lg text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus laboriosam accusantium labore incidunt aspernatur! Aspernatur ut recusandae exercitationem ipsam minima.
            </p>
          </div>
          <div className="sm:w-1/3 mt-6 sm:mt-0 sm:ml-6">
            <img
              className="w-full h-auto rounded-lg shadow-lg"
              src="/astronaut_2.png"
              alt="About Us"
              data-aos="fade-up"
              data-aos-duration="1000"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projects = [
  {
    title: "Project 1",
    description: "Disusun Untuk memenuhi tugas mata kuliah ITW",
    image: "/projek1.jpg",
  },
  {
    title: "Project 2",
    description: "Disusun Untuk memenuhi tugas mata kuliah ITW",
    image: "/projek2.jpg",
  },
  {
    title: "Project 3",
    description: "Disusun Untuk memenuhi tugas mata kuliah PW",
    image: "/projek3.jpg",
  },
];

export default function Project() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section id="project" className="py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2
          className="text-3xl font-bold text-white text-center"
          data-aos="zoom-in-up"
          data-aos-duration="700"
        >
          Projects
        </h2>
        <Slider {...settings} className="mt-8">
          {projects.map((project, index) => (
            <div key={index} className="p-4" data-aos="zoom-in-up">
              <div className="w-3/3 h-[25rem] rounded-lg shadow-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-top rounded-lg shadow-lg object-cover"
                />
              </div>
              <h3 className="mt-4 text-2xl font-bold text-white">
                {project.title}
              </h3>
              <p className="mt-2 text-lg text-gray-300">
                {project.description}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

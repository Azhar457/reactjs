import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

const UNSPLASH_ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

export default function Skill() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const storedImages = localStorage.getItem("unsplashImages");
    if (storedImages) {
      setImages(JSON.parse(storedImages));
    } else {
      fetchImages();
    }
  }, []);

  const fetchImages = async () => {
    try {
      const response = await fetch(
        `https://api.unsplash.com/photos/random?count=6&query=technology&client_id=${UNSPLASH_ACCESS_KEY}`
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      setImages(data);
      localStorage.setItem("unsplashImages", JSON.stringify(data));
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  return (
    <section id="skill" className="py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2
          className="text-3xl font-bold text-white text-center mb-10"
          data-aos="zoom-in-up"
          data-aos-duration="700"
        >
          Image From Unsplash
        </h2>
        <div className="flex flex-wrap justify-center">
          {images.map((image, index) => (
            <Card
              key={index}
              className="bg-gray-800 p-4 m-4 rounded-2xl shadow-lg text-center w-80"
            >
              <CardHeader color="blue-gray" className="relative h-56">
                <img
                  src={image.urls.small}
                  alt={image.alt_description}
                  className="w-full h-full object-cover rounded-lg"
                />
              </CardHeader>
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {image.alt_description || "Technology"}
                </Typography>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

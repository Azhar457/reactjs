import React from "react";

export default function Profile() {
  return (
    <section id="profile" className="py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center">
          <div className="sm:w-1/3 mt-6 sm:mt-0 sm:mr-6">
            <img
              className="w-full h-auto rounded-lg shadow-lg"
              src="/avatar.png"
              alt="Profile"
              data-aos="fade-right"
              style={{ animationDuration: "1s", filter: "invert(1)" }}
            />
          </div>
          <div className="sm:w-2/3 pr-8 pl-8" data-aos="fade-left">
            <h2 className="text-3xl font-bold text-white">Profile</h2>
            <p className="mt-4 text-lg text-gray-300 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde facilis ratione minus, vero quo eum libero perferendis quae voluptates dolorem porro reprehenderit harum deserunt cupiditate architecto quam tenetur impedit ut, consectetur mollitia asperiores. Perspiciatis qui aliquam eveniet quae nobis molestias delectus suscipit sed architecto facilis, iste voluptate necessitatibus reprehenderit consequuntur.
            </p>
            <p className="mt-4 text-lg text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque sapiente quo tempora doloremque qui quibusdam nesciunt consectetur quae cupiditate saepe tempore repellat, illo provident. Alias.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

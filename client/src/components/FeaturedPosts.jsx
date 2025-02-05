import React from "react";
import Imagee from "./Imagee";
import { Link } from "react-router-dom";

const FeaturedPosts = () => {
  return (
    <div className="mt-8 flex flex-col lg:flex-row gap-8">
      {/* First */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* Image */}
        <Imagee src="featured1.jpeg" className="rounded-xl object-cover" />
        {/* Details */}
        <div className="flex items-center gap-4">
          <h1 className="font-semibold lg:text-lg">01.</h1>
          <Link className="text-blue-800 lg:text-lg">Web design</Link>
          <span className="text-gray-500">2 days ago</span>
        </div>
        {/* Title */}
        <Link
          to="/test"
          className="text-xl lg:text-3xl font-semibold lg:font-bold"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Link>
      </div>
      {/* Others */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* Second */}
        <div className="flex lg:h-1/3 justify-between gap-4">
          <Imagee
            src="featured2.jpeg"
            className="rounded-3xl object-cover w-1/3 aspect-video"
          />
          {/* Details and Title */}
          <div className="w-2/3">
            {/* details */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">02.</h1>
              <Link className="text-blue-800">Web Design</Link>
              <span className="text-gray-500 text-sm">2 days ago</span>
            </div>
            {/* title */}
            <Link
              to="/test"
              className="text-base sm:text-lg md:text-2xl lg:text-2xl font-medium"
            >
              Lorem Ipsum is simply dummy text of the printing industry.
            </Link>
          </div>
        </div>

        {/* Second */}
        <div className="flex lg:h-1/3 justify-between gap-4">
          <Imagee
            src="featured3.jpeg"
            className="rounded-3xl object-cover w-1/3 aspect-video"
          />
          {/* Details and Title */}
          <div className="w-2/3">
            {/* details */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">02.</h1>
              <Link className="text-blue-800">Web Design</Link>
              <span className="text-gray-500 text-sm">2 days ago</span>
            </div>
            {/* title */}
            <Link
              to="/test"
              className="text-base sm:text-lg md:text-2xl lg:text-2xl font-medium"
            >
              Lorem Ipsum is simply dummy text of the printing industry.
            </Link>
          </div>
        </div>

        {/* Second */}
        <div className="flex lg:h-1/3 justify-between gap-4">
          <Imagee
            src="featured4.jpeg"
            className="rounded-3xl object-cover w-1/3 aspect-video"
          />
          {/* Details and Title */}
          <div className="w-2/3">
            {/* details */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">02.</h1>
              <Link className="text-blue-800">Web Design</Link>
              <span className="text-gray-500 text-sm">2 days ago</span>
            </div>
            {/* title */}
            <Link
              to="/test"
              className="text-base sm:text-lg md:text-2xl lg:text-2xl font-medium"
            >
              Lorem Ipsum is simply dummy text of the printing industry.
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPosts;

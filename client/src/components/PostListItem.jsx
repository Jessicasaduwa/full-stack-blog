import React from "react";
import { Link } from "react-router-dom";
import Imagee from "./Imagee";

const PostListItem = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-8 mb-12">
      <div className="md:hidden xl:block xl:w-1/3">
        <Imagee
          src="postImg.jpeg"
          className="rounded-2xl object-cover"
          w="800"
        />
      </div>
      {/* details */}
      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link to="/test" className="text-4xl font-semibold">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Link>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>Written by</span>
          <Link className="text-blue-800">John Doe</Link>
          <span>on</span>
          <Link className="text-blue-800">Web Design</Link>
          <span>2 days ago</span>
        </div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <Link to="/test" className="underline text-blue-800 text-sm">
          Read more
        </Link>
      </div>
    </div>
  );
};

export default PostListItem;

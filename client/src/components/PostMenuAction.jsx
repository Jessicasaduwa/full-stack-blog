import React from "react";

const PostMenuAction = () => {
  return (
    <div className="mt-8 mb-4 text-sm font-medium">
      <h1>Actions</h1>
      <div className="flex items-center gap-2 py-2 text-sm cursor-pointer">
        <svg
          xmlns="https://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="20px"
          height="20px"
        >
          <path
            d="M12 4C10.3 4 9 5.3 9 7v34l15-9 15 9V7c0-1.7-1.3-3-3-3H12z"
            stroke="black"
            strokeWidth="2"
          />
        </svg>
        <span>Save this Post</span>
      </div>
      <div className="flex items-center gap-2 py-2 text-sm cursor-pointer">
        {/* <svg
          xmlns="https://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
          fill="red"
          width="20px"
          height="20px"
        >
          <path
            d="M 21 2 C 19.354545 2 18 3.3545455 18 5 L 18 7 L 10.154297 7 A 1.0001 1.0001 0 0 0 9.984375 6.9863281 A 1.0001 1.0001 0 0 0 9.984375"
            stroke="black"
            strokeWidth="2"
          />
        </svg> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="rgba(201,4,4,1)"
        >
          <path d="M7 4V2H17V4H22V6H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V6H2V4H7ZM6 6V20H18V6H6ZM9 9H11V17H9V9ZM13 9H15V17H13V9Z"></path>
        </svg>
        <span>Delete this Post</span>
      </div>
    </div>
  );
};

export default PostMenuAction;

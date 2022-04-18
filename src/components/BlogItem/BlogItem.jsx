import React from "react";
import { UserIcon } from "@heroicons/react/solid";
import "./BlogsItem.css";

const BlogItem = ({ blog: { title, description, publisher, img } }) => {
  return (
    <div className="row shadow-lg my-4">
      <div className="col-md-4 p-0">
        <div className="h-100">
          <img
            src={img}
            alt=""
            className="img-fluid h-100"
            width="100%"
            height="100%"
          />
        </div>
      </div>
      <div className="col-md-8">
        <div className="text-center">
          <h2 className="my-3">{title}</h2>
          <p className="mt-5">{description}</p>
        </div>
        <p className="d-flex align-items-center">
          <UserIcon className="icon" />
          By {publisher}
        </p>
      </div>
    </div>
  );
};

export default BlogItem;

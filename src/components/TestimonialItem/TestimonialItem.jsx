import React from "react";

const TestimonialItem = ({ testimonial: { name, from, img, desc } }) => {
  return (
    <div className="col-md-6">
      <div class="row shadow p-5 g-3">
        <div className="col-md-4">
          <img
            className="rounded-circle border border-5 img-fluid"
            src={img}
            alt=""
            width="100%"
            height="100%"
          />
        </div>
        <div className="col-md-8 d-flex align-items-center">
          <div>
            <h3>{name}</h3>
            <small>{from}</small>
            <p>{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialItem;

import React from "react";
import useTestimonials from "../../hooks/useTestimonials";
import TestimonialItem from "../TestimonialItem/TestimonialItem";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useTestimonials();
  return (
    <div className="">
      <div className="container mt-5">
        <h1 className="text-center my-4">TESTIMONIAL</h1>
        <h5 className="text-center mb-4">What our customers say about us</h5>
        <div className="mt-5">
          <div className="row">
            {testimonials.map((testimonial) => (
              <TestimonialItem key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

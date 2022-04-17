import React from "react";

const Footer = () => {
  const date = new Date();
  const current = date.getFullYear();
  return (
    <div className="my-5">
      <p className="text-center">&copy; CopyRight {current} by MD.ZIHAD </p>
    </div>
  );
};

export default Footer;

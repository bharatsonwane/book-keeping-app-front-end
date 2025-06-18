import React from "react";

const Header = ({ data }) => {
  const header = data?.find((ele) => ele.type == "heading");

  return (
    <div>
      <div>
        <label className="text-2xl font-semibold pb-4">{header?.label}</label>
      </div>
    </div>
  );
};

export default Header;

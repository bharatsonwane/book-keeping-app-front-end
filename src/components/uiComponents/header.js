import React from "react";

const Header = ({ label } = {}) => {

  return (
    <div
      className="form-group  col-lg-6 col-md-6 col-sm-6 col-xs-12"
      data-testid="basic-input-element"
    >
      <label className="text-2xl font-semibold pb-4">{label}</label>
    </div>
  );
};

export default Header;

import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "src/components/ui/button";

const Header = ({ data }) => {
  const header = data?.find((ele) => ele.type == "heading");

  const navigate = useNavigate();

  return (
    <div>
      <div className="flex justify-between">
        <label className="text-2xl font-semibold pb-4">{header?.label}</label>

        <Button onClick={() => navigate(`/app/home/list/entity-details`)}>
          Add Entries
        </Button>
      </div>
    </div>
  );
};

export default Header;

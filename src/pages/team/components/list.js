import { Searchbox } from "../../../components/searchbox";
import React, { useState } from "react";

const TeamList = () => {
  const [search, changeSearch] = useState("");
  const onChangeSearch = (e) => {
    let value = e.target.value;

    changeSearch(value);
  };
  return (
    <>
      <div
        className={`p-2 container-fluid d-flex flex-row justify-content-between bg-primary text-white`}
      >
        <h4>Team</h4>
        <div className="w-20">
          <Searchbox
            value={search}
            onChange={onChangeSearch}
            placeholder={"Search on home"}
          />
        </div>
      </div>
    </>
  );
};
export default TeamList;

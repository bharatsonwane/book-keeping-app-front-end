import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Loading = () => {
  const navigate = useNavigate();
  // const { data, error, isLoading } = useGetUiConfigQuery();

  useEffect(
    () => {
      //   if (data && !isLoading && !error) {
      //     navigate("/entity-home");
      //   }
    },
    [
      // data, isLoading, error
    ]
  );

  return (
    <div className="h-[100vh] w-full flex justify-center items-center">
      <div className="text-5xl animate-pulse">Loading Permissions...</div>
    </div>
  );
};

export default Loading;

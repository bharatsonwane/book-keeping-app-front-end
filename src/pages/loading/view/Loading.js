import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  useGetUiConfigQuery,
  useLazyGetUiConfigQuery,
} from "../../../redux/api/sidebar.api";

const Loading = () => {
  const navigate = useNavigate();
  const { data } = useGetUiConfigQuery();

  if (data?.data?.children?.length > 0) {
    navigate(`/app/home/list/${data?.data?.children[0]?.schemaId}`);
  }

  return (
    <div className="h-[100vh] w-full flex justify-center items-center">
      <div className="text-5xl animate-pulse">Loading Permissions...</div>
    </div>
  );
};

export default Loading;

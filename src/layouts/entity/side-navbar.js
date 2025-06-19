import { Button } from "src/components/ui/button";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// import { cn } from "@/lib/utils";
import { useLocation, useNavigate } from "react-router-dom";
import { cn } from "src/lib/utils";

const SideNavbar = () => {
  const navigate = useNavigate();
  const ui = useSelector((state) => state.entities);

  const pathName = useLocation();
  const [selectedEntity, setSelectedEntity] = useState(null);

  useEffect(() => {
    const currentPath = pathName.pathname.split("/")[2]; // after /entity/:table_name

    if (currentPath && ui?.uiEntities?.children?.length > 0) {
      const matchedEntity = ui.uiEntities.children.find(
        (entity) => entity.table_name === currentPath
      );

      if (matchedEntity) {
        setSelectedEntity(matchedEntity.display_name);
      }
    }
  }, [pathName.pathname, ui.uiEntities]);

  return (
    <div className="w-[17%] border-r h-full flex flex-col items-center px-4">
      <div className="w-full flex flex-col mt-3 gap-1">
        {ui?.uiEntities?.children?.map((ele, i) => {
          return (
            <Button
              key={i}
              variant="ghost"
              className={cn(
                "w-full justify-start flex items-center",
                selectedEntity === ele.label && "bg-muted text-primary"
              )}
              onClick={() => {
                navigate(`/app/home/list/${ele.schemaId}`);
                setSelectedEntity(ele.label);
              }}
            >
              {ele.label}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default SideNavbar;

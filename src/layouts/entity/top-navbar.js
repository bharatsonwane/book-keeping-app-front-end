import { Database, Settings, User } from "lucide-react";
import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "src/components/ui/popover";
import { Button } from "src/components/ui/button";
import { useDispatch } from "react-redux";
import { logOutUser } from "src/redux/slice/auth";
import { useNavigate } from "react-router-dom";
import { resetEntities } from "src/redux/slice/entities";

const TopNavbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutUser = () => {
    dispatch(logOutUser());
    dispatch(resetEntities());
    localStorage.removeItem("persist:root");
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <div className="h-[8vh] flex justify-between items-center px-5 border-b">
      <div className="flex gap-1 items-center">
        <Database className="size-6" />
        <p className="font-semibold text-lg">Entity Management</p>
      </div>

      <div className="font-semibold text-xl">Domain</div>

      <div className="flex gap-5 items-center">
        <Settings className="size-4" />

        {/* User Icon with Popover */}
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" size="icon" className="p-0">
              <User className="size-5" />
            </Button>
          </PopoverTrigger>
          <PopoverContent align="end" side="bottom" className="w-32">
            <Button
              variant="destructive"
              className="w-full"
              onClick={() => logoutUser()}
            >
              Logout
            </Button>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default TopNavbar;

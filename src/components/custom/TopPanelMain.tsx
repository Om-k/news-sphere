import Button from "../ui/Button";
import { MdTune } from "react-icons/md";
import { guardianAPI } from "../../services/axiosInstances";
import { Navigate, useNavigate } from "react-router-dom";

const TopPanelMain = () => {
  const navigator = useNavigate()

  return (
    <div className="bg-primary border border-secondary p-2 flex justify-between items-center rounded-md mb-5">
      <h2
        className="ml-3"
      >
        Hello There!
      </h2>
      <Button
        variant="filled"
        icon={<MdTune />}
        onClick={async () => {
          navigator("/personalize")
        }}
      >
        <p className="hidden md:flex" >Personalize</p>
      </Button>
    </div>
  );
};

export default TopPanelMain;

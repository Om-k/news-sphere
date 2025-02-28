import Button from "../ui/Button"
import { MdTune } from "react-icons/md";

const TopPanelMain = () => {
    return  <div className="bg-primary border border-secondary p-2 flex justify-between items-center rounded-md mb-5">
        <h2 className="ml-3" >Hello There!</h2>
        <Button variant="filled" icon={<MdTune/>} onClick={() => {}} >Personalize</Button>
    </div>
}

export default TopPanelMain
import { MdDeleteForever } from "react-icons/md";
import { Checkbox } from "@/components/ui/checkbox";

const TaskCard = () => {
  return (
    <div className="border px-5 py-5 rounded-md flex justify-between max-w-2xl mx-auto">
      <div className="">
        <div className="flex gap-2 items-center ">
          {/* <div
            className={cn("size-3 rounded-full", {
              "bg-green-500 ": task.priority === "Low",
              "bg-yellow-500": task.priority === "Medium",
              "bg-red-500": task.priority === "High",
            })}
          ></div> */}
          <h1></h1>
        </div>
        <p>AssignedTo : </p>
        <p className="py-5"></p>
      </div>
      <div className="flex gap-3 items-center">
        <button className="text-red-500 text-xl">
          <MdDeleteForever />
        </button>
        <Checkbox />
      </div>
    </div>
  );
};

export default TaskCard;

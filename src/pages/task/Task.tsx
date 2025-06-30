import { TaskModel } from "@/components/task/TaskModel";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Task = () => {
  return (
    <div className="py-10">
      <div className="flex max-w-2xl mx-auto justify-between">
        <Tabs defaultValue="All">
          <TabsList className="grid grid-cols-4">
            <TabsTrigger value="All">All</TabsTrigger>
            <TabsTrigger value="Low">Low</TabsTrigger>
            <TabsTrigger value="Medium">Medium</TabsTrigger>
            <TabsTrigger value="High">High</TabsTrigger>
          </TabsList>
        </Tabs>
        <TaskModel></TaskModel>
      </div>
      {/* <div>
        {tasks?.map((task: ITasks, idx: number) => {
          return <TaskCard task={task} key={idx}></TaskCard>;
        })}
      </div> */}
    </div>
  );
};

export default Task;

import { MdDeleteForever } from "react-icons/md";

const UserCard = () => {
  return (
    <div>
      <div className="border px-5 py-5 rounded-md flex justify-between max-w-2xl mx-auto">
        <h2>Joy</h2>
        <div className="flex gap-3 items-center">
          <button className="text-red-500 text-xl">
            <MdDeleteForever />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;

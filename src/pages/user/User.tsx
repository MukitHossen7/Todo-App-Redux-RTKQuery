import { UserModel } from "@/components/user/UserModel";

const User = () => {
  return (
    <div>
      <div className="py-10">
        <div className="flex max-w-2xl mx-auto justify-between">
          <UserModel></UserModel>
        </div>
        {/* <div>
          {users?.map((userData: IUser, idx: number) => {
            return <UserCard userData={userData} key={idx}></UserCard>;
          })}
        </div> */}
      </div>
    </div>
  );
};
export default User;

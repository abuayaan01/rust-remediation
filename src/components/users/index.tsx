import { useUserCtx } from "@/context/UserContext";
import useUser from "./useUser";

function UsersList() {
  const user = useUserCtx();
  console.log(user)
  const { state: d } = useUser();
  if(d.loading){
    return <>Loadinnggg....</>
  }

  // console.log(d);
  return (
    <div>
      {d.data.map((u) => (
        <p>{u.name}</p>
      ))}
      asd
    </div>
  );
}

export default UsersList;

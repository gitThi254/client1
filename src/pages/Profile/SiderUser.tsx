import User from "../User";
import Loader_image from "../../common/Loader_image";
import { useVerify } from "../../hooks/auth.hook";

const SiderUser = () => {
  const user = useVerify();
  if (user?.isPending) return <Loader_image />;
  return (
    <div>
      <User />
    </div>
  );
};

export default SiderUser;

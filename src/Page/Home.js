import { Outlet } from "react-router-dom";
import Menu from "../Menu/Menu";

function Home(props) {
  return (
    <div>
      <h1 className="header">Quản Lý Ô Tô</h1>
      <Menu />
      <Outlet />
    </div>
  );
}

export default Home;

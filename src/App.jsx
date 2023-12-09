import { Outlet } from "react-router-dom";
import Footer from "./Components/Shared/Footer";
import NavBar from "./Components/Shared/NavBar";

function App() {
  return (
    <div className="">
      <NavBar />
      <div className="min-h-[calc(100vh-72px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;

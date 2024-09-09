import "./HomePage.css";
import TeamContent from "../TeamContent/TeamContent.jsx";
import Sidebar from "../Sidebar/Sidebar.jsx";

function HomePage() {
  return (
    <div className="homepage">
      <Sidebar />
      <TeamContent />
    </div>
  );
}

export default HomePage;

import "./styles.css";
import SideBar from "./Sidebar.js";
import Main from "./Main";
export default function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <SideBar />
      </div>
      <div className="main">
        <Main />
      </div>
    </div>
  );
}

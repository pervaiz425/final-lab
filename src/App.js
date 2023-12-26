import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Rockets from "./components/Rockets";
import Missions from "./components/Missions";
import MyProfile from "./components/MyProfile";
import axios from "axios";
import { useDispatch } from "react-redux";
import { reserveRocket, cancelRocket } from "/node_modules/redux/slices/rocketsSlice";
import { joinMission, leaveMission } from "/node_modules/redux/slices/missionsSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch Rockets
    axios
      .get("https://api.spacexdata.com/v4/rockets")
      .then((response) => {
        console.log(response.data);
        dispatch(reserveRocket(response.data)); // Assuming you want to reserve rockets
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching rockets:", error);
      });

    // Fetch Missions
    axios
      .get("https://api.spacexdata.com/v3/missions")
      .then((response) => {
        dispatch(joinMission(response.data)); // Assuming you want to join missions
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching missions:", error);
      });
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route path="/rockets" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/my-profile" element={<MyProfile />} />
      </Routes>
    </Router>
  );
}

export default App;

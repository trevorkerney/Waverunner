import { useState } from "react";

import Sidebar from "./components/Sidebar/Sidebar";
import Titlebar from "./components/Titlebar/Titlebar";

import { LibraryLocation } from "./ts/types";

import "./Waverunner.css";

function Waverunner() {

  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

  const [libLocations, setLibLocations] = useState<LibraryLocation[]>([]);
  
  return (
    <div id="waverunner">
      <Titlebar />
      <main>
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          libLocations={libLocations}
        />
      </main>
    </div>
  );
}

export default Waverunner;

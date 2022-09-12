import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import SharedLayout from'./Components/Sharedlayout';
import Authentication from './Components/Authentication/Authentication'
import Database from './Components/Database/Database'
import Functions from './Components/Functions/Functions'
import Hosting from './Components/Hosting/Hosting'
import Storage from './Components/Storage/Storage'
import NotificationBell from './Components/NotificationBell/NotificationBell'
import MachineLearning from './Components/MachineLearning/MachineLearning'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
          <Route path="Navbar" element={<Navbar />}></Route>
          <Route path="NotificationBell" element={<NotificationBell />}></Route>
          <Route path="authentication" element={<Authentication />}></Route>
          <Route path="database" element={<Database />}></Route>
          <Route path="functions" element={<Functions />}></Route>
          <Route path="hosting" element={<Hosting />}></Route>
          <Route path="storage" element={<Storage />}></Route>
          <Route path="machinelearning" element={<MachineLearning />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

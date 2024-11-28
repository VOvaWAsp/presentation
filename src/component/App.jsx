import { Route, Routes } from "react-router-dom";
import FirstPage from "../pages/FirstPage/FirstPage.jsx";
import WebSite from "../pages/WebSite/WebSite.jsx";
import Usefull from "../pages/Usefull/Usefull.jsx";
import StructureDataBase from "../pages/StructureDataBase/StructureDataBase.jsx";
import ForExample from "../pages/ForExample/ForExample.jsx";
import Youtubes from "../pages/Youtubes/Youtubes.jsx";
import Result from "../pages/Result/Result.jsx";
import Error from "../pages/Error/Error.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<FirstPage />} />
      <Route path="/web-site" element={<WebSite />} />
      <Route path="/usefull" element={<Usefull />} />
      <Route path="/structure-data-base" element={<StructureDataBase />} />
      <Route path="/for-example" element={<ForExample />} />
      <Route path="/youtubes" element={<Youtubes />} />
      <Route path="/result" element={<Result />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;

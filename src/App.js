import { Routes, Route, Navigate } from "react-router-dom";
import Table from "./Logins";
import Main from "./Main";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/adm__pass" element={<Table />} />
        <Route path=" " element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App
import LogIn from "./pages/LogIn";
import SingUp from "./pages/SingUp";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import { DataInterface } from "./Interfaces/DataInterface";
import { useEffect, useState } from "react";

function App() {
  const [userData, setUserData] = useState<DataInterface>({
    age: "",
    cedula: "",
    cell_phone_number: "",
    email: "",
    full_name: "",
    gender: "",
  });

  const handleUserData = (data: any) => {
    setUserData(data);
  };

  return (
    <div className="d-flex justify-content-center align-items-center full-height">
      <div className="text-center">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to={"/LogIn"} />} />
            <Route
              path="/LogIn"
              element={<LogIn userData={handleUserData} />}
            ></Route>
            <Route path="/SingUp" element={<SingUp />}></Route>
            <Route
              path="/Home"
              element={
                <Home
                  age={userData.age}
                  cedula={userData.cedula}
                  cellPhone={userData.cell_phone_number}
                  email={userData.email}
                  fullName={userData.full_name}
                  gender={userData.gender}
                />
              }
            ></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

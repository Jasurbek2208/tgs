import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

// Layout
import AdminLayout from "../layout/adminLayout/AdminLayout";

// AUTH
import Login from "../pages/auth/Login";

// ADMIN PAGE
import {UsersMain} from "../Components/usermain/UsersMain";
import Positions from "../pages/admin/positions/Positions";
import Fields from "../pages/admin/fields/Fields";
import Settings from "../pages/settings/Settings";

export interface IAuth {
  auth?: {
    token: string;
    _id: number;
    phoneNumber: string;
    password: string;
    isAuth: boolean;
  };
}

export default function Router() {
  const isAuth = localStorage.getItem("ISAUTH") || false;
  const navigate = useNavigate();
  
  return (
    <Routes>
      {!isAuth ? (
        <>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </>
      ) : (
        <>
          <Route element={<AdminLayout />}>
            <Route path="/users" element={<UsersMain />} />
            <Route path="/fields" element={<Fields />} />
            <Route path="/positions" element={<Positions />} />
            <Route path="/settings" element={<Settings/>} />
            <Route path="*" element={<Navigate to="users" />} />
          </Route>
        </>
      )}
    </Routes>
  );
}
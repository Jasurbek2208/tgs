import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../../Components/navbar/Navbar";
import Sidebar from "../../Components/sidebar/Sidebar";

export default function () {
  return (
    <StyledLayout className="w-100 d-flex">
      <Sidebar />
      <div className="layout">
        <Navbar />
        <Outlet />
      </div>
    </StyledLayout>
  );
}
const StyledLayout = styled.div`
  .layout {
    margin-left: 100px;
    width: 92%;
    height: 100vh;
    background: #f8f8f8;
  }
`;

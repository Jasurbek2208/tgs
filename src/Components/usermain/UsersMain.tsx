import React, { useContext, useEffect, useState } from "react";
//
import AddUserModal from "../addUserModal/userAddModal/AddUserModal";
import SearchInput from "../searchinput/SerchInput";
import UsersCard from "./usersCard/UsersCard";
import { UsersStyled } from "./UsersStyled";

export const UsersMain: React.FC = () => {
  const [isopen, setisopen] = useState<boolean>(false);

  return (
    <UsersStyled>
      <section className="user--card">
        <div className="first--div">
          <div className="tag--div">
            <h2>4 Users selected</h2>
          </div>
          <div className="icon--div">
            <div className="icon icon-icon1"></div>
            <div
              className="icon icon-icon2"
              onClick={() => (setisopen(true))}
            ></div>
            <div className="icon icon-icon3"></div>
            <div className="icon icon-icon4"></div>
            <div className="icon icon-dont"></div>
          </div>
        </div>
        <div className="second--div">
          <SearchInput />
        </div>
        <div className="end--div">
          <div className="user-information">
            <div className="expand">
              <input type="checkbox" />
              <p>Full name</p>
            </div>
          </div>
        </div>
      </section>
      {/* USERS CARD */}
      {/* <UsersCard /> */}

      {/* ADD USER MODAL */}
      {isopen ? <AddUserModal adduser={true} set={setisopen} /> : null}

      {/* <AddUserModal /> */}
      <UsersCard />
    </UsersStyled>
  );
};

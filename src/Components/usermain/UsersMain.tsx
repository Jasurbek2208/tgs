import React, { useContext, useEffect, useState } from "react";
//
import AddUserModal from "../addUserModal/userAddModal/AddUserModal";
import SearchInput from "../searchinput/SerchInput";
import UsersCard from "./usersCard/UsersCard";
import { UsersStyled } from "./UsersStyled";

export const UsersMain: React.FC = () => {
  const { Getusers, deletePosition, userPosit, loading } =
    useContext<IContext>(MyContext);
  const [isopen, setisopen] = useState<boolean>(false);
  const [checkStore, setCheckStore] = useState<string[]>([]);

  const [curent, setCurent] = useState({
    _id: "",
    name: {
      uz: "",
      ru: "",
      en: "",
    },
  });

  // DELETE LOGICKASI....
  function checkedClick(id: string) {
    if (checkStore.includes(id)) {
      setCheckStore((p) => p.filter((i) => i !== id));
    } else {
      setCheckStore((p) => [...p, id]);
    }
  }

  function allChecked(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.checked) {
      userPosit?.data?.forEach((i: IData) => {
        if (!checkStore.includes(i._id)) {
          setCheckStore((p) => [...p, i._id]);
        }
      });
    } else {
      setCheckStore([]);
    }
  }

  function deletePosit() {
    if (deletePosition) {
      deletePosition({ ids: checkStore });
    }
  }
  // ========================================

  // get
  useEffect(() => {
    if (Getusers) {
      Getusers();
    }
  }, []);

  return (
    <UsersStyled>
      <section className="user--card">
        <div className="first--div">
          <div className="tag--div">
            <h2>4 Users selected</h2>
          </div>
          <div className="icon--div">
            {checkStore.length > 0 ? (
              <div className="icon icon-icon1" onClick={deletePosit}></div>
            ) : null}
            <div
              className={
                "icon " +
                (checkStore.length === 1 ? "icon-icon2" : "icon-addUser")
              }
              onClick={() => {
                setisopen(true);
              }}
            ></div>
            <div className="icon icon-icon3"></div>
            <div className="icon icon-icon4"></div>
            <div className="icon icon-icon5"></div>
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
            <div className="expand">
              <p>Date</p>
            </div>
            <div className="expand">
              <p>Title</p>
            </div>
            <div className="expand">
              <p>Title</p>
            </div>
            <div className="expand">
              <p>Title</p>
            </div>
            <div className="expand">
              <p>Title</p>
            </div>
            <div className="expand">
              <p>Status</p>
            </div>
          </div>
        </div>
      </section>
      {loading ? (
        <Loader />
      ) : (
        userPosit?.data?.map((i: any, idx: number) => (
          <div className="map" key={idx}>
            <div className="fullName">
              <input
                type="checkbox"
                checked={checkStore.includes(i._id)}
                onChange={() => {
                  checkedClick(i._id);
                  setCurent(i);
                }}
              />
              <p
                onClick={() => {
                  setisopen(true);
                  setCurent(i);
                }}
              >
                {i?.name.uz}
              </p>
            </div>
            <div className="date">
              <p>{i?.__v}</p>
            </div>
            <div className="soha">
              <p>{i?.name.ru}</p>
            </div>
            <div className="brand">
              <p>{i?.name.en}</p>
            </div>
          </div>
        ))
      )}

      {/* USERS CARD */}
      {/* <UsersCard /> */}

      {/* ADD USER MODAL */}
      {isopen ? <AddUserModal adduser={true} set={setisopen} /> : null}

      {/* <AddUserModal /> */}
      <UsersCard />
    </UsersStyled>
  );
};

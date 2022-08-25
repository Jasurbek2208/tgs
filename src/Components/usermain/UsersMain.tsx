import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";

//
import {
  IContext,
  IData,
  IPosit,
  IUsers,
  MyContext,
} from "../../context/Context";

//
import AddUserModal from "../addUserModal/userAddModal/AddUserModal";
import Loader from "../Loader/Loader";
import SearchInput from "../searchinput/SerchInput";
import { UsersStyled } from "./UsersStyled";

export const UsersMain: React.FC = () => {
  const { Getusers, users, usersDelete, loading } = useContext<any>(MyContext);
  const [isopen, setisopen] = useState<boolean>(false);
  const [checkStore, setCheckStore] = useState<string[]>([]);

  const [curent, setCurent] = useState({
    fullName: "",
    phoneNumber: "",
    fieldId: "",
    brand: "",
    employeeCount: "",
    positionId: "",
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
      users?.data?.forEach((i: IData) => {
        if (!checkStore.includes(i._id)) {
          setCheckStore((p) => [...p, i._id]);
        }
      });
    } else {
      setCheckStore([]);
    }
  }

  function deletePosit() {
    if (usersDelete) {
      usersDelete({ ids: checkStore });
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
              <input type="checkbox" onChange={allChecked} />
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
      <StyledUserCard>
        {loading ? (
          <Loader />
        ) : (
          users?.map((i: any) => (
            <div className="map" key={i._id}>
              <div className="fullName">
                <input
                  type="checkbox"
                  checked={checkStore.includes(i?._id)}
                  onChange={() => {
                    checkedClick(i?._id);
                    setCurent((p) => ({ ...p, i }));
                  }}
                />
                <p
                  onClick={() => {
                    setisopen(true);
                    setCurent((p) => ({ ...p, i }));
                  }}
                >
                  {i?.fullName}
                </p>
              </div>
              <div className="date">
                <p>{i?.brand}</p>
              </div>
              <div className="soha">
                <p>{i?.phoneNumber}</p>
              </div>
              <div className="brand">
                <p style={{ marginLeft: "20px" }}>{i?.employeeCount}</p>
              </div>
              <div className="brand">
                <p>{i?.fieldId}</p>
              </div>
              <div className="brand">
                <p style={{ marginLeft: "20px" }}>{i?.__v}</p>
              </div>
              <div className="brand">
                <p>{i?.positionId}</p>
              </div>
            </div>
          ))
        )}
      </StyledUserCard>

      {/* USERS CARD */}

      {isopen ? (
        <AddUserModal
          adduser={checkStore.length === 1 ? false : true}
          set={setisopen}
          user={curent}
        />
      ) : null}
    </UsersStyled>
  );
};

const StyledUserCard = styled.div`
  div {
    padding: 13px 18px;
    display: flex;
    align-items: center;

    & > div {
      width: 200px;
      padding: 4px 0;

      &.fullName {
        display: flex;
        align-items: center;
        gap: 8px;

        p {
          font-weight: 600;
          font-size: 14px;
          line-height: 17px;
          color: #181c25;
          margin: 0;
        }
      }

      &.lavozimi {
        display: flex;

        .banOrAcrive {
          cursor: pointer;
          padding: 2.5px 8px;
          background: rgba(255, 59, 59, 0.14);
          border-radius: 6px;
          font-weight: 600;
          font-size: 12px;
          line-height: 14px;
          color: #ff3b3b;
        }
      }

      p {
        color: #8992aa;
        font-size: 13px;
        line-height: 15px;
      }
    }
  }
`;
